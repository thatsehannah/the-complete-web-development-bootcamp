const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello, world!</h1>');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: ehannah@gmail.com');
});

app.get('/about', (req, res) => {
  res.send(
    'My name is Elliot Hannah and I am a Full Stack Developer from Houston, Texas by way of the streets of Augusta, Georgia.'
  );
});

app.get('/hobbies', (req, res) => {
  res.send('<ul><li>2K</li><li>Music</li><li>Coding</li></ul>');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
