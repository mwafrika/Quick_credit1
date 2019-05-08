/* eslint-disable linebreak-style */

export function save(req, res) {
  // this.usersList.push();
  console.log(req.body.email);
  res.write('bonjour');
  res.end('mufufu');
}

export function checkIfExist(email) {
  return this.usersList.find(user => user.email === email);
}

export function find(id) {
  return this.usersList.find(user => user.id === id);
}
