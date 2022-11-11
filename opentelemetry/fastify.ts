import fastify from 'fastify';

(async () => {
    const app = fastify();

    app.get('/', function () {
        return 'OK'
    });

    app.listen(3000, '0.0.0.0').then(() => {
        console.log('ready!')
    });
})();
