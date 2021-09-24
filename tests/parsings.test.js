const parsings = require('../common/parsings')

it('should parse correct numbers', function () {
  const expectedResult = [5, 3, 3.3, 3.3]
  const result = parsings.parseNumbers('5', '3', '3.3', '3,3')
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(
            `Expected ${expectedResult}, but got ${result}`
    )
  }
})
it('should parse incorrect numbers', function () {
  const expectedResult = [NaN, NaN, NaN, NaN]
  const result = parsings.parseNumbers('rr5', '3rr', '3 .3', '3re,3')
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(
            `Expected ${expectedResult}, but got ${result}`
    )
  }
})
