"use strict";

const PORT = 3000;
const express = require("express");
const app = express();

let data = [
  {
    id: 0,
    name: "Lucie",
    level: 2,
    attemptCount: 5,
    successCount: 4
  }
];

app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get("/api/children", (req, res) => {
  res.send(JSON.stringify(data));
});

app.get("/api/children/:id", (req, res) => {
  const child = data.find(c => c.id === +req.params.id);
  res.send(JSON.stringify(child));
});

app.post("/api/children", (req, res) => {
  const newChild = req.body;
  const lastId = data.reduce((currentLastId, child) => {
    return currentLastId > child.id ? currentLastId : child.id;
  }, 0);

  newChild.id = lastId + 1;
  data.push(newChild);

  res.send(JSON.stringify(newChild));
});

app.put("/api/children/:id", (req, res) => {
  const index = data.findIndex(c => c.id === +req.params.id);
  if (index === -1) return res.sendStatus(400);
  const updatedChild = req.body;
  updatedChild.id = +updatedChild.id;
  data[index] = updatedChild;
  res.send(JSON.stringify(updatedChild));
});

app.delete("/api/children/:id", (req, res) => {
  data = data.filter(c => c.id !== +req.params.id);
  res.send("{}");
});

console.log(`Listen on port ${PORT}`);
app.listen(PORT);
