const express = require("express");
const app = express();
const port = 5173;

app.use(express.json()); // Middleware para interpretar JSON

app.get("/", (req, res) => {
  res.send("Olá, mundo! Express.js está funcionando!");
});

// Simulando banco de dados
let products = [
  { id: 1, name: "shoes", size: "xl" },
  { id: 2, name: "pens", size: "xs" },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found!" });
  }
});

app.post("/products", (req, res) => {
  const { name, size } = req.body;

  if (!name || !size) {
    return res.status(400).json({ error: "Name and size are required!" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    size,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
