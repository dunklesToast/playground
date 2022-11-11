const options = {
    version: 'v2',
    token: 's.shhMES1o7646wqSrj7kLJkIb'
};

const vault = require('node-vault')(options);

(async () => {
    const read = await vault.read('locally/data/backend/prod');
    console.log(read.data.data.prod);
})();

