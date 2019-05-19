/* eslint-disable linebreak-style */
/* const express = require('express');
const bodyParser = require('body-parser');
const login = require('./login');
const signup = require('./signup');
const verifyUser = require('./verify_user');
const loanAdmin = require('./loan_admin').default;
const loanUser = require('./loan_user');
const loanRepayment = require('./loanRepayment');

const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('ci with travis');
});
loanUser.addNewLoan(app);
login.login(app); // starting the login endpoint
signup.signup(app); // starting the signup endpoint
verifyUser.verify(app);
loanUser.getUserLoan(app);
loanAdmin.getAdminLoan(app);
loanAdmin.approveLoan(app);
loanRepayment.addPayment(app);
loanRepayment.getRepayments(app);
const server = app.listen(7000, () => {
  // eslint-disable-next-line no-console
  console.log('welcome to quick-credit');
});
const closeServer = () => {
  server.close();
};
module.exports = {
  bodyParser,
  app,
  closeServer,
};
*/
