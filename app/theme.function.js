System.register([], function(exports_1) {
    function setTheme() {
        var themeUrl;
        if (window.location.hostname == 'skolesjakken.dc-chess.com' ||
            (window.location.hash.indexOf('#skolesjakken')) > -1) {
            themeUrl = '../styles/skolesjakken.css';
            console.warn(window.location.hostname);
            console.warn(window.location.hash);
            console.warn('Doing whitelabel...');
        }
        else {
            themeUrl = '../styles/concise.css';
            console.log(window.location.hash);
            console.log(window.location.hostname);
            console.log('Not doing whitelabel');
        }
        return themeUrl;
    }
    exports_1("setTheme", setTheme);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=theme.function.js.map