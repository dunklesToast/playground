import fastify from 'fastify';

(async () => {
    const server = fastify();

    /*server.addContentTypeParser<string>('application/csp-report', {parseAs: 'string'}, function (request, payload, done) {
        try {
            const json = JSON.parse(payload)
            done(null, json)
        } catch (err) {
            err.statusCode = 400
            done(err, undefined)
        }
    })*/

    server.all('*', (req, res) => {
        console.log('-------');
        console.log(req.method + ' ' + req.raw.url);
        console.log(req.body);
        res.send(200);
    });

    await server.listen(3000, '0.0.0.0');
    console.log('Listening.')
})();
