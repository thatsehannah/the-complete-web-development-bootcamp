const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname + "/index.html");
});

app.post('/', (req, res) => {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  res.send("The result of the calculation is " + (num1 + num2));
})

app.listen(3000, () => {
  console.log('App is listening on port 3000.');
});
