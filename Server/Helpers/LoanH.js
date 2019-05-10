/* eslint-disable no-unused-vars */

import { myLoans, Loan } from '../models1/Loan1';

export function editLoan(loan) {
  myLoans[loan.id] = loan;
  return loan;
}
export function getLoanCount(loan) {
  return loan.length;
}
function searchLoanByUser(email) {
  return myLoans.filter(loan => myLoans.userMail === email);
}
export function getAllLoans(email) {
  if (email) return searchLoanByUser(email, myLoans);
  return myLoans;
}
export function addLoan(newLoan) {
  myLoans.push(newLoan);
  return myLoans[newLoan.id];
}
export function getSingleLoan(loanID) {
  return myLoans[loanID];
}
export function getAllAproved(email) {
  if (email) return (email, searchLoanByUser(email, myLoans.filter(myLoan => Loan.getStatus() === 'approved')));
  return myLoans.filter(myLoan => Loan.getStatus() === 'approved');
}
export function getCurrent(email) {
  return getAllAproved(email).filter(loan => loan.isRepaid() === false);
}
export function getRepaid(email) {
  return getAllAproved(email).filter(loan => loan.isRepaid() === true);
}
export function getPending(email) {
  if (email) return (email, searchLoanByUser(email, myLoans.filter(loan => loan.getStatus() === 'pending')));
  return myLoans.filter(loan => Loan.getStatus() === 'pending');
}
export function getRejected(email) {
  if (email) return (email, searchLoanByUser(email, myLoans.filter(loan => Loan.getStatus() === 'rejected')));
  return myLoans.filter(loan => Loan.getStatus() === 'rejected');
}

export default {
  editLoan,
  getLoanCount,
  searchLoanByUser,
  getAllLoans,
  addLoan,
  getSingleLoan,
  getAllAproved,
  getCurrent,
  getRepaid,
  getPending,
  getRejected,
};
