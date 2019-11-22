var fs = require('fs');
var functions = require('./functions')

let fileContents = fs.readFileSync('file.md', 'utf8');

// We might ignore this function moving forward
let functionNames = functions.getFunctionNames(fileContents);

let functionWithParams = functions.getFunctionWithParams(fileContents);

let codeBlocks = functions.getCodeBlocks(fileContents);

let modifiedCodeBlocks = functions.generateCodeFile(codeBlocks, functionWithParams);

console.log('File written successfully');