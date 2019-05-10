/* eslint-disable linebreak-style */

import express from 'express';
import bodyParser from 'body-parser';
import login from './login_controller';
import signup from './signup_controller';
import verify from './verify_user_controller';
// eslint-disable-next-line camelcase
import loan_admin from './loan_admin_controller';
import loanUser from './loan_user_controller';
import loanRepayment from './loanRepayment_controller';

const app = express();
// incoming data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('ci with travis');
});
loanUser.addNewLoan(app);
login.login(app); // starting the login endpoint
signup.signup(app); // starting the signup endpoint
verify.verify(app);
loanUser.getUserLoan(app);
loan_admin.getAdminLoan(app);
loan_admin.approveLoan(app);
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
