// Parse module
const regexForNumbers = /^[+-]?[0-9]+([.,]?[0-9]+)?$/g

// this regex for integer and real numbers

function parseNumbers (...numbers) { // return an array with parsed numbers. If string is NaN, insert NaN to a necessary position in the array
  return numbers.map(num => {
    if (num !== undefined && num.replace(',', '.').search(regexForNumbers) !== -1) { // check numbers by regex
      return parseFloat(num.replace(',', '.'))
    } else { return NaN }
  })
}

module.exports.regexForNumbers = regexForNumbers
module.exports.parseNumbers = parseNumbers
