/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../routes1/users2.js');

const exp = express();
exp.use(bodyParser.json());
exp.use(bodyParser.urlencoded({
  extended: false,
}));
exp.use('/', userRouter);
const route = 500;
const Server = exp.listen(route, () => {
  // eslint-disable-next-line no-console
  console.log(`listening to the port ${route}`);
});
function Break() {
  Server.close();
}
module.exports = {
  exp,
  Break,
};
