// /* eslint-disable linebreak-style */
// import express from 'express';
// import bodyParser from 'body-parser';

// import userRoutes from './routes/users2';
// import userRoutes2 from './routes/user1';

// const app = express();

// const port = process.env.PORT || 3000;

// const task = {
//   'POST/': {
//     'auth/signup': 'register a new user',
//     'auth/login': 'login a registered user',
//   },
// };
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json(''));

// const v1 = '/api/v1';
// const v2 = '/api/v2';

// app.use(`${v1}/auth`, userRoutes);
// app.use(`${v2}/auth`, userRoutes2);

// app.get('/', (req, res) => res.status(200).json({
//   status: 200,
//   message: 'welcome to quick credit',
//   task,
// }));
// app.use((req, res, next) => {
//   const error = new Error('not found');
//   error.status = 404;
//   next(error);
// });

// app.use((error, req, res) => res.status(error.status || 500).json({
//   error: {
//     status: error.status,
//     message: error.message,
//   },
// }));

// app.listen(port, () => {
//   //  createTables();
// });
// module.exports = app;
// // "start": "nodemon --exec babel-node Server/controllers/server.js",
