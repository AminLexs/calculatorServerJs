// Simple localization system
const locales = require('./stringsStore')

function localize (lang, key) {
  if (lang !== undefined && locales[lang] !== undefined) {
    return locales[lang][key]
  } else { // default value of language
    return locales.en[key]
  }
}

module.exports = localize
