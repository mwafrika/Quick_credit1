import Loans, { Loan } from '../models1/Loan1';

const ln = Loans.myLoans;
setBalance(balance)
{

 Loan1.balance = balance;
   if (balance < 0) {
    Loan1.repaid = true;   
   this.balance = 0;
     }
}
 isRepaid()
 {
  return Loan1.repaid;
 }
setRepaidStatus(repaidStatus)
 { 
    Loan1.repaid = repaidStatus;
 }
   getInterest() 
   { 
 return Loan1.interest;
   }
 getCreatedOn() 
 {  
 return Loan1.createdOn;
 }

ln[0].setStatus('approved');
ln[1].setStatus('approved');
ln[2].setStatus('approved');
ln[3].setStatus('approved');
ln[4].setStatus('approved');
ln[5].setStatus('approved');
ln[1].setRepaidStatus(true);
ln[3].setRepaidStatus(true);
