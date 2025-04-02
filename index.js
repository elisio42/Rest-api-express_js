const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá, mundo! Express.js está funcionando!");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});