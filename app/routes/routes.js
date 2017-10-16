// routes.js

const path = require('path');

const mockUsers = [
    {
        id: "01",
        firstName: "test",
        lastName: "test",
        age: "20",
        nat: "eng"
    },
    {
        id: "02",
        firstName: "test2",
        lastName: "test2",
        age: "22",
        nat: "eng"
    }
]

module.exports = function(app, db) {
    app.get('/users', (req, res) => {
        // Request to get all users here
        res.json(mockUsers)
    });

    app.get('/user/:id', (req, res) => {
        // Get user by id - req.params.id
        res.json(mockUsers.find(u => u.id === req.params.id))
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../src/index.html'))
    })
};
