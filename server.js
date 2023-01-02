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

// Get list by name
app.get("/lists/:name", function (request, response) {
  let listName = request.params.name.toLowerCase();
  let lists = data.filter((list) => list.name.toLowerCase() === listName);

  if (lists.length === 0) {
    response.status(404).send("Not found");
  }
  response.json(lists);
});

// Delete single list
app.delete("/lists/:name", function (request, response) {
  let listName = request.params.name.toLowerCase();
  let listIndex = data.findIndex(
    (list) => list.name.toLowerCase() === listName
  );

  if (listIndex < 0) {
    response.status(404).send("Not found");
  }

  data.splice(listIndex, 1);
  response.send("List deleted");
});

app.put("/lists/:name", function (request, response) {
  let listName = request.params.name.toLowerCase();
  let listIndex = data.findIndex(
    (list) => list.name.toLowerCase() === listName
  );

  if (listIndex >= 0) {
    data[listIndex].members.push(...request.body.members);
    response.json(data[listIndex]);
  } else {
    let newList = {
      name: listName,
      members: request.body.members,
    };
    data.push(newList);
    response.status(201).json(newList);
  }
});

app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
