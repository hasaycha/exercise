function anagramWords(words) {
    const result = [];
    let listAlreadyInsert = [];
    for (let i = 0; i < words.length; i++) {
        const listAnagrams = [];
        for (let j = 1; j <= words.length - 1; j++) {
            if ((!listAlreadyInsert.includes(words[i]) || !listAlreadyInsert.includes(words[j])) && isAnagram(words[i], words[j])) {
                if(!listAnagrams.includes(words[i])){
                    listAnagrams.push(words[i]);
                }
                if (!listAnagrams.includes(words[j])){
                    listAnagrams.push(words[j]);
                }
            }
        }

        listAlreadyInsert = listAlreadyInsert.concat(listAnagrams);
        if(listAnagrams.length > 0){
            result.push(listAnagrams);
        }
    }

    return result;
}

function isAnagram(stringA, stringB) {
    return constructString(stringA) === constructString(stringB)
}
function constructString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

const wordsAnagrams = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
console.log(anagramWords(wordsAnagrams));
