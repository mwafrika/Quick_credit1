/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import path from 'path';
import router from '../router/routes';
// const userRouter = require('../routes/routes');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/UI/')));
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
