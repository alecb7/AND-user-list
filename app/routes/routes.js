// routes.js

const path = require("path");

var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
  app.get("/graziano", (req, res) => {
    res.send("ciaone");
  });

  app.get("/users", (req, res) => {
    // // Request to get all users here

    db
      .collection("pre-buildweek")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
      });
  });

  app.get("/user/:id", (req, res) => {
    let id = parseInt(req.params.id);
    db.collection("pre-buildweek").findOne({ userid: id }, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else if (!result) {
        console.log("Nothing asdsd!");
        res.sendStatus(404);
        return;
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../src/index.html"));
  });
};
