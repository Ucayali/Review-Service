require('newrelic');
const express = require("express");
const db = require("../database/postgresIndex.js");

const app = express();
const PORT = 3004;

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/api/allreviews/", (req, res) => {
  let arr = req._parsedOriginalUrl.search.split("=");

  db.getAllReviews(arr[1])
    .then((data) => {res.send(data).status(200).end();})
    .catch(() => {console.log('Error Getting Data'); res.status(404).end();});
});

app.post("/api/allreviews/", (req, res) => {
  db.addReview(req.body, (err) => {
    if (err) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

app.patch("/api/allreviews/", (req, res) => {
  var arr = req._parsedOriginalUrl.search.split("=");
  db.updateReview(arr[1], req.body, (err) => {
    if (err) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

app.delete("/api/allreviews/", (req, res) => {
  var arr = req._parsedOriginalUrl.search.split("=");
  db.updateReview(arr[1], (err) => {
    if (err) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
