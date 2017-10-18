const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
const db = require("./app/config/db");
const cors = require('cors')

app.use(cors())

let mockData = [
  {
    userid: 1,
    firstName: "Olly",
    age: "21",
    nat: "British"
    lastName: "Nural",
  {
  },
    userid: 2,
    lastName: "Statello",
    firstName: "Graziano",
    age: "30",
    nat: "Italian"
  },
  {
    userid: 3,
    firstName: "Jasmien",
    lastName: "Cels",
    age: "20",
    nat: "some"
  },
  {
    userid: 4,
    firstName: "Mickell",
    lastName: "Crawford",
    age: "24",
    nat: "British"
  },

  {
    userid: 05,
    firstName: "Ina",
    lastName: "Mladenova",
    age: "24",
    nat: "Bulgarian"
  }
];

const port = 8080;

console.log("helo");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src"));

const setUpDummyData = true;

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);

  if (setUpDummyData) {
    database.collection("pre-buildweek").remove({});
    database.collection("pre-buildweek").insertMany(mockData, (err, result) => {
      if (err) throw err;
      console.log("Number of documents inserted: " + result.insertedCount);
    });
  }

  require("./app/routes")(app, database);

  app.listen(port, () => {
    console.log("We are now listening on port: " + port);
  });
});

module.exports = app;
