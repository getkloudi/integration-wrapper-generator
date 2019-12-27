// To get these type of functions from the file [**repositoriesUsernameRepoSlugCommitNodeApproveDelete**]
exports.functionNamesExpRegex = /\[\*\*[a-z][a-zA-Z_0-9]*\*\*].*\n/g

exports.functionNamesBigRegex = /\[\*\*[a-z][a-zA-Z_0-9]*\*\*]/g
// To get the function name from the above retrieved string
exports.functionNamesRegex = /[a-zA-Z_0-9]+/g

exports.functionTypeRegex = /\| \*\*.*\*\*/g

// functions with params regex
// > repositoriesUsernameRepoSlugCommitNodeApproveDelete(username, repoSlug, node)

// function comments
// exports.functionCommentsRegex = /\>.*\([a-z, A-Z_0-9]*\)\n*.*\n*###/g
// exports.functionCommentsRegex = />[a-zA-Z0-9 ]*\([a-zA-Z0-9_ ,]*\)*[a-zA-Z0-9_ ,\n\(\)]*###/g
exports.functionCommentsRegex = /> .*\(.*\)*/g

// >[\{\}\:\[\]a-zA-Z0-9 ]*\([a-zA-Z0-9_ ,]*\)
// Get function naem and parameter from the above string
exports.functionWithParamsRegex = /\>.*\([a-z, A-Z_0-9]*\)\n/g
// Get function name from the above retrieved string
exports.functionNameFromFunctionWithParamRegex = /[a-zA-Z_0-9]+\(/g
// Get function parameters from the above string
exports.functionParamsFromFunctionWithParamRegex = /\([a-zA-Z, _0-9]*\)/g

// Get Code Blocks
exports.codeRegExp = /(```[a-z]*\n[\s\S]*?\n```)/g