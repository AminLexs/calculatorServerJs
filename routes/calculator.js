//Router module of calculator
const {Router} = require('express')
const router = Router()

const localize = require('../localization/localize')
const calc = require('../dispatchers/calculatorDispatcher')
const encoding = {'content-type': 'application/json; charset=utf-8'} //set encoding for some language. For example, Russian

//Router for "About calculator"
router.get(['/', '/:lang'], async (req, res) => {
    try {
        const data = {
            msg: localize(req.params.lang, "nameApp")
        };

        res.set(encoding).end(JSON.stringify(data))
    } catch (error) {
        res.status(500).end(JSON.stringify(`Internal Server Error. ${error.message}`))
    }
})
//Sum operation router
router.get(['/sum/:num1/:num2/:lang', '/sum/:num1/:num2/'], (req, res) => {
    try {
        let data = calc('sum', req.params.lang, req.params.num1, req.params.num2)
        if (data.error != undefined) {
            res.status(400).set(encoding).end(JSON.stringify(data))
        } else {
            res.set(encoding).end(JSON.stringify(data))
        }
    } catch (error) {
        res.status(500).end(JSON.stringify(`Internal Server Error. ${error.message}`))
    }

})
//Subtraction operation router
router.get(['/sub/:num1/:num2', '/sub/:num1/:num2/:lang'], (req, res) => {
    try {
        let data = calc('sub', req.params.lang, req.params.num1, req.params.num2)
        if (data.error != undefined) {
            res.status(400).set(encoding).end(JSON.stringify(data))
        } else {
            res.set(encoding).end(JSON.stringify(data))
        }
    } catch (error) {
        res.status(500).end(JSON.stringify(`Internal Server Error. ${error.message}`))
    }


})
//Multiplication operation router
router.get(['/mul/:num1/:num2', '/mul/:num1/:num2/:lang'], (req, res) => {
    try {
        let data = calc('mul', req.params.lang, req.params.num1, req.params.num2)
        if (data.error != undefined) {
            res.status(400).set(encoding).end(JSON.stringify(data))
        } else {
            res.set(encoding).end(JSON.stringify(data))
        }
    } catch (error) {
        res.status(500).end(JSON.stringify(`Internal Server Error. ${error.message}`))
    }


})
//Division operation router
router.get(['/div/:num1/:num2', '/div/:num1/:num2/:lang'], (req, res) => {
    try {
        let data = calc('div', req.params.lang, req.params.num1, req.params.num2)
        if (data.error != undefined) {
            res.status(400).set(encoding).end(JSON.stringify(data))
        } else {
            res.set(encoding).end(JSON.stringify(data))
        }
    } catch (error) {
        res.status(500).end(JSON.stringify(`Internal Server Error. ${error.message}`))
    }

})
//For other send error
router.all('*', function (req, res) {
    res.status(404).send('Not Found Server Error')
})
module.exports = router