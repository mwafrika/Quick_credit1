import { exp } from 'express';
import login from '../controllers1/login1';
import signup from '../controllers1/signup1';
import check from '../controllers1/check1';
import { getUserLoan } from '../controllers1/loanUser';
import { getloans, approveLoan, getSpecificLoan } from '../controllers1/loanAdmin';
import { getRepayments, addPayment } from '../controllers1/repaymentController';

const myRouter = exp();

const route = myRouter.router();
route.post('/v1/auth/signin', login);
route.post('/v1/auth/signup', signup);
route.patch('/v1/users/:userEmail/verify', check);
route.get('/v1/loans/user/:email/', getUserLoan);
// route.post('/v1/loans/', loanU.addNewLoan);
route.get('/v1/loans', getloans);
route.get('/v1/loans/:loanID', getSpecificLoan);
route.patch('/v1/loans/:loanID', approveLoan);
route.post('/v1/loans/:loanID/repayment', addPayment);
route.get('/v1/loans/:loanID/repayment', getRepayments);

// module.exports = route;
module.exports = route;
