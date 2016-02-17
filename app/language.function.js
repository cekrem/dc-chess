System.register([], function(exports_1) {
    function isNorwegian() {
        var language = window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage || window.navigator.systemLanguage;
        if ((language.indexOf('nb') > -1) || (language.indexOf('no') > -1)) {
            return '.no';
        }
        else {
            return '';
        }
    }
    exports_1("isNorwegian", isNorwegian);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=language.function.js.map