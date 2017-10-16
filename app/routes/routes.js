// routes.js

const path = require('path');

module.exports = function(app, db) {
    app.get('/users', (req, res) => {
        // Request to get all users here
    });

    app.get('/user/:id', (req, res) => {
        // Get user by id - req.params.id
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../src/index.html'))
    })
};
