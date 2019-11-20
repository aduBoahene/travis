const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("ci with travis and node js");
});

const server = app.listen(3000, () => {
  console.log("App running on port 3000");
});

module.exports = server;
