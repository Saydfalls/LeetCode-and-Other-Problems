/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // if they aren't the same length they can't be anagrams
    if (s.length != t.length) return false;

    // create frequency maps
    sMap = createAndPopulateMap(s);
    tMap = createAndPopulateMap(t);

    // compare frequency maps
    if (sMap.size == tMap.size) {
        return mapEqualityCheck(sMap, tMap);
    }

    // frequency maps aren't the same size they can't be anagrams
    return false;
};

// creates and populates frequency maps
function createAndPopulateMap (str) {
    let frequencyMap = new Map();
    
    // initializes a key value pair set to the frequency of the letter
    for(let char of str){
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return frequencyMap;
}

// checks if the maps are equal
function mapEqualityCheck (map1, map2) {
    for( let [key, value] of map1) {
        // if the map doesn't contain the letter it can't be an anagram
        if(!map2.has(key)) return false;
        // if the letter doesn't occur the same number of times it can't be an anagram
        if(map2.get(key) != value) return false;
    }

    // it is an anagram
    return true;
}
