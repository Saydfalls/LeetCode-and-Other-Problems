function numToEng(num){
    if (num == null || num < 0 || typeof(num) != typeof(0)) {
        return console.log("input valid number.");
    }
    if(num == 0) {
        return 0;
    }
    let digitOps = [
      {numbers: 1, words: "one"}, 
      {numbers: 2, words: "two"}, 
      {numbers: 3, words: "three"}, 
      {numbers: 4, words: "four"}, 
      {numbers: 5, words: "five"}, 
      {numbers: 6, words: "six"}, 
      {numbers: 7, words: "seven"}, 
      {numbers: 8, words: "eight"}, 
      {numbers: 9, words: "nine"},
      {numbers: 11, words: "eleven"}, 
      {numbers: 12, words: "twelve"}, 
      {numbers: 13, words: "thirteen"}, 
      {numbers: 14, words: "fourteen"}, 
      {numbers: 15, words: "fifteen"}, 
      {numbers: 16, words: "sixteen"}, 
      {numbers: 17, words: "seventeen"}, 
      {numbers: 18, words: "eighteen"}, 
      {numbers: 19, words: "nineteen"}, 
      {numbers: 10, words: "ten"}, 
      {numbers: 20, words: "twenty"},
      {numbers: 30, words: "thirty"}, 
      {numbers: 40, words: "fourty"}, 
      {numbers: 50, words: "fifty"}, 
      {numbers: 60, words: "sixty"}, 
      {numbers: 70, words: "seventy"}, 
      {numbers: 80, words: "eighty"}, 
      {numbers: 90, words: "ninety"},
    ];

    let getDigits = [];
    let i = 0;
    while (num > 0) {
        let digit = num % 10;
        if(i == 1) digit *= 10;

        num = Math.floor(num / 10);
        getDigits.push(digit);
        i++;
    }

    let finalString = "";
    for(i = getDigits.length - 1; i >= 0; i--) {
        if(i == 2){
            finalString += digitOps.find(item => item.numbers === getDigits[2]).words + " hundred ";
        } else if (i == 1){
            if (getDigits[1] == 0){
                continue;
            } else if(getDigits[0] != 0 && getDigits[1] == 10){
                getDigits[1] += getDigits[0];
                finalString += digitOps.find(item => item.numbers === getDigits[1]).words;
                break;
            } else {
                finalString += digitOps.find(item => item.numbers === getDigits[1]).words + " ";
            }
        } else {
            if(getDigits[0] == 0) {
                break;
            }
            finalString += digitOps.find(item => item.numbers === getDigits[0]).words;
        }
    }

    return finalString;
  }

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
