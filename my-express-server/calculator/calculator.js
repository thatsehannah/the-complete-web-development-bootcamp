const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  var num1 = parseInt(req.body.n1);
  var num2 = parseInt(req.body.n2);
  res.send('The result of the calculation is ' + (num1 + num2));
});

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height * height);
  res.send('Your BMI is ' + result);
});

app.listen(3000, () => {
  console.log('App is listening on port 3000.');
});
