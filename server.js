const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(cors());

app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
