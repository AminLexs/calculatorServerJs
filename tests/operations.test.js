let operations = require('../common/operationsMath')

it('should sum two numbers', function () {
    let expectedResult = 8
    let result = operations.sum(5, 3)
    if (result !== expectedResult) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        )
    }
})

it('should subtraction two numbers', function () {
    let expectedResult = 2
    let result = operations.sub(5, 3)
    if (result !== expectedResult) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        )
    }
})

it('should multiply two numbers', function () {
    let expectedResult = 15
    let result = operations.mul(3, 5)
    if (result !== expectedResult) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        )
    }
})
it('should division two numbers', function () {
    let expectedResult = 2
    let result = operations.div(6, 3)
    if (result !== expectedResult) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        )
    }
})
it('should power two numbers', function () {
    let expectedResult = 81
    let result = operations.pow(3, 4)
    if (result !== expectedResult) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        )
    }
})
it('should logarithm two numbers', function () {
    let expectedResult = 3
    let result = operations.log(10, 1000)
    if (expectedResult-result>=0.000001) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        )
    }
})