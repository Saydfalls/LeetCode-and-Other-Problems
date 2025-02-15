/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];

    // Helper function to populate the map for a given string
    function populateMap(str, map) {
        for (let char of str) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }

    let pMap = new Map();
    let substringMap = new Map();

    // Initialize pMap and substringMap
    for (let char of p) {
        pMap.set(char, (pMap.get(char) || 0) + 1);
        substringMap.set(char, 0);  // Initialize all characters of p to 0 in substringMap
    }

    let substringIndices = [];
    let leftPointer = 0;

    // Slide the window across string s
    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {

        // Skip the invalid characters
        if (!pMap.has(s[rightPointer])) {
            // Reset the window if an invalid character is found
            leftPointer = rightPointer + 1;
            // Reset the substringMap to all zeroes
            for (let key of substringMap.keys()) {
                substringMap.set(key, 0);
            }
        } else {
            // Increase the count of the current character in substringMap
            substringMap.set(s[rightPointer], (substringMap.get(s[rightPointer]) || 0) + 1);

            // Check if the window size matches the size of p
            if (rightPointer - leftPointer + 1 === p.length) {
                // Compare substringMap with pMap to check if it's an anagram
                let equal = true;
                for (let [key, value] of pMap) {
                    if (substringMap.get(key) !== value) {
                        equal = false;
                        break;
                    }
                }

                // If it's a valid anagram, add the starting index to the result
                if (equal) {
                    substringIndices.push(leftPointer);
                }

                // Now reset the substringMap for the next window
                substringMap.set(s[leftPointer], substringMap.get(s[leftPointer]) - 1);
                if (substringMap.get(s[leftPointer]) === 0) {
                    substringMap.delete(s[leftPointer]);
                }

                // Move the left pointer forward
                leftPointer++;
            }
        }
    }

    return substringIndices;
};
