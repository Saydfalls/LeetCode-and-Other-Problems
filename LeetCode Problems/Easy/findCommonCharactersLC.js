/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let commonCharsArray = [];
    for(let i = 0; i < words[0].length; i++){
        let count = words.length - 1;
        for(let j = 1; j < words.length; j++){
            if(words[j].includes(words[0][i])) {
                count -= 1;
            }

            if(count == 0) {
                words = removeAllIncludedChars(words, words[0][i]);
                commonCharsArray.push(words[0][i])
            }
        }
    }

    return commonCharsArray;
};

const removeAllIncludedChars = function(words, char) {
    for(let i = 1; i < words.length; i++) {
        words[i] = removeInstance(words[i], char);
    }
    return words;
}

const removeInstance = function(word, char) {
    for(let i = 0; i < word.length; i++) {
        if(word[i] == char) {
            word = word.slice(0, i) + word.slice(i + 1);
            break;
        }
    }
    return word;
}