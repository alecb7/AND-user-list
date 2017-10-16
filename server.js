const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app           = express();
const db             = require('./app/config/db');

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, {});
    app.listen(port, () => {
        console.log('We are now listening on port: ' + port);
    })            
  })