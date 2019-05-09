
import exp from 'express';
import log from '../controllers1/login1';
import signUp from '../controllers1/signup1';
import check from '../controllers1/check1';
import loanU from '../controllers1/user1';
import loanAdm from '../controllers1/loan1';
import loanRep from '../controllers1/repayment1';

const myRouter = exp();
const route = myRouter.router();

