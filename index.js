const express = require("express");
const app = express();
const port = 5173;

app.get("/", (req, res) => {
  res.send("Olá, mundo! Express.js está funcionando!");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// simulando banco de dados
let products = [
  {
    id: 1,
    name: "shoes",
    size: "xl",
  },
  {
    id: 2,
    name: "pens",
    size: "xs",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "product not found !" });
  }
});