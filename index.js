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

//Add new items
app.post("/items", (req, res) => {
    const newItem = req.body;

     if (!newItem || Object.keys(newItem).length === 0) {
    return res.status(400).json({ message: "No data sent" });
  }

    items.push(newItem);
    res.status(201).json(newItem);
});

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})