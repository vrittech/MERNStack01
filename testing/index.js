const sum = (number1, number2) => {
    if(typeof number1 !== 'number' || typeof number2 !== 'number'){
        throw new Error('Arguments must be of type number')
    }
    return number1 + number2
}

module.exports = {sum}

