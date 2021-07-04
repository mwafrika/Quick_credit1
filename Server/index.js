/* eslint-disable linebreak-style */
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
// import loanRouter from './routes/v1/loan_routes';
// import userRouter from './routes/v1/user_routes';
// import authRouter from './routes/v1/auth_routes';

export const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../UI')));
// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/users', userRouter);
// app.use('/api/v1/loans', loanRouter);
const PORT = process.env.PORT || 7000;
const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('welcome to quick-credit');
});
export function closeServer() {
  server.close();
}
