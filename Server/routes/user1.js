import exp from 'express';
import log from '../controllers1/login1';
import signUp from '../controllers1/signup1';
import check from '../controllers1/check1';
import loanU from '../controllers1/loanAdmin';
import loanAdm from '../controllers1/loanAdmin';
import loanRep from '../controllers1/repayment1';

const myRouter = exp.myRouter();

myRouter.post('/v1/auth/signin', log);
myRouter.post('/v1/auth/signup', signUp);
myRouter.patch('/v1/users/:userEmail/verify', check);
myRouter.get('/v1/loans/user/:email/', loanUser.getUserLoan);
myRouter.post('/v1/loans/', loanUser.addNewLoan);
myRouter.get('/v1/loans', loanAdmin.getloans);
myRouter.get('/v1/loans/:loanID', loanAdmin.getSpecificLoan);
myRouter.patch('/v1/loans/:loanID', loanAdmin.approveLoan);
myRouter.post('/v1/loans/:loanID/repayment', loanRepayment.addPayment);
myRouter.get('/v1/loans/:loanID/repayment',loanRepayment.getRepayments);

module.exports = myRouter;
