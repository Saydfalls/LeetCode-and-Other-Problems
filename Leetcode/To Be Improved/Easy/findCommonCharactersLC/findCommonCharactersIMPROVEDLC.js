/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const wordsFrequencyMaps = new Map(); 

    for(let word of words){
        wordsFrequencyMaps.set(word, createFrequencyMap(word));
    }

    let commonCharsMap = wordsFrequencyMaps.values().next().value;
     for(let map of wordsFrequencyMaps.values()){
        commonCharsMap = updateMapWithMinValues(commonCharsMap, map);
     }

     return mapToArray(commonCharsMap);
};

const createFrequencyMap = function(word){
    let wordFrequencyMap = new Map();

    for(let char of word){
        // this sets the char and its value by looking at whether or not the char exists.
        // if it does exist it will get the value of that char and increment it, resetting the char.
        // if it doesn't exist, the OR operation is there and allows the value to be 0, still incrementing by 1.
        // this takes care of creating the individual maps for all the words.
        wordFrequencyMap.set(char, (wordFrequencyMap.get(char) || 0) + 1);
    }
    
    return wordFrequencyMap;
}

const updateMapWithMinValues = function(map1, map2){
    for(let [key, value] of map1){
        if(map2.has(key)){
            map1.set(key, Math.min(value, map2.get(key)));
        } else {
            map1.delete(key);
        }
    }

    return map1;
};

const mapToArray = function(map){
    let array = [];
    for(const [key, value] of map){
        for(let i = 0; i < value; i++){
            array.push(key);
        }
    }

    return array;
}