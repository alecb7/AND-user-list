const express = require("express");
const app = express();
const port = 8082;

app.listen(port, () => {
  console.log("We are now listening on port: " + port);
});

app.use(express.static("../src"));
