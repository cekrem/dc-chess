export function setTheme() {
    let themeUrl;

    if ((window.location.hash.indexOf('#skolesjakken')) > -1) {
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