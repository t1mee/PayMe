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
  app.use(allowCrossDomain);
app.post("/api",  (req, res) => {
    // res.json({ message: "Это стартовая страница нашего приложения" });
    console.log(req.body)
  });

app.listen(port, () => {
    mongoose.connect('mongodb://localhost:8000/test');
    
    // const Cat = mongoose.model('Cat', { name: String });
    
    // const kitty = new Cat({ name: 'Zildjian' });
    // kitty.save().then(() => console.log('meow'));
});