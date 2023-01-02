const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3005;
const lists = new Map();

app.use(express.json());
app.use(cors());

// Get all existing lists
app.get("/lists", (req, res) => {
  const listsArray = Array.from(lists.keys());
  res.json(listsArray);
});

app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
