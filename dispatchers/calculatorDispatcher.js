const localize = require('../localization/localize')
const {parseNumbers} = require("../common/parsings");
const calc = require("../common/operationsMath");
const cache = require("../cache/cacheManager")

function doOperation(operation, lang, ...rawNumbers) { //It's function-dispatcher
    let cacheData = cache.getCache(`/${operation}/${rawNumbers[0]}/${rawNumbers[1]}/${lang}`)
    if (cacheData != undefined) { //Cache was found
        return cacheData
    } else { //Cache wasn't found
        let numbers = parseNumbers(...rawNumbers)
        let data
        if (isNaN(numbers[0]) || isNaN(numbers[1])) { //parser return NaN if invalid argument. That's why this check
            data = {error: (isNaN(numbers[0])) ? localize(lang, "errorFirstArg") : localize(lang, "errorSecondArg")}
        } else {
            let resultOperation = calc[operation](...numbers)
            data = {
                result: resultOperation
            }
        }
        cache.setCache(`/${operation}/${rawNumbers[0]}/${rawNumbers[1]}/${lang}`, data) // After processing set cache
        return data
    }
}

module.exports = doOperation