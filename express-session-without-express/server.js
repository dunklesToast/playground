const express = require('express')
const session = require('express-session');
const app = express()

const sessionOptions = {
    secret: 'IM is on a secret mission',
    resave: false,
    rolling: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 60 * 24 * 7 * 4,
    }
}

app.use(session(sessionOptions));

app.get('/', function (req, res) {
    console.log(req.session)
    res.send(req.cookies);
})


app.listen(3000)
