const fs = require("fs");
const StringHelper = require("../helper/StringHelper");
const regex = require("./regex");

//Regular Expressions
exports.getFunctionNames = function getFunctionNames(contents) {
  let functionNames = [];
  let v;
  while ((v = regex.functionNamesExpRegex.exec(contents)) !== null) {
    if (!v[0]) continue;
    let functionExp = v[0];
    let w;
    while ((w = regex.functionNamesRegex.exec(functionExp)) !== null) {
      if (!w[0]) continue;
      functionNames.push(w[0]);
    }
  }

  return functionNames;
};

exports.getFunctionWithParams = function getFunctionWithParams(contents) {
  let functionWithParams = [];
  let v;
  while ((v = regex.functionWithParamsRegex.exec(contents)) !== null) {
    let functionName;
    let functionParams = [];
    let functionParamToReplace;
    if (!v[0]) continue;
    // Extract function name
    let w;
    while (
      (w = regex.functionNameFromFunctionWithParamRegex.exec(v[0])) !== null
    ) {
      functionName = w[0];
      // Remove last character i.e. (
      functionName = functionName.slice(0, -1);
      functionParamToReplace = functionName;
    }

    // Extract function params (if any)
    while (
      (w = regex.functionParamsFromFunctionWithParamRegex.exec(v[0])) !== null
    ) {
      functionParams = w[0];

      functionParamToReplace += functionParams;

      // Remove first and last character, trim white spaces and split by , if params are present
      functionParams = functionParams.slice(1, -1).replace(/\s/g, "");
      if (functionParams) {
        // Split the function parameters by comma
        functionParams = functionParams.split(",");
      } else {
        // No parameters are to be passed to this function
        functionParams = [];
      }
    }

    // format the function params
    // Remove the last char from function Params
    functionParamToReplace = functionParamToReplace.slice(0, -1);
    let newFunctionParamsToReplace = functionParamToReplace;

    for (let i = 0; i < functionParams.length; i++) {
      newFunctionParamsToReplace = newFunctionParamsToReplace.replace(
        `${functionParams[i]}`,
        `incomingOptions.${functionParams[i]}`
      );
    }

    functionWithParams.push({
      functionName: functionName,
      functionParams: functionParams,
      functionParamToReplace: functionParamToReplace,
      newFunctionParamsToReplace: newFunctionParamsToReplace
    });
  }

  return functionWithParams;
};

exports.getCodeBlocks = function getCodeBlocks(contents) {
  let codeBlocks = [];
  let v;
  while ((v = regex.codeRegExp.exec(contents)) !== null) {
    if (!v[0]) continue;
    codeBlocks.push(v[0]);
  }

  return codeBlocks;
};


exports.getCodeComments = function (contents) {
  let codeComments = [];

  let v;

  while ((v = regex.functionCommentsRegex.exec(contents)) !== null) {
    if (!v[0]) continue;
    // Split the string with \n
    let splitArray = v[0].split('\n');
    let comment = '';
    if (splitArray.length > 1) {
      for (let i = 1; i < splitArray.length - 1; i++) {
        if (splitArray[i].trim()) {
          comment += splitArray[i];
        }
      }
    }
    codeComments.push(comment);
  }

  return codeComments;
}

exports.generateCodeFile = function generateCodeFile(
  codeBlocks,
  functionWithParams,
  codeComments,
  fileName,
  functionType
) {
  // Apend the switch case to the top of the file
  fs.appendFileSync(
    fileName,
    createSwitchfunction(functionWithParams, functionType, codeComments)
  );

  let positionsToRemove = [];
  // Create a new file
  for (let i = 0; i < codeBlocks.length; i++) {
    if (
      functionType !== "unknownHTTPMethod" &&
      !functionWithParams[i].functionName.endsWith(functionType)
    ) {
      continue;
    } else {
      positionsToRemove.push(i);
    }

    let codeBlock = codeBlocks[i];
    // Remove the first and last line
    codeBlock = codeBlock.replace("```javascript\n", "");
    codeBlock = codeBlock.replace("\n```", "");

    let importStatement = codeBlock.split("\n")[0];
    // Split the import statement by space
    let importStatementWords = importStatement.split(" ");
    // Covert the import statement to require
    if (importStatementWords[0] === "import") {
      let fileName = importStatementWords[1];
      let requireStatement = `const ${fileName} = require('./dist');`;
      // Remove the Code Block
      codeBlock = codeBlock.replace(importStatement, requireStatement);
    }

    codeBlock = codeBlock.replace(
      "'YOUR ACCESS TOKEN'",
      "incomingOptions.accessToken"
    );

    codeBlock = codeBlock.replace(
      "'YOUR API KEY'",
      "incomingOptions.apiKey"
    );

    codeBlock = codeBlock.replace(
      "//api_key.apiKeyPrefix = 'Token';",
      "api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix;"
    )

    // comment out all variables
    for (let j = 0; j < functionWithParams[i].functionParams.length; j++) {
      let variable = functionWithParams[i].functionParams[j];

      let variableInCode = `let ${variable} = `;
      let indexOfVariable = codeBlock.indexOf(variableInCode);

      // Get index of the first semicolon after this
      let semiColonIndex = codeBlock.substr(indexOfVariable).indexOf(";");

      // Add starting comment
      codeBlock =
        codeBlock.substr(0, indexOfVariable - 2) +
        "\n/*" +
        codeBlock.substr(indexOfVariable);

      // Add ending comment
      codeBlock =
        codeBlock.substr(0, semiColonIndex + indexOfVariable + 1) +
        ";*/" +
        codeBlock.substr(semiColonIndex + indexOfVariable + 2);

      // incomingOptions change
      codeBlock = codeBlock.replace(
        functionWithParams[i].functionParamToReplace,
        functionWithParams[i].newFunctionParamsToReplace
      );

      // This can be added on need basis
      codeBlock = codeBlock.replace(`console.error(error);`, `cb(error, null)`);

      codeBlock = codeBlock.replace(
        `console.log('API called successfully.');`,
        // `return;`
        "cb(null, '')"
      );

      codeBlock = codeBlock.replace(
        `console.log('API called successfully. Returned data: ' + data);`,
        // "return data;"
        "cb(null, data)"
      );
    }

    codeBlocks[i] = codeBlock;

    // append this to the file
    let fileContent = `
        // This is a function for ${functionWithParams[i].functionName}
        /* ${codeComments[i]} */
        ${functionWithParams[i].functionName}(incomingOptions, cb) {
            ${codeBlock}
        }

        `;
    fs.appendFileSync(fileName, fileContent);
  }

  // Remove the elements from Array which have already been used
  for (let i = positionsToRemove.length - 1; i >= 0; i--) {
    codeBlocks.splice(positionsToRemove[i], 1);
    functionWithParams.splice(positionsToRemove[i], 1);
    codeComments.splice(positionsToRemove[i], 1);
  }

  return codeBlocks, functionWithParams, codeComments;
};

exports.startCodeFile = function (filePath, fileName) {
  let fileNameWithoutExtension = fileName.split(".")[0];

  // Generate fileContent
  let fileContent = `
  const axios = require("axios");
  const errorHelper = require("../../../helpers/ErrorHelper");
  const nconf = require("nconf");
  const qs = require("querystring");

  class ${fileNameWithoutExtension} {
    get name() {
      return \"${fileNameWithoutExtension.split("Service")[0].toUpperCase()}\";
    }

    get description() {
      return;
    }

    get icon() {
      return \"${fileNameWithoutExtension
        .split("Service")[0]
        .toLowerCase()}.svg\";
    }

    get category() {
      return;
    }

    get apiEndpoint() {
      return;
    }

    get authMethod() {
      return;
    }

    get authEndpoint() {
      return;
    }

    get apiTokenURL() {
      return;
    }

    get scopes() {
      return;
    }

    get requiredAuthParams() {
      return;
    }

    get primaryAction() {
      return;
    }

    get webhooks() {
      return;
    }

    get webhooksToTaskMap() {
      return;
    }

    get entities() {
      return;
    }

    async connect(authParams) {
      //TODO: Add custom connect functionality here
    }

    async syncIntegrationEntities(options) {
      //TODO: Add custom syncIntegrationEntities functionality here
    }

  `;
  fs.appendFileSync(filePath, fileContent);
};

exports.endCodeFile = function (filePath, fileName) {
  let fileNameWithoutExtension = fileName.split(".")[0];

  let fileContent = `
  }
  module.exports = new ${fileNameWithoutExtension}();`;
  fs.appendFileSync(filePath, fileContent);
};

function createSwitchfunction(functionWithParams, functionType, codeComments) {
  // Return the switch function to be created;
  let switchCode = "";
  for (let i = 0; i < functionWithParams.length; i++) {
    let currentFunction = functionWithParams[i];

    if (
      functionType !== "unknownHTTPMethod" &&
      !currentFunction.functionName.endsWith(functionType)
    ) {
      continue;
    }

    // let comment = "No Function parameters";
    let comment = `${codeComments[i]}`;
    if (currentFunction.functionParams) {
      comment = `
      ${comment}
      Function parameters for this API ${currentFunction.functionParams.join(
        ","
      )}`;
    }

    let functionName = currentFunction.functionName;
    if (functionType !== "unknownHTTPMethod") {
      functionName = functionName.substring(
        0,
        functionName.length - functionType.length
      );
    }
    switchCode += `
        case "${StringHelper.convertCamelCaseToSnakeCase(
          functionName
        ).toUpperCase()}":
        /* ${comment}
        */
        return new Promise((resolve, reject) => {
          this.${currentFunction.functionName}(options, (err, data) => {
            if(err) {
              reject(err);
            }
            resolve(data);
          })
        })
        `;
  }

  switchCode += `
    default:
    throw ErrorHelper.getError(\`Can't get entity\`, 404)
    `;

  // Mape a wrapper from entity name to wrapper
  let code = `async ${
    functionType !== "unknownHTTPMethod"
      ? functionType.toLowerCase()
      : functionType
  }(entity, options) {
        switch (entity) {
            ${switchCode}
        }
      }`;

  return code;
}