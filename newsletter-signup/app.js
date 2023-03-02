require('dotenv').config();
const express = require('express');
const request = require('request');
const https = require('https');

const app = express();
app.use(express.urlencoded({ extended: true })); // replaces body-parser
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body;

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  // Relevant MailChimp Documentation
  // https://mailchimp.com/developer/marketing/docs/fundamentals/
  // https://mailchimp.com/developer/marketing/api/lists/

  const dataCenter = process.env.MAILCHIMP_DC;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}`;

  const options = {
    method: 'POST',
    auth: `key:${process.env.MAILCHIMP_KEY}`,
  };

  const request = https.request(url, options, (response) => {
    response.on('data', (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
