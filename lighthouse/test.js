const lh = require('lighthouse');
const cl = require('chrome-launcher');
const desktop = require("./desktop");

async function test(config) {
    const results = [];
    for(let i = 0; i !== 5; i++) {
        console.log(config.name + ' #' + i + ': starting');
        const chrome = await cl.launch({chromeFlags: ['--headless']});
        const deviceConfig = config.formFactor === 'mobile' ? undefined : desktop;
        const result = await lh('http://localhost:3041/marke/volkswagen?otreset=false&otpreview=true&otgeo', {
            port: chrome.port,
            ...config,
        }, deviceConfig);
        const lcp = result?.lhr.audits['largest-contentful-paint'].numericValue / 1000
        results.push(lcp);
        await chrome.kill();
        console.log(config.name + ' #' + i + ': done');
    }
    console.log('---')
    const sum = results.reduce((a, b) => a + b, 0);
    console.log(config.name + ': ' + (sum / results.length));
}

(async () => {
    /*await test({
        output: 'json',
        onlyCategories: ['performance'],
        blockedUrlPatterns: ['https://cookie-cdn.cookiepro.com', 'https://www.googletagmanager.com', 'https://im-graphql.instamotion.com'],
        name: 'Mobile Blocked Cookie',
        formFactor: 'mobile'
    });*/
    await test({
        output: 'json',
        onlyCategories: ['performance'],
        name: 'Mobile',
        formFactor: 'mobile'
    });
})();
