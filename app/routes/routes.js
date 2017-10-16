// routes.js

const path = require('path');

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/users', (req, res) => {
        // // Request to get all users here
        // db.collection("pre-buildweek").find({}, function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //   });

          db.collection("pre-buildweek").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            res.json(result);
        });
    });

    app.get('/user/:id', (req, res) => {
        // Get user by id - req.params.id
        db.collection('pre-buildweek').findOne({ userid : req.params.id }, (err, item) => {
            console.log(item);
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
        // res.json(mockUsers.find(u => u.id === req.params.id))
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../src/index.html'))
    })
};
