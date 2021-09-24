const operations = require('../common/operationsMath')

it('should sum two numbers', function () {
  const expectedResult = 8
  const result = operations.sum(5, 3)
  if (result !== expectedResult) {
    throw new Error(
            `Expected ${expectedResult}, but got ${result}`
    )
  }
})

it('should subtraction two numbers', function () {
  const expectedResult = 2
  const result = operations.sub(5, 3)
  if (result !== expectedResult) {
    throw new Error(
            `Expected ${expectedResult}, but got ${result}`
    )
  }
})

it('should multiply two numbers', function () {
  const expectedResult = 15
  const result = operations.mul(3, 5)
  if (result !== expectedResult) {
    throw new Error(
            `Expected ${expectedResult}, but got ${result}`
    )
  }
})
it('should division two numbers', function () {
  const expectedResult = 2
  const result = operations.div(6, 3)
  if (result !== expectedResult) {
    throw new Error(
            `Expected ${expectedResult}, but got ${result}`
    )
  }
})
it('should power two numbers', function () {
  const expectedResult = 81
  const result = operations.pow(3, 4)
  if (result !== expectedResult) {
    throw new Error(
            `Expected ${expectedResult}, but got ${result}`
    )
  }
})
it('should logarithm two numbers', function () {
  const expectedResult = 3
  const result = operations.log(10, 1000)
  if (expectedResult - result >= 0.000001) {
    throw new Error(
            `Expected ${expectedResult}, but got ${result}`
    )
  }
})
