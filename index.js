var fs = require('fs');

let fileContents = fs.readFileSync('file.md', 'utf8');

getCodeBlocks(fileContents);


async function getCodeBlocks(contents) {
    // console.log(contents);
    // let regExp1 = new RegExp('(```[a-z]*\n[\s\S]*?\n```)', 'g');

    // This is the regular expression for code block
    var regExpCode = /(```[a-z]*\n[\s\S]*?\n```)/g
    // This is the regular expression for getting function names
    var regExpFunctionName = /\[\*\*[a-zA-Z]*\*\*]/g

    // This is the regular expression to extract the function name
    let regExpFunctionNameExtract = /[a-zA-Z]+/g


    // console.log(regExp);
    // console.log(regExp1);
    // contents = `You Bought :
    // BGF GLOBAL MULTI ASSET INCOME FUND 
    // CLASS D2 (USD)
    // (OFFSHORE)  Trade Date:
    // Process Date:
    // Settlement Date:
    // Cusip:`;

    // contents = `src ="How are things today /* this\n is comment */ and is your code /* this is another comment */ working?";`;
    // console.log(contents);
    // console.log(regExp.exec(contents));
    // return;
    // console.log(contents);
    // return;
    // let regExp = new RegExp('(```[a-z]*\n[\s\S]*?\n```)', 'g');
    // console.log(regExp);
    // contents = 'Hello dear let username = Harman; \nHow are you doing? let username = ABC;'
    // console.log(contents);
    // let res = regExp.exec(contents);
    // console.log(res);
    // console.log(res.length);
    // console.log(res);    
    // contents = 'This is a test string [more or less] [more or less] [more or less]';
    // console.log(regExp.exec(contents));
    var text = "The cat with the hat sat on the mat."
    var pattern = /th/gi;
    let v;
    let count = 0;
    // console.log(regExp1.exec(contents));
    while ((v = regExpFunctionName.exec(contents)) !== null) {
        // console.log('I am here');
        // console.log(v);
        // console.log(v[0]);
        // Expression for number
        let regExp = /[a-zA-Z]+/g
        console.log(regExp.exec(v[0]));
        break;
        count++;
    }
    console.log(count);
}