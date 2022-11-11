import * as contentful from 'contentful';

const contentfulClient = contentful.createClient({
    space: 'pmmyb8qsa37v',
    accessToken: 'pNFDOoFBWRIh9d0kAAI0d3jvpBX1adSP9fHD-FYceHA',
    environment: 'development'
});

(async () => {
    const entry = await contentfulClient.getEntry('37oGWYHE1E9NKwEQC0aC12');
    console.log(entry)
})();