// Hashmap outside of function so it's only initialized once
let digitOps = {
    1: "one", 
    2: "two", 
    3: "three", 
    4: "four", 
    5: "five", 
    6: "six", 
    7: "seven", 
    8: "eight", 
    9: "nine",
    10: "ten", 
    11: "eleven", 
    12: "twelve", 
    13: "thirteen", 
    14: "fourteen", 
    15: "fifteen", 
    16: "sixteen", 
    17: "seventeen", 
    18: "eighteen", 
    19: "nineteen", 
    20: "twenty",
    30: "thirty", 
    40: "forty", 
    50: "fifty", 
    60: "sixty", 
    70: "seventy", 
    80: "eighty", 
    90: "ninety"
};

function numToEng(num) {
    if (num == null || Number.isNaN(num) || num < 0) {
        return "Input a valid number.";
    }
    if (num === 0) {
        return "zero";
    }

    let finalString = '';
    let is1stDigit = true; // Flag to check if the first digit has been added

    // Handle hundreds
    if (num >= 100) {
        const hundreds = Math.floor(num / 100);
        finalString += digitOps[hundreds] + " hundred";
        num %= 100; // Get the remainder after hundreds
        is1stDigit = false; // No longer the first digit
    }

    // Handle tens and units
    if (num >= 20) {
        const tens = Math.floor(num / 10) * 10;
        finalString += (is1stDigit ? '' : ' ') + digitOps[tens];
        num %= 10; // Get the remainder after tens
        is1stDigit = false; // No longer the first digit
    } else if (num >= 10) {
        return finalString + (is1stDigit ? '' : ' ') + digitOps[num]; // Handle 10-19
    }

    if (num > 0) {
        finalString += (is1stDigit ? '' : ' ') + digitOps[num];
    }

    return finalString;
}

// Performance test function remains unchanged
function testPerformance(fn, runs = 100000) {
    const start = performance.now();

    for (let i = 0; i < runs; i++) {
        fn(Math.floor(Math.random() * 1000));
    }

    const end = performance.now();
    const avgTime = (end - start) / runs;
    console.log(`Average execution time over ${runs} runs: ${avgTime} ms`);
}

testPerformance(numToEng);
