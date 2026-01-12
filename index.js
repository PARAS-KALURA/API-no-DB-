const express = require('express');
const app = express();

app.use(express.json());

const items = []; // fake db

const PORT = 5000;

app.get('/', (req, res) => {
   res.send("API is working")
});

// get all items
app.get("/items", (req, res) => {
    res.json(items);
});

let currentId = 1;

//Add new items
app.post("/items", (req, res) => {
    const newItem = req.body;

     if (!newItem || Object.keys(newItem).length === 0) {
    return res.status(400).json({ message: "No data sent" });
  }

  const itemWithId = {
    id: currentId++, // auto - geneerated id
    ...newItem
  }

    items.push(itemWithId);
    res.status(201).json(itemWithId);
});

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});