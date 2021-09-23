const {Router} = require('express')
const router = Router()

const localize = require('../localization/localize')
const calc = require('../dispatchers/calculatorDispatcher')
const encoding = {'content-type': 'application/json; charset=utf-8'}

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

router.get(['/sum/:num1/:num2/:lang', '/sum/:num1/:num2/'],  (req, res) => {
    let data = calc('sum', req.params.lang, req.params.num1, req.params.num2)
    if (data.error!=undefined){
        res.status(400).set(encoding).end(JSON.stringify(data))
    }else{
        res.set(encoding).end(JSON.stringify(data))
    }
})

router.get(['/sub/:num1/:num2', '/sub/:num1/:num2/:lang'],  (req, res) => {
    let data = calc('sub', req.params.lang, req.params.num1, req.params.num2)
    if (data.error!=undefined){
        res.status(400).set(encoding).end(JSON.stringify(data))
    }else{
        res.set(encoding).end(JSON.stringify(data))
    }

})

router.get(['/mul/:num1/:num2', '/mul/:num1/:num2/:lang'],  (req, res) => {
    let data = calc('mul', req.params.lang, req.params.num1, req.params.num2)
    if (data.error!=undefined){
        res.status(400).set(encoding).end(JSON.stringify(data))
    }else{
        res.set(encoding).end(JSON.stringify(data))
    }
})

router.get(['/div/:num1/:num2', '/div/:num1/:num2/:lang'],  (req, res) => {
    let data = calc('div', req.params.lang, req.params.num1, req.params.num2)
    if (data.error!=undefined){
        res.status(400).set(encoding).end(JSON.stringify(data))
    }else{
        res.set(encoding).end(JSON.stringify(data))
    }
})

router.all('*', function (req, res) {
    res.status(404).send('Not Found Server Error')
})
module.exports = router