const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./app/config/db');

let mockData = [
    {
        userid: 01,
        firstName: "Olly",
        lastName: "Nural",
        age: "21",
        nat: "British"
    },
    {
        userid: 02,
        firstName: "Graziano",
        lastName: "Statello",
        age: "30",
        nat: "Italian"
    },
    {
        userid: 03,
        firstName: "Jasmien",
        lastName: "Cels",
        age: "20",
        nat: "some"
    },
    {
        userid: 04,
        firstName: "Mickell",
        lastName: "Crawford",
        age: "24",
        nat: "British"
    }
];

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'))

const setUpDummyData = false;

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)


    if (setUpDummyData) {
        database.collection('pre-buildweek').remove({})
            database.collection('pre-buildweek').insertMany(mockData, (err, result) => {
                if (err) throw err;
                console.log("Number of documents inserted: " + result.insertedCount);
            });
    }


    require('./app/routes')(app, database);



    app.listen(port, () => {
        console.log('We are now listening on port: ' + port);
    })            
  })