/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../routes/routes');

const app = express();
//  incoming data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', userRouter);
const server = app.listen(7000, () => {
  // eslint-disable-next-line no-console
  console.log('welcome to quick-credit');
});
function closeServer() {
  server.close();
}
module.exports = {
  app,
  closeServer,
};
