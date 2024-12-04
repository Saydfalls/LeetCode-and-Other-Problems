/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let str1Length = str1.length;
    let str2Length = str2.length;

    // calculating greatest common divisor
    while(str2Length !== 0){
        let substringLength = str2Length;
        str2Length = str1Length % str2Length;
        str1Length = substringLength;
    }

    let gcdString = str1.substring(0, str1Length);

    if(isGCD(str1, gcdString) && isGCD(str2, gcdString)) return gcdString;
    else return "";
};

function isGCD(str, potentialGCDStr){
    let len = potentialGCDStr.length;
    if(str.length % len != 0) return false;

    let gcd = str.length / len;
    let constructedStr = potentialGCDStr.repeat(gcd);
    return constructedStr === str;
}
