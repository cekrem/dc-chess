export function isNorwegian() {
    let language = window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage || window.navigator.systemLanguage;

    if ((language.indexOf('nb') > -1) || (language.indexOf('no') > -1)) {
        return '.no';
    }
    else {
        return '';
    }
}