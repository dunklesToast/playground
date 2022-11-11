import axios from 'axios';
import netrc from 'netrc';

const gebrauchtcarLogin = netrc['ingest.gebrauchtcar.net'];

(async() => {
    await axios({
        method: 'POST',
        url: 'https://ingest.gebrauchtcar.net/ingest/tsp/upload/FILENAME',
        data: Buffer.from('READ FILE HERE'),
        auth: {
            username: gebrauchtcarLogin.login,
            password: gebrauchtcarLogin.password
        }
    })
})();
