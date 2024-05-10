var isValid = function (s) {
    let bool = true
    console.log(`bool exists and = ${bool}. The length of string is ${s.length}`)
    for (let i = 0; i < s.length; i++) {
        console.log(`looping, bool = ${bool} and i = ${i}`)
        switch (s[i]) {
            case "(":
                console.log("in case (")
                if (s[i + 1] === ')') {
                    console.log("if statement working")
                    i++
                    break
                } else {
                    console.log("entering else statement")
                    bool = false
                    break
                }
            case "[":
                console.log("in case [")
                if (s[i + 1] == ']') {
                    console.log("if statement working")
                    i++
                    break
                } else {
                    console.log("entering else statement")
                    bool = false
                    break
                }
            case "{":
                console.log("in case {")
                if (s[i + 1] == '}') {
                    console.log("if statement working")
                    i++
                    break
                } else {
                    console.log("entering else statement")
                    bool = false
                    break
                }
            default: 
                i++
                break
        }
        console.log(`bool is currently ${bool}`)

        if(bool == false){
            break
        }
    }
    console.log(bool)
    console.log()
    console.log()
    return bool
};

isValid("()")
isValid("()[]{}")
isValid("(]")

var isValid2 = function (s) {
    let bool = true

    let countParan = 0
    let countBrack = 0
    let countCurly = 0
    for (let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == ')'){
            countParan++
        }else if(s[i] == '[' || s[i] == ']'){
            countBrack++
        }else if(s[i] == '{' || s[i] == '}'){
            countCurly++
        }
    }
    if((countParan % 2) == 1 || (countBrack % 2) == 1 || (countCurly % 2) == 1){
        bool = false
    }

    return bool
};

isValid2("()")
isValid2("()[]{}")
isValid2("(]")

var isValid3 = function (s) {

    let currentOpen = []
    let currentClose = []
    for(let i = 0; i < s.length; i++){
        
        switch (s[i]) {
            case '(':
                currentOpen.push('(')
                currentClose.push(')')
                break
            case '[':
                currentOpen.push('[')
                currentClose.push(']')
                break
            case '{':
                currentOpen.push('{')
                currentClose.push('}')
                break
            default:
                if (currentClose[currentClose.length-1] == s[i]) {
                    currentOpen.pop()
                    currentClose.pop()
                } else {
                    console.log('returning false')
                    return false
                }
        }
    }
    if (currentOpen.length != 0) {
        console.log('returning incomplete false')
        return false
    }

    console.log('returning true')
    return true
};

isValid3("()")
isValid3("()[]{}")
isValid3("(]")
isValid3("{[]}")