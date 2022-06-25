const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(bodyParser.json());

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

const Card = mongoose.model("Card", {
  CardNum: String,
  ExpDate: String,
  Cvv: String,
  Amount: String,
});

app.use(allowCrossDomain);
app.post("/api", (req, res) => {
  const cardReq = new Card(req.body);
  cardReq.save().then(({ _id, ...other }, response) => {
    Card.find({ _id }).then((card) => {
      const { _id: RequestId, Amount } = card[0];
      res.json({ RequestId, Amount });
    });
  });
});

app.listen(port, () => {
  mongoose.connect("mongodb://localhost:8000/users");
});
