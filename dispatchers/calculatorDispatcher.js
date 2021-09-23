const localize = require('../localization/localize')
const {parseNumbers} = require("../common/parsings");
const calc = require("../common/operationsMath");

function doOperation(operation, lang, ...rawNumbers) {
    let numbers = parseNumbers(rawNumbers)
    let data
    if (isNaN(numbers[0]) || isNaN(numbers[1])) {
        data = {error: (isNaN(numbers[0])) ? localize(lang, "errorFirstArg") : localize(lang, "errorSecondArg")}
    } else {
        let resultOperation = calc[operation](...numbers)
        data = {
            result: resultOperation
        }
    }
    return data
}

module.exports = doOperation