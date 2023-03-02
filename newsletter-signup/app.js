const express = require('express');
const request = require('request');

const app = express();
app.use(express.urlencoded({ extended: true })); // replaces body-parser
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post('/', (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  console.log(firstName);
  console.log(lastName);
  console.log(email);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
