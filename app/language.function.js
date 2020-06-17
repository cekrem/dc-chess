System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function getLanguagePrefix() {
        var language = window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage || window.navigator.systemLanguage;
        if ((language.indexOf('nb') > -1) || (language.indexOf('no') > -1)) {
            return '.no';
        }
        else {
            return '';
        }
    }
    exports_1("getLanguagePrefix", getLanguagePrefix);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=language.function.js.map