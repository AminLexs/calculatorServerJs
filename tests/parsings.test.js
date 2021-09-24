let parsings = require('../common/parsings')

it('should parse correct numbers', function () {
    let expectedResult = [5, 3, 3.3, 3.3]
    let result = parsings.parseNumbers("5", "3", "3.3", "3,3")
    if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        )
    }
})
it('should parse incorrect numbers', function () {
    let expectedResult = [NaN, NaN, NaN, NaN]
    let result = parsings.parseNumbers("rr5", "3rr", "3 .3", "3re,3")
    if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        )
    }
})