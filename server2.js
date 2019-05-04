/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');

const app = express(
  app.use(
    bodyParser.urlencoded({ extended: false }),
  ),
);
app.use(bodyParser.json);

const port = process.env.PORT || 5000; // for heroku
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
