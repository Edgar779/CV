var express = require('express');
var app = express();

  bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/sendMessage', (req,res)=>{
res.json('Hello');
});
app.get('/', (req,res)=>{
res.json('hi');
});


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.listen( process.env.PORT || 3000, () => {
  console.log(process.env.PORT);
});