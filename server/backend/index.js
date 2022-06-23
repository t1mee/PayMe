const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose = require('mongoose');
const app            = express();

const port = 8080;

app.use(express.urlencoded({ extended: false }))

app.use(express.json());

app.use(bodyParser.json())

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }

const Card = mongoose.model('Card', { name: String });

app.use(allowCrossDomain);
app.post("/api",  (req, res) => {
    
    const cardReq = new Card(req.body);
    cardReq.save()
    .then(({_id: RequestId, ...other}, res) => ({RequestId: RequestId.toString()}))
    .then(response => res.json(response))
  });

app.listen(port, () => {
    mongoose.connect('mongodb://localhost:8000/users');
});