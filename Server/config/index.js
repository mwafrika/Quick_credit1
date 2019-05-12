/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import router from '../router/routes';

const express = require('express');
const bodyParser = require('body-parser');
// const userRouter = require('../routes/routes');

const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.get('/test', (req, res) => {
  res.send('mwafrika');
});

const port = process.env.PORT || 15000;

const server = app.listen(port, () => {
  console.log(port);
});
function closeServer() {
  server.close();
}
module.exports = {
  app,
  closeServer,
};
