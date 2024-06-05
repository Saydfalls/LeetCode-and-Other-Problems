var reverse = function(x) {
    let isNegative = false

    if (x < 0) {
        isNegative = true
        x *= -1
    }

    let reversingArray = []
    while (x != 0) {
        reversingArray.push(x % 10)
        x -= (x % 10)
        x /= 10
    }

    let tenX = 1
    while (reversingArray != 0) {
        x += reversingArray.pop()*tenX
        tenX *= 10
    }

    if(isNegative){
        x *= -1
    }

    if (x < -2147483648 || x > 2147483647) {
        return 0
    }

    return x
}

reverse(123)
reverse(-123)
reverse(120)