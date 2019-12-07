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

exports.generateCodeFile = function generateCodeFile(
  codeBlocks,
  functionWithParams,
  fileName,
  functionType
) {
  // Apend the switch case to the top of the file
  fs.appendFileSync(
    fileName,
    createSwitchfunction(functionWithParams, functionType)
  );

  let positionsToRemove = [];
  // Create a new file
  for (let i = 0; i < codeBlocks.length; i++) {
    if (
      functionType !== "unknown" &&
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

    codeBlock = codeBlock.replace(
      "'YOUR ACCESS TOKEN'",
      "incomingOptions.accessToken"
    );

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
      // codeBlock = codeBlock.replace('console.error(error);', 'return error;');

      codeBlock = codeBlock.replace(
        `console.log('API called successfully.');`,
        `return;`
      );

      codeBlock = codeBlock.replace(
        `console.log('API called successfully. Returned data: ' + data);`,
        "return data;"
      );
    }

    codeBlocks[i] = codeBlock;

    // append this to the file
    let fileContent = `
        // This is a function for ${functionWithParams[i].functionName}
        function ${functionWithParams[i].functionName}(incomingOptions) {
            ${codeBlock}
        }

        `;
    fs.appendFileSync(fileName, fileContent);
  }

  // Remove the elements from Array which have already been used
  for (let i = positionsToRemove.length - 1; i >= 0; i--) {
    codeBlocks.splice(positionsToRemove[i], 1);
    functionWithParams.splice(positionsToRemove[i], 1);
  }

  return codeBlocks, functionWithParams;
};

function createSwitchfunction(functionWithParams, functionType) {
  // Return the switch function to be created;

  let switchCode = "";
  for (let i = 0; i < functionWithParams.length; i++) {
    let currentFunction = functionWithParams[i];

    if (
      functionType !== "unknown" &&
      !currentFunction.functionName.endsWith(functionType)
    ) {
      continue;
    }

    let comment = "No Function parameters";
    if (currentFunction.functionParams) {
      comment = `Function parameters for this API ${currentFunction.functionParams.join(
        ","
      )}`;
    }

    let functionName = currentFunction.functionName;
    if (functionType !== "unknown") {
      functionName = functionName.substring(
        0,
        functionName.length - functionType.length
      );
    }
    switchCode += `
        case "${StringHelper.convertCamelCaseToSnakeCase(
          functionName
        ).toUpperCase()}":
        // ${comment}
        return await this.${currentFunction.functionName}(options);
        `;
  }

  switchCode += `
    default:
    throw ErrorHelper.getError(\`Can't get entity\`, 404)
    `;

  // Mape a wrapper from entity name to wrapper
  let code = `async function ${functionType.toLowerCase()}(entity, options) {
        switch (entity) {
            ${switchCode}
        }
      }`;

  return code;
}
