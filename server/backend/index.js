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
    // res.json({ message: "Это стартовая страница нашего приложения" });
        
    
    const cardReq = new Card(req.body);
    cardReq.save().then(() => console.log('card saved'));
    res.json({id: "123"})
  });

app.listen(port, () => {
    mongoose.connect('mongodb://localhost:8000/test');
});