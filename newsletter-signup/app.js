const express = require('express');
const request = require('request');

const app = express();
app.use(express.urlencoded()); // replaces body-parser

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
