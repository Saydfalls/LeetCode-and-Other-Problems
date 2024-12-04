var longestCommonPrefix = function(strs) {
    
    if(strs.length == 1){
        console.log(strs[0])
    }

    let letters = []

    for(let i = 0; i < strs[0].length; i++){
        let count = 0
        for(let j = 1; j < strs.length; j++){
            if(strs[0].charAt(i) == strs[j].charAt(i)){
                count++
            }
        }
        if(count == strs.length-1){
            letters.push(strs[0].charAt(i))
        }
    }
    letters = letters.join("")
    console.log("Output: " + letters)
}

let stringy = ["flower", "flow", "flight"]
let stringy2 = ["dog", "racecar", "car"]

longestCommonPrefix(stringy)
longestCommonPrefix(stringy2)

