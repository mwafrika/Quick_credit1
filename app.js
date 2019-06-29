/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import app1 from 'express';
import body_parser from 'body-parser';

app1.get('/', (res, req) => {
  req.send('mwafrika mufungizi josue');
});
const port = process.env.PORT || 3000;
app1.listen(port, () => console.log(`listening to the port  ${port} ...`));
