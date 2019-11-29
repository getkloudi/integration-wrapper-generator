const {
    exec
} = require('child_process');

const fs = require('fs');
const functions = require('./functions')

async function executeCommand(argv) {
    try {
        let projectName = `${argv[2]}`;
        let openApiFilePath = `${argv[3]}`;

        console.log(`Removing ${projectName} directory after completion.`)
        // Remove the directory for the project name after execution
        let rmCommand = `rm -rf ${projectName}`;

        await execShellCommand(rmCommand);

        console.log('Executing openapi-generator command');
        // Execute Open API Command
        let openApiCommand = `openapi-generator generate -i ${openApiFilePath} -g javascript -o ${projectName}/ --additional-properties=withSeparateModelsAndApi=true,supportsES6=true,npmName=bitbucket-ts,npmVersion=1.0.0 --skip-validate-spec`;

        openApi = await execShellCommand(openApiCommand);

        // parse the api md files
        console.log('Parsing md api files generated');
        await parseFilesAndGenerateCodeFile(`${projectName}/`, `${projectName}.js`);

        console.log('Command Execution completed');
    } catch (e) {
        console.log(e);
    }
}

// This function is used to parse the files generated, 
// fetch required api.md files and fetch code snippets from it.
async function parseFilesAndGenerateCodeFile(path, fileName) {
    // Fetch all files names with *api.md in the name
    let findCommand = await execShellCommand(`find ${path}* -name "*Api.md"`);
    let findCommandArray = findCommand.trim().split('\n');

    let functionsTypes = ["Get", "Post", "Put", "Delete", "Patch"];

    // Start writing file with empty string
    fs.writeFileSync('newfile.js', '');

    var functionWithParams = [];
    var codeBlocks = [];

    for (let j = 0; j < findCommandArray.length; j++) {
        let file = findCommandArray[j];

        let fileContents = fs.readFileSync(file, 'utf8');

        functionWithParams.push(...functions.getFunctionWithParams(fileContents));

        codeBlocks.push(...functions.getCodeBlocks(fileContents));
    }


    for (let i = 0; i < functionsTypes.length; i++) {
        let functionType = functionsTypes[i];
        codeBlocks,
        functionWithParams = functions.generateCodeFile(codeBlocks, functionWithParams, fileName, functionType);
    }

    if (codeBlocks.length && functionWithParams.length) {
        // If we have any remaining functions, mark them as unknown
        functions.generateCodeFile(codeBlocks, functionWithParams, fileName, 'unknown');
    }
}

let arguments = process.argv;
executeCommand(arguments);

function execShellCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, {
            maxBuffer: 1024 * 5000
        }, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
        });
    });
}