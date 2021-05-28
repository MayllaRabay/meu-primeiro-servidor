const express = require('express');
const app = express();

app.get("/", (req, res) => {
  console.log("Recebi um GET /");

  res.send("Meu primeiro servidor HTTP!");
});

app.get("/outrarota", (req, res) => {
  console.log("Recebi outro GET");

  res.send("Esse é o principio do back-end!");
});

app.listen(8000);