const {Router} = require('express')
const router = Router()
const localize = require('../localization/localize')
const encoding = {'content-type': 'application/json; charset=utf-8'}

function parseNumbers(rawNum1, rawNum2, language) {
    const regex = "[+-]?[0-9]+([.,]?[0-9]+)?$"
    let num1 = rawNum1.match(regex)
    let num2 = rawNum2.match(regex)
    if (num1 != null) {
        if (num1[0].includes(".") || num1[0].includes(","))
            num1 = parseFloat(num1[0])
        else
            num1 = parseInt(num1[0])
    } else return localize(language, "errorFirstArg")
    if (num2 != null) {
        if (num2[0].includes(".") || num2[0].includes(","))
            num2 = parseFloat(num2[0])
        else
            num2 = parseInt(num2[0])
    } else return localize(language, "errorSecondArg")
    return [num1, num2]
}

router.get(['/', '/:lang'], async (req, res) => {
    try {
        const data = {
            msg: localize(req.params.lang, "nameApp")
        };

        res.set(encoding).end(JSON.stringify(data))
    } catch {
        res.status(500).end(JSON.stringify("Internal Server Error"))
    }
})

router.get(['/sum/:num1/:num2/:lang', '/sum/:num1/:num2/'], async (req, res) => {
    let nums = parseNumbers(req.params.num1, req.params.num2, req.params.lang)

    let data = (Array.isArray(nums)) ? {
        result: nums[0] + nums[1]
    } : {
        error: nums
    }
    res.set(encoding).end(JSON.stringify(data))
})

router.get(['/sub/:num1/:num2', '/sub/:num1/:num2/:lang'], async (req, res) => {
    let nums = parseNumbers(req.params.num1, req.params.num2, req.params.lang)

    let data = (Array.isArray(nums)) ? {
        result: nums[0] - nums[1]
    } : {
        error: nums
    }
    res.set(encoding).end(JSON.stringify(data))
})

router.get(['/mul/:num1/:num2', '/mul/:num1/:num2/:lang'], async (req, res) => {
    let nums = parseNumbers(req.params.num1, req.params.num2, req.params.lang)

    let data = (Array.isArray(nums)) ? {
        result: nums[0] * nums[1]
    } : {
        error: nums
    }
    res.set(encoding).end(JSON.stringify(data))
})

router.get(['/div/:num1/:num2', '/div/:num1/:num2/:lang'], async (req, res) => {
    let nums = parseNumbers(req.params.num1, req.params.num2, req.params.lang)
    if (nums[1] == 0) nums = localize(req.params.lang, "divZero")
    let data = (Array.isArray(nums)) ? {
        result: nums[0] / nums[1]
    } : {
        error: nums
    }
    res.set(encoding).end(JSON.stringify(data))
})

router.all('*', function (req, res) {
    res.status(404).send('Not Found Server Error')
})
module.exports = router