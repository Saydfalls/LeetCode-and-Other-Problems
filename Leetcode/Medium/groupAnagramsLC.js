/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // I am given an array of strings
    // I have to return an array of arrays where the strings are grouped based on whether or not they are anagrams of each other
    // I have to store anagrams of each string
    // If an anagram like that exists I have to store that anagram with the other anagram(s)
    // possible solutions map of maps?
    // strings can be stored as values, maps as keys?
    // final solution: ordered anagrams as keys, array of valid strs[i] as values
    // iterate over map to get final array

    // create anagram map
    let anagramMap = new Map();

    // loop to find valid anagrams
    for(let i = 0; i < strs.length; i++) {
        // sort anagrams in alphabetical order
        let currentString = strs[i].split('').sort().join('');

        // check if the sorted anagram exists and if not add it to the map
        if(!anagramMap.has(currentString)) {
            anagramMap.set(currentString, []);
        }

        // add the valid string to the map
        anagramMap.get(currentString).push(strs[i]);
    }

    // loop for creating the final array of arrays
    let finalArray = [];
    for(let [key, value] of bigMap) {
        finalArray.push(value);
    }

    return finalArray;
};
