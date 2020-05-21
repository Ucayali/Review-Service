const express = require("express");
const db = require("../database");

const app = express();
const PORT = 3004;

app.use(express.json());
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
