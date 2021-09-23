const regexForNumbers = /^[+-]?[0-9]+([.,]?[0-9]+)?$/g

function parseNumbers(...numbers) {

    return numbers.map(num => {
        if (num!=undefined && num.replace(',','.').search(regexForNumbers)!=-1)
            return parseFloat(num.replace(',','.'))
        else return NaN
    })
}

module.exports.regexForNumbers = regexForNumbers
module.exports.parseNumbers = parseNumbers