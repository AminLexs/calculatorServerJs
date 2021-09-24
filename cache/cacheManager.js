// this is a bad caching solution, but for a simple calculator is enough. Memory leak problem
// If need highload system, use Redis
const store = new Map()

function setCache (key, value) {
  store.set(key, value)
}

function getCache (key) {
  return store.get(key)
}

module.exports.setCache = setCache
module.exports.getCache = getCache
