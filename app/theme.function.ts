export function setTheme() {
    let themeUrl;

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