/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  const errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  // check name
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }
  // check mail
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  // check password
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password field is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
