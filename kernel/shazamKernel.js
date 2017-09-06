const shazam = require('../bin/shazam/shazamConfig');
shazam.handler;

module.exports = (app) => {
    app.use(shazam.log);
};