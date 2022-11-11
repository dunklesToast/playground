import * as LaunchDarkly from 'launchdarkly-node-server-sdk'
import * as nanoId from 'nanoid';

const ldClient = LaunchDarkly.init('sdk-ce202cae-e2fb-4ff6-9a93-257fd299150b');

ldClient.once('ready', async () => {
    console.info('Launch Darkly client is ready');

    let isTrue = 0;
    let isFalse = 0;

    for(let i = 0; i !== 1000; i++) {
        const flags = await ldClient.allFlagsState({
            anonymous: true,
            key: 'anonymous'
        });
        if(flags.getFlagValue('use-checkout-v4')) isTrue++;
        else isFalse++;
    }

    console.log(isTrue);
    console.log(isFalse);
    ldClient.close();
})
