const {
  exec
} = require("child_process");

const fs = require("fs");
const functions = require("./src/generator/functions");

async function executeCommand(argv) {
  try {
    let projectName = `${argv.name}`;
    let openApiFilePath = `${argv.spec}`;
    let version = `${argv.v ? argv.v : `1.0.0`}`;

    console.log(`Removing ${projectName} directory from out/ folder`);
    // Remove the directory for the project name after execution
    let rmCommand = `rm -rf out/${projectName}`;
    await execShellCommand(rmCommand);

    console.log("Executing openapi-generator command");
    // Execute Open API Command
    let openApiCommand = `openapi-generator generate -i ${openApiFilePath} -g javascript -o out/${projectName}/ --additional-properties=withSeparateModelsAndApi=true,supportsES6=true,projectName=${projectName},projectVersion=${version},modelPackage=model,apiPackage=api --skip-validate-spec`;
    openApi = await execShellCommand(openApiCommand);

    let npmInstallCommand = `npm install --prefix out/${projectName}`;
    await execShellCommand(npmInstallCommand);
    let npmBuildCommand = `npm run build --prefix out/${projectName}`;
    await execShellCommand(npmBuildCommand);

    // parse the api md files
    console.log("Parsing md api files generated");
    await parseFilesAndGenerateCodeFile(
      `out/${projectName}/`,
      `${projectName.charAt(0).toUpperCase()}${projectName
        .slice(1)
        .toLowerCase()}Service.js`,
      `${projectName.charAt(0).toUpperCase()}${projectName
          .slice(1)
          .toLowerCase()}Service.csv`
    );

    console.log("Command Execution completed");
  } catch (e) {
    console.log(e);
  }
}

// This function is used to parse the files generated,
// fetch required api.md files and fetch code snippets from it.
async function parseFilesAndGenerateCodeFile(path, fileName, csvFileName) {
  const fileNameWithPath = `${path}${fileName}`;
  const csvFileNameWithPath = `${path}${csvFileName}`;
  // Fetch all files names with *api.md in the name
  let findCommand = await execShellCommand(`find ${path}* -name "*Api.md"`);
  let findCommandArray = findCommand.trim().split("\n");

  let functionsTypes = ["Get", "Post", "Put", "Delete", "Patch"];

  // Start writing file with empty string
  fs.writeFileSync(`${fileNameWithPath}`, "");
  fs.writeFileSync(`${csvFileNameWithPath}`, "");

  var functionWithParams = [];
  var codeBlocks = [];
  var codeComments = [];
  var functionNamesWithTypeAndApi = [];

  for (let j = 0; j < findCommandArray.length; j++) {
    let file = findCommandArray[j];

    let fileContents = fs.readFileSync(file, "utf8");

    functionWithParams.push(...functions.getFunctionWithParams(fileContents));

    functionNamesWithTypeAndApi.push(...functions.getFunctionNamesWithTypeAndApi(fileContents));

    codeBlocks.push(...functions.getCodeBlocks(fileContents));

    codeComments.push(...functions.getCodeComments(fileContents));
  }

  // Generate CSV File
  functions.generateCSVFile(csvFileNameWithPath, functionNamesWithTypeAndApi, functionWithParams, codeComments);

  // Generate getter functions and start class code
  functions.startCodeFile(fileNameWithPath, fileName);

  for (let i = 0; i < functionsTypes.length; i++) {
    let functionType = functionsTypes[i];
    codeBlocks,
    functionWithParams,
    codeComments, functionNamesWithTypeAndApi = functions.generateCodeFile(
      codeBlocks,
      functionWithParams,
      codeComments,
      fileNameWithPath,
      functionType,
      functionNamesWithTypeAndApi
    );
  }

  if (codeBlocks.length && functionWithParams.length) {
    // If we have any remaining functions, mark them as unknown
    functions.generateCodeFile(
      codeBlocks,
      functionWithParams,
      codeComments,
      fileNameWithPath,
      "unknownHTTPMethod"
    );
  }

  // End class functions
  functions.endCodeFile(fileNameWithPath, fileName);
}

var argv = require("yargs")
  .scriptName("api-code-gen")
  .usage("Usage: $0 -name [str] -spec [path]")
  .demandOption(["name", "spec"])
  .string("v")
  .describe("name", "Name of the API tool you are generating code for")
  .describe("spec", "Path of OpenAPI v3 spec of the API tool")
  .describe("v", "Version of the API being generated")
  .help()
  .alias("h", "help").argv;
executeCommand(argv);

function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(
      cmd, {
        maxBuffer: 1024 * 5000
      },
      (error, stdout, stderr) => {
        if (error) {
          console.warn(error);
        }
        resolve(stdout ? stdout : stderr);
      }
    );
  });
}