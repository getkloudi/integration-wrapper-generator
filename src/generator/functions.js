const fs = require("fs");
const StringHelper = require("../helper/StringHelper");
const regex = require("./regex");

//Regular Expressions
exports.getFunctionNamesWithTypeAndApi = function getFunctionNames(contents) {
  let functionNamesWithTypeAndApi = [];
  let v;
  while ((v = regex.functionNamesExpRegex.exec(contents)) !== null) {
    let functionNameWithTypeAndApi = {};
    if (!v[0]) continue;
    let functionExp = v[0];
    let w;
    while ((w = regex.functionNamesBigRegex.exec(functionExp)) !== null) {
      if (!w[0]) continue;
      let innerFunctionExp = w[0];
      let x;
      while ((x = regex.functionNamesRegex.exec(innerFunctionExp)) !== null) {
        if (!x[0]) continue;
        functionNameWithTypeAndApi['functionName'] = x[0];
      }
    }

    // Get the function type
    let functionType = '';
    while ((w = regex.functionTypeRegex.exec(functionExp)) !== null) {
      if (!w[0]) continue;
      if (w[0].split('**').length > 1) {
        functionType = w[0].split('**')[1];
      }
    }

    functionNameWithTypeAndApi['functionType'] = functionType;
    // get the function API
    let apiIndex = functionExp.indexOf(`${functionType}** `);

    let api = functionExp.substring(apiIndex, functionExp.length - 1).split(' ')[1];
    functionNameWithTypeAndApi['functionApi'] = api;

    functionNamesWithTypeAndApi.push(functionNameWithTypeAndApi);
  }

  return functionNamesWithTypeAndApi;
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
      // Split the newFunctionParamsToReplace  by (
      let splitNewFunctionParamsToReplace = newFunctionParamsToReplace.split(
        "("
      );

      splitNewFunctionParamsToReplace[1] = splitNewFunctionParamsToReplace[1].replace(
        `${functionParams[i]}`,
        `incomingOptions.${functionParams[i]}`
      );

      newFunctionParamsToReplace = splitNewFunctionParamsToReplace.join("(");
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

exports.getCodeComments = function (contents, functionWithParams) {
  let codeComments = [];

  let v;

  let i = 0;

  while ((v = regex.functionCommentsRegex.exec(contents)) !== null) {
    if (!v[0]) continue;
    if (v[0].indexOf(functionWithParams[i].functionName) === -1) {
      continue;
    }
    i++;
    let startIndex = contents.indexOf(v[0]);
    let comment = contents.substring(startIndex, contents.length - 1);

    startIndex = comment.indexOf('\n')
    let endIndex = comment.indexOf('### ');

    comment = comment.substring(startIndex + 1, endIndex);

    codeComments.push(comment);
  }

  return codeComments;
};

exports.generateCodeFile = function generateCodeFile(
  codeBlocks,
  functionWithParams,
  codeComments,
  fileName,
  functionType,
  functionNamesWithTypeAndApi
) {
  // Apend the switch case to the top of the file
  fs.appendFileSync(
    fileName,
    createSwitchfunction(functionWithParams, functionType, codeComments, functionNamesWithTypeAndApi)
  );

  let positionsToRemove = [];
  // Create a new file
  for (let i = 0; i < codeBlocks.length; i++) {
    if (
      functionType.toUpperCase() !== functionNamesWithTypeAndApi[i]['functionType']
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

    codeBlock = codeBlock.replace("'YOUR API KEY'", "incomingOptions.apiKey");

    codeBlock = codeBlock.replace(
      "//api_key.apiKeyPrefix = 'Token';",
      "api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || 'Token';"
    );

    // comment out all variables
    for (let j = 0; j < functionWithParams[i].functionParams.length; j++) {
      let variable = functionWithParams[i].functionParams[j];

      let variableInCode = `let ${variable} = `;
      let indexOfVariable = codeBlock.indexOf(variableInCode);

      // Get index of the first semicolon after this
      let semiColonIndex = codeBlock.substr(indexOfVariable).indexOf(";");

      if (variable !== "opts") {
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
      } else {
        let substring = codeBlock.substr(indexOfVariable, semiColonIndex + 1);
        // Split this string by \n
        splitSubstring = substring.split("\n");
        for (let i = 0; i < splitSubstring.length; i++) {
          let str = splitSubstring[i];
          if (str.indexOf(`_example"`) !== -1) {
            // Comment out this line if not already commented out
            if (str[0] !== "/" && str[1] !== "/") {
              splitSubstring[i] = `//${splitSubstring[i]}`;
            }
          }
        }

        // Join the sub string generated above after commenting out variables containing _example
        codeBlock = codeBlock.replace(
          substring,
          `${splitSubstring.join(
            "\n"
          )}\n\nincomingOptions.opts = Object.assign(opts, function(){ return incomingOptions.opts;})\n\n`
        );
      }

      // incomingOptions change
      codeBlock = codeBlock.replace(
        functionWithParams[i].functionParamToReplace,
        functionWithParams[i].newFunctionParamsToReplace
      );
    }

    // This can be added on need basis
    codeBlock = codeBlock.replace(
      `console.error(error);`,
      `cb(error, null, response)`
    );

    codeBlock = codeBlock.replace(
      `console.log('API called successfully.');`,
      // `return;`
      "cb(null, '', response)"
    );

    codeBlock = codeBlock.replace(
      `console.log('API called successfully. Returned data: ' + data);`,
      // "return data;"
      "cb(null, data, response)"
    );

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
    functionNamesWithTypeAndApi.splice(positionsToRemove[i], 1);
  }

  return codeBlocks, functionWithParams, codeComments, functionNamesWithTypeAndApi;
};

exports.startCodeFile = function (filePath, fileName) {
  let fileNameWithoutExtension = fileName.split(".")[0];

  // Generate fileContent
  let fileContent = `
  const Axios = require("axios");
  const ErrorHelper = require("../../../helpers/ErrorHelper");
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

    async getAccessToken(integration) {
      //TODO: Add custom getAccessToken functionality here
    }

    getNextPaginationURIFromResponse(response) {
      //TODO: Add custom getNextPaginationURIFromResponse functionality here
    }

    async connect(authParams) {
      //TODO: Add custom connect functionality here
    }

    async getThirdPartyProjects(incomingOptions) {
      //TODO: Add custom getThirdPartyProjects functionality here
    }

    async registerWebhooks(incomingOptions) {
      //TODO: Add custom registerWebhooks functionality here
    }

    async syncIntegrationEntities(integration, incomingOptions) {
      const taskUri = nconf.get("TASK_API_URI");
      const authToken = nconf.get("PEPPER_TASK_API_ACCESS_TOKEN");

      try {
        //TODO: Add custom syncIntegrationEntities functionality here
        const res = await Axios.default.post(
          taskUri,
          {
            pepper_task: [],
            project_id: incomingOptions.projectId,
            user_id: incomingOptions.userId
          },
          {
            headers: {
              Authorization: authToken
            }
          }
        );
        return "Ok";
      } catch (error) {
        console.error(error.response);
        return "ERROR";
      }
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

function createSwitchfunction(functionWithParams, functionType, codeComments, functionNamesWithTypeAndApi) {
  // Return the switch function to be created;
  let switchCode = "";
  for (let i = 0; i < functionWithParams.length; i++) {
    let currentFunction = functionWithParams[i];

    if (
      functionType.toUpperCase() !== functionNamesWithTypeAndApi[i]['functionType']
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
          this.${
            currentFunction.functionName
          }(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
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

exports.generateCSVFile = function (fileName, functionNamesWithTypeAndApi, functionWithParams, codeComments) {
  let content = 'api,http-method,description,functionName,functionParameters\n';
  for (let i = 0; i < functionNamesWithTypeAndApi.length; i++) {
    content = `${content}${functionNamesWithTypeAndApi[i]['functionApi']},${functionNamesWithTypeAndApi[i]['functionType']},"${codeComments[i]}",${functionNamesWithTypeAndApi[i]['functionName']},${functionWithParams[i]['functionParams'].join(' ')}\n`
  }
  fs.appendFileSync(
    fileName,
    content
  );
}