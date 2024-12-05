function invertColors(){
    let randomArray = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];

    for(let i = 0; i < 3; i++) {
        randomArray[i] = Math.abs(randomArray[i] - 255);
    }

    return randomArray;
}

function testPerformance(fn, runs = 1000000) {
    const start = performance.now();

    for (let i = 0; i < runs; i++) {
        fn();  // Run the function multiple times
    }

    const end = performance.now();
    const avgTime = (end - start) / runs;  // Calculate average time

    console.log(`Average execution time over ${runs} runs: ${avgTime} ms`);
}

testPerformance(invertColors);