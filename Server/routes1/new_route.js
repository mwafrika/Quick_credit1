/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-expressions */
// import exp from 'express';
// import log from '../controllers1/login1';
// import signUp from '../controllers1/signup1';
// import check from '../controllers1/check1';
// import loanU from '../controllers1/user1';
// import loanAdm from '../controllers1/loan1';
// import loanRep from '../controllers1/repayment1';

// const myRouter = exp();
// const route = myRouter.router();

// route.post('/v1/auth/signin', log);
// route.post('/v1/auth/signup', signUp);
// route.patch('/v1/users/:userEmail/verify', check);
// route.get('/v1/loans/user/:email/', loanU.getUserLoan);
// route.post('/v1/loans/', loanU.addNewLoan);
// route.get('/v1/loans', loanAdm.getloans);
// route.get('/v1/loans/:loanID', loanAdm.getSpecificLoan);
// route.patch('/v1/loans/:loanID', loanAdm.approveLoan);
// route.post('/v1/loans/:loanID/repayment', loanRep.addPayment);
// route.get('/v1/loans/:loanID/repayment', loanRep.getRepayments);
// module.exports = route;

import Router from 'express';
import bodyParser from 'body-parser';
import signup from '../controllers1/signup1';
import login from '../controllers1/login1';
import check from '../controllers1/check1';
import { getUserLoan } from '../controllers1/loanUser';
import { getloans, getSpecificLoan, approveLoan } from '../controllers1/loanAdmin';
import { addPayment, getRepayments } from '../controllers1/repaymentController';
// import { getloans } from '../controllers1/admin1';

const router = Router();
router.use(bodyParser);
router.post('/v1/auth/signin', login);
router.post('/v1/auth/signup', signup);
router.patch('/v1/users/:userEmail/verify', check);
router.get('/v1/loans/user/:email/', getUserLoan);
router.post('/v1/loans/', userLoanController.addNewLoan);
router.get('/v1/loans', getloans);
router.get('/v1/loans/:loanID', getSpecificLoan);
router.patch('/v1/loans/:loanID', approveLoan);
router.post('/v1/loans/:loanID/repayment', addPayment);
router.get('/v1/loans/:loanID/repayment', getRepayments);
export default router;
