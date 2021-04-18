function regexFindFirstStringInBracket(str){
    let result = '';
    const regexFindBracket = /\(.*?\)/;
    if (str.match(regexFindBracket)) {
        result = str.replace(/[()]/g,'');
    }

    return result
}

console.log(`test 1 success => ${regexFindFirstStringInBracket(`(test success find first string in bracket)`)}`)
console.log(`test 2 failed => ${regexFindFirstStringInBracket(`test failed 2 find first string in bracket`)}`)
console.log(`test 3 failed => ${regexFindFirstStringInBracket(`(test failed 3 find first string in bracket`)}`)
console.log(`test 4 failed => ${regexFindFirstStringInBracket(`test success 4 find first string in bracket)`)}`)
