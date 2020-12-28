function equalShiftsAmount(input) {
    const charArray = Array.from(input)
    let count = 0
    let result = null

    for(n = 0, result = charArray; n < input.length; n++) {
        const output = arrayRotate(result)
        if(output.join('') === input) {
            count++
        }
    }

    return count
}

function arrayRotate(arr) {
    arr.unshift(arr.pop())
    return arr
}

console.log(
    equalShiftsAmount('ekoeko')
)
