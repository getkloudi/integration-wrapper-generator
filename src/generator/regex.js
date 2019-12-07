// To get these type of functions from the file [**repositoriesUsernameRepoSlugCommitNodeApproveDelete**]
exports.functionNamesExpRegex = /\[\*\*[a-z][a-zA-Z]*\*\*]/g
// To get the function name from the above retrieved string
exports.functionNamesRegex = /[a-zA-Z]+/g

// functions with params regex
// > repositoriesUsernameRepoSlugCommitNodeApproveDelete(username, repoSlug, node)
// Get function naem and parameter from the above string
exports.functionWithParamsRegex = /\>.*\([a-z, A-Z_0-9]*\)\n/g
// Get function name from the above retrieved string
exports.functionNameFromFunctionWithParamRegex = /[a-zA-Z_0-9]+\(/g
// Get function parameters from the above string
exports.functionParamsFromFunctionWithParamRegex = /\([a-zA-Z, _0-9]*\)/g

// Get Code Blocks
exports.codeRegExp = /(```[a-z]*\n[\s\S]*?\n```)/g