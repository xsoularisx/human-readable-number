module.exports = function toReadable(number) {
    const firstNumbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const dozens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    if (number === 0) {
        return 'zero'
    }

    let getDozens = function (incNum) {
        let number = Number.parseInt(incNum)
        if (number < 20) {
            if (number === 0) {
                return ''
            }
            return firstNumbers[number]
        } else if (number < 100) {
            let newNum = number.toString().split('');
            return `${dozens[newNum[0]]} ${firstNumbers[newNum[1]]}`
        } else {
            let newNum = number.toString().split('');
            return `${firstNumbers[newNum[0]]} hundred ${getDozens(newNum[1] + newNum[2])}`
        }
    }
    return getDozens(number).trimEnd()
}
