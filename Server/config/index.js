/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import router from '../routes/routes';
const express = require('express');
const bodyParser = require('body-parser');
// const userRouter = require('../routes/routes');

const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  // req.send('hello mwafrika');
  console.log('welcome to quick-credit');
});
function closeServer() {
  server.close();
}
module.exports = {
  app,
  closeServer,
};
