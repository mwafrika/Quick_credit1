/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
import { Router } from 'express';
import signup from '../controller/signup_controller';
import login from '../controller/login_controller';
import verify from '../controller/verify_user_controller';
import { getUserLoan, addNewLoan } from '../controller/loan_user_controller';
import { getloans, getSpecificLoan, approveLoan } from '../controller/loan_admin_controller';
import { addPayment, getRepayments } from '../controller/loanRepayment_controller';

const router = Router();

router.post('/v1/auth/signin', login); // finished
router.post('/v1/auth/signup', signup); // finished
router.patch('/v1/users/:userEmail/verify', verify);
router.get('/v1/loans/user/:email', getUserLoan);
router.post('/v1/loans/', addNewLoan);
router.get('/v1/loans', getloans); // finished
router.get('/v1/loans/:loanID', getSpecificLoan);// finished
router.patch('/v1/loans/:loanID', approveLoan); // not fully done
router.post('/v1/loans/:loanID/repayment', addPayment);
router.get('/v1/loans/:loanID/repayment', getRepayments);
export default router;
