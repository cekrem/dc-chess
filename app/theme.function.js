System.register([], function(exports_1) {
    function setTheme() {
        var themeUrl;
        if (window.location.hostname == 'skolesjakken.dc-chess.com') {
            themeUrl = '../styles/skolesjakken.css';
            console.warn(window.location.hostname);
            console.warn('Doing whitelabel...');
        }
        else {
            themeUrl = '../styles/concise.css';
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