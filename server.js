const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3005;
const data = [
  {
    name: "staff",
    members: ["talea@techtonica.org", "michelle@techtonica.org"],
  },
  {
    name: "students",
    members: ["chris@techtonica.org", "hamid@techtonica.org"],
  },
];

app.use(express.json());
app.use(cors());

// Get all existing lists
app.get("/lists", function (request, response) {
  let lists = data.map((list) => list.name);
  response.json(lists);
});

app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
