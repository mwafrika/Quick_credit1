/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../routes1/new_route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', userRouter);
const server = app.listen(7000, () => {
  console.log('welcome to quick-credit');
});
function closeServer() {
  server.close();
}
module.exports = {
  app,
  closeServer,
};
