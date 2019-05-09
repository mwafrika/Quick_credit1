/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
import { date } from 'joi';

export class Repayment {
  constructor(id, tenor, loanId, amount) {
    this.id = id;
    this.createOn = new Date();
    this.loanId = loanId;
    this.amount = amount;
    this.tenor = tenor;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

	 getLoanId() {
    return this.loanId;
  }

	 setLoanId(loanId) {
    this.loanId = loanId;
  }

	 getAmount() {
    return this.amount;
  }

	 setAmount(amount) {
    this.amount = amount;
  }

	 getTenor() {
    return this.tenor;
  }

  setTenor(tenor) {
    this.tenor = tenor;
  }

  setDa(date) {
    this.date = date;
  }

  getDate() {
    return this.createdOn;
  }
}
const defaultRepay = new Repayment(0, 3, 4, 500);

const repay = [defaultRepay];

repay.push(new Repayment(1, 6, 6, 400));
repay.push(new Repayment(2, 6, 6, 400));
repay.push(new Repayment(3, 6, 6, 400));
repay.push(new Repayment(4, 6, 6, 400));

// setLoanId[0];
// setLoanId[3];
// setLoanId[2];

export default { Repayment, repay };
// module.exports = {
//   Repayment, repay,
// };
