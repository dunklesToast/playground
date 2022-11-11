import * as parser from 'cloudfront-log-parser';
import * as fs from 'fs';

const accesses = parser.parse(fs.readFileSync('./EJ0ZY1E0RA90O.2022-08-02-21.2b648ecc.log'), { format: 'web' });

accesses.forEach((access) => {
    if (!access['cs-user-agent']) return;
    if(access['cs-user-agent'].toLowerCase().includes('googlebot')) {
        console.log(access)
    }
})
