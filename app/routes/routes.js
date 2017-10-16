// routes.js

const path = require('path');

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/users', (req, res) => {
        // // Request to get all users here

          db.collection("pre-buildweek").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result)
            res.json(result);
        });
    });

    app.get('/user/:id', (req, res) => {
        // // Get user by id - req.params.id
        // var o_id = new ObjectID(req.params.id);
        // let idQuery = {'_id': o_id};
        // db.collection('pre-buildweek').findOne(idQuery, (err, item) => {
        //     if (err) {
        //         es.sendFile(path.join(__dirname, '../../src/404.html'))
        //     } else {
        //         res.send(item);
        //     }
        // });
        // // res.json(mockUsers.find(u => u.id === req.params.id))

        let id = parseInt(req.params.id);
        db.collection('pre-buildweek').findOne({ userid : id }, (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (!result) {
                console.log('Nothing found!');
                res.sendStatus(404);
                return;
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../src/index.html'))
    })
};
