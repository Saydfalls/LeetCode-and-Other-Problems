function numToEng(num){
    if (num == null || Number.isNaN(num) || num < 0) {
        return console.log("input valid number.");
    }
    if(num == 0) {
        return "zero";
    }

    // actually used a hashmap
    let digitOps = {
      "1": "one", 
      "2": "two", 
      "3": "three", 
      "4": "four", 
      "5": "five", 
      "6": "six", 
      "7": "seven", 
      "8": "eight", 
      "9": "nine",
      "11": "eleven", 
      "12": "twelve", 
      "13": "thirteen", 
      "14": "fourteen", 
      "15": "fifteen", 
      "16": "sixteen", 
      "17": "seventeen", 
      "18": "eighteen", 
      "19": "nineteen", 
      "10": "ten", 
      "20": "twenty",
      "30": "thirty", 
      "40": "fourty", 
      "50": "fifty", 
      "60": "sixty", 
      "70": "seventy", 
      "80": "eighty", 
      "90": "ninety",
    };

    // splitting nums to strings for faster access to digits
    let digits = num.toString().split('');

    /*
      Accessing from left to right with a bunch of wacky conditionals to
      deal with zeros, which happen to be the biggest problem of this method.
    */
    let finalString = "";
    for(let i = 0; i < digits.length; i++) {
        if(digits.length == 3 && i == 0) {
            finalString += digitOps[digits[i]];
            finalString += " hundred ";
        } else if(i == digits.length - 2 && digits[i] == "1"){
            finalString += digitOps[digits[i]+digits[i+1]];
            break;
        } else if (i == digits.length - 2 && digits[i] != "0" && digits[i + 1] != "0"){
            finalString += digitOps[digits[i]+"0"];
        } else if(i == digits.length - 2 && digits[i] != "0" && digits[i+1] == "0"){
            finalString += digitOps[digits[i]+"0"] + " ";
            break;
        } else if (i != digits.length - 2 && digits[i] != "0"){
            finalString += " " + digitOps[digits[i]];
        }
    }

    return finalString;
  }

// performance test function added to check for improvements
// running the function 100,000x and averaging result
  function testPerformance(fn, runs = 100000) {
    const start = performance.now();

    for (let i = 0; i < runs; i++) {
        fn(Math.floor(Math.random() * 1000));  // Run the function multiple times
    }

    const end = performance.now();
    const avgTime = (end - start) / runs;  // Calculate average time

    console.log(`Average execution time over ${runs} runs: ${avgTime} ms`);
}

testPerformance(numToEng);
