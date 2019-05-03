/* eslint-disable linebreak-style */
/* eslint-disable comma-spacing */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
/* eslint-disable radix */
/* eslint-disable linebreak-style */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const express = require('express');
require('../models/users.js');

const login = new users(1,'mwafrika','mufungizi','josue@gmail.com');
const app = express();
app.use(express.json);
const logTable = [login];

// logTable.push(new login(2,'mwafrika','mufungizi','josue@gmail.com'));
// logTable.push(new login(3,'mwafrika','mufungizi','josue@gmail.com'));
// logTable.push(new login(4,'mwafrika','mufungizi','josue@gmail.com'));
// logTable.push(new login(5,'mwafrika','mufungizi','josue@gmail.com'));
// logTable.push(new login(5,'mwafrika','mufungizi','josue@gmail.com'));
// logTable.push(new login(6,'mwafrika','mufungizi','josue@gmail.com'));
// login.setId([1]);
// login.setFirstName([2]);
// login.setLastName([3]);
// login.setIsAdmin([2]);

// { id: 1, name: 'course1' },
// { id: 2, name: 'course2' },
// { id: 3, name: 'course3' },

// app.get('/', (req, res) => {
//   res.send('hello world');
// });
// app.get('/api/login', (req, res) => {
//   res.send(logTable.push());
// });
// app.get('/api/logTable/:id', (req, res) => {
//   const log = logTable.find(c => c.logTable.id === parseInt(req.params.id));
//   // if (!course) res.status.send('the course is not found');
//   if (!log) res.status(404).send('the information with the given ID was not found');
//   res.send(log);
// });

// app.post('/api/logTable', (req,res) => {

// });


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen to the port ${port}...`));
