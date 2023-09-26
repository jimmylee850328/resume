http = require('http');
url = require('url');

var host = '127.0.0.1';
var port = 23456;

var cors = require('cors');
var express = require('express');

var app = express();
app.use(cors());

var session = require('express-session');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.use(express.json({ limit: '81mb' } )); // support json encoded bodies
app.use(express.urlencoded({ extended: true, limit: '81mb' })); // support encoded bodies
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use('/get_products/', async function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Request-Method', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.send({});
});

app.listen(port, (err) => {
    if (err) {
        return console.log('bad');
    }
});