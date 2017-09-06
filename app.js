const app = require("express")();
const consign = require('consign');
require('dotenv').config({ path: `./bin/env/${process.env.NODE_ENV || 'development'}.env` })
const webconfig = require('./bin/webconfig.js');

consign({
    verbose: false
}).include('kernel')
    .then('bin/controller')
    .then('middleware')
    .into(app);

app.listen(webconfig.myApi.port, () => {
    console.log(`[${webconfig.myApi.name}] - Ativo :D | ${webconfig.myApi.url}:${webconfig.myApi.port}`);
});

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var promise = mongoose.createConnection('mongodb://localhost/lost', {
    useMongoClient: true
});
promise.then(function (db) {
    console.log('Conectado com o mongo');
});

module.exports = app;