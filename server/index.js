const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database");

const app = express();
const PORT = 3004;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/api/allreviews/", (req, res) => {
  console.log(req._parsedOriginalUrl);
  if (req._parsedOriginalUrl.search) {
    var arr = req._parsedOriginalUrl.search.split("=");
console.log(req._parsedOriginalUrl.search);
  }
   console.log('id server: ', arr[1]);
  if (arr) {
    db.getAllReviews(arr[1], (err, data) => {
      if (err) {
        res.status(500).send("Something Broke!");
      } else {
        res.json(data);
      }
    });
  } else {
    db.getAllReviews(null, (err, data) => {
      if (err) {
        res.status(500).send("Something Broke!");
      } else {
        res.json(data);
      }
    });
  }
});
