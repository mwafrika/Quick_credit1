/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const route = require('../routes1/new_route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route);
const PORT = 500;
const server = app.listen(PORT, () => {
  console.log(`listening to the port ${PORT}`);
});
function closeServer() {
  server.close();
}
module.exports = {
  app,
  closeServer,
};
