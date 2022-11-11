const axios = require('axios');
const cheerio = require('cheerio');

let ids = [];

(async () => {
    for(let i = 0; i !== 10; i++) {
        const res = await axios.get('https://www.instamotion.com/');
        console.log(res.headers['x-cache']);
        const $ = cheerio.load(res.data);
        const nextData = $('#__NEXT_DATA__').get()[0].children[0].data;
        const parsed = JSON.parse(nextData);
        const {userId} = parsed.props.pageProps;
        console.log(userId)
        if(ids.includes(userId)) {
            throw new Error('ID is duped')
        }
        ids.push(userId);
    }
})();
