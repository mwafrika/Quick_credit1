/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../routes/routes');
import router from '../routes1/new_route';

const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router){
 }
  // req.json('Mwafrika Mufungizi Josue'); // we added these two parameters to test the API);
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
