const locales = require('./stringsStore');

function localize(lang, key) {
    if (lang != undefined)
        return locales[lang][key]
    else
        return locales["en"][key]
}

module.exports = localize