import * as AWS from 'aws-sdk';

const client = new AWS.S3({ accessKeyId: 'tom', secretAccessKey: '4YynRFpQSd5NrZ5KxdSErf9gjvJW6Fub', region: 'eu-central-1', endpoint: 'https://s3.dunklestoast.de' });

client.listBuckets((err, data) => {
    console.log(err)
    console.log(data)
})
