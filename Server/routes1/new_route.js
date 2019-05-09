import exp from 'express';
import log from '../controllers1/login1';
import signUp from '../controllers1/signup1';
import check from '../controllers1/check1';
import loanU from '../controllers1/user1';
import loanAdm from '../controllers1/loan1';
import loanRep from '../controllers1/repayment1';

const myRouter = exp();
const route = myRouter.router();

route.post('/v1/auth/signin', log);
route.post('/v1/auth/signup', signUp);
route.patch('/v1/users/:userEmail/verify', check);
route.get('/v1/loans/user/:email/', loanU.getUserLoan);
route.post('/v1/loans/', loanU.addNewLoan);
route.get('/v1/loans', loanAdm.getloans);
route.get('/v1/loans/:loanID', loanAdm.getSpecificLoan);
route.patch('/v1/loans/:loanID', loanAdm.approveLoan);
route.post('/v1/loans/:loanID/repayment', loanRep.addPayment);
route.get('/v1/loans/:loanID/repayment', loanRep.getRepayments);

module.exports = route;

//  eslint-disable no-unused-expressions
//  eslint-disable import/named */
//  eslint-disable import/no-unresolved
// eslint-disable linebreak-style
// import Router from 'express';
// import { signup } from '../controllers1/signup1';
// import { login } from '../controllers1/login1';
// import check from '../controllers1/check1';
// import { getUserLoan, addNewLoan } from '../controllers1/loan1';
// import { getloans, getSpecificLoan, approveLoan } from '../controllers1/loanAdmin';
// import { addPayment, getRepayments } from '../controllers/LoanController';

// const router = Router();
// const val1 = { getUserLoan, addNewLoan };
// const loan = { getloans, getSpecificLoan, approveLoan };
// const rep = { addPayment, getRepayments };
// const signUp1 = { signup };
// const log = { login };
// const chk = { check };
// router.get('/v1/loans/:loanID/repayment', (req, res, next) => {
//   rep.addPayment;
// });
// router.get('/v1/loans/user/:email/', () => {
//   getUserLoan;
// });
// router.post('/v1/auth/signin', () => {
//   log;
// });
// router.post('/v1/auth/signup', () => {
//   signUp1;
// });
// router.patch('/v1/users/:userEmail/check', () => {
//   chk;
// });
// router.post('/v1/loans/:loanID/repayment', () => {
//   val1.addPayment;
//   loan;
// });
// router.post('/v1/loans/', () => {
//   val1.addNewLoan;
// });
// router.get('/v1/loans', () => {
//   getloans;
// });
// router.get('/v1/loans/:loanID', () => {
//   getSpecificLoan;
// });
// router.patch('/v1/loans/:loanID', () => {
//   approveLoan;
// });
// export default router;
