/* eslint-disable no-trailing-spaces */
/* eslint-disable consistent-return */
/* eslint-disable import/newline-after-import */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable key-spacing */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
// import jwt from 'jsonwebtoken';
// import credit from '../../controllers/tables';

// import router from '../../routes/new_route';
const express = require('express');
const bodparser = require('body-parser');
// const router = require('../../routes/new_route');

const app = express();
app.use(bodparser.urlencoded({ extended : true }));
// app.use(express.json);
app.use(bodparser.json());
app.use('/', router);
// const users = [];
// app.post('/auth/signup', (req, res) => {
//   const token = jwt.sign(
//     {
//       email: req.body.email,
//       password : req.body.password,
//     },
//     'josmwafrika789',
//     { expiresIn : '2h' },
//   );
//   users.push(req.body);
//   res.json({
//     status: 200,
//     data : users,
//     token,
//   });

// });
// app.get('/decode', (req, res) => {
//   try {
//     const decoded = jwt.verify(req.headers.token, 'josmwafrika789');
//     res.json(decoded); 
//   } catch (error) {
//     return res.status(401).json({
//       status:401,
//       error : 'Authentication failed',
//     });
//   }
// });
// app.patch('/josue12', (req, res) => {

//   res.json({
//     // eslint-disable-next-line quotes
//     name: 'josue',
//     last_name: 'gloire',
//   });
// });

// app.delete('/josue1', (req, res) => {
//   res.json({
//     // eslint-disable-next-line quotes
//     name: 'josue',
//     last_name: 'gloire',
//   });
// });
// app.put('/josue2', (req, res) => {
//   res.json({
//     // eslint-disable-next-line quotes
//     name: 'josue',
//     last_name: 'gloire',
//   });
// });
// app.post('/josuee', (req, res) => {
//   res.json({
//     // eslint-disable-next-line quotes
//     name: 'josue',
//     last_name: 'gloire',
//   });
// });
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen to the port ${port}...`));
