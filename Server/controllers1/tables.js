/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const credit = {
  users: [
    {
      id: 1,
      email: 'josue@gmail.com',
      firstname: 'mwafrika',
      lastname: 'josue',
      password: '123',
      addess: 'client',
      status: 'pending',
      isAdmin: false,
      token: '45erkjherht45495783'
    }
  ],
  loan: [
    {
      id: 1,
      user: 'mwafrika',
      createOn: '12/04/2019',
      status: 'approved',
      repaid: true,
      tenor: 9,
      amount: 250.5,

      //   paymentInstallement: `(${amount} + ${interest})/tenor`,
      balance: 500.9,
    //   interest: `${(amount * 5) / 100}`
    }
  ],
  repayment: [
    {
      id: 1,
      createOn: '15/02/2019',
      loanID: 87878,
      amount: 500
    }
  ]

};

export default credit;
