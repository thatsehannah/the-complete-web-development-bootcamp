require('dotenv').config();
const express = require('express');
const https = require('https');


const app = express();
const apiKey = process.env.API_KEY;

app.get('/', (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=${apiKey}&units=imperial`;

  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write(`<p>The weather is currently ${description}.</p>`)
      res.write(`<h1>The temperature in Houston is ${temp} degrees Fahrenheit.</h1>`)
      res.write(`<img src=${imageURL} alt='weather-icon'>`)
      res.send()
    })
  })
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
