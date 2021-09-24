// Simple math operations
module.exports.sum = function (x, y) {
  return x + y
}

module.exports.sub = function (x, y) {
  return x - y
}
module.exports.mul = function (x, y) {
  return x * y
}
module.exports.div = function (x, y) {
  if (y === 0) {
    const error = new Error()
    error.message = 'Division by zero'
    throw error
  }
  return x / y
}
module.exports.pow = function (x, y) {
  return Math.pow(x, y)
}
module.exports.log = function (x, y) {
  return Math.log(y) / Math.log(x)
}
