const express = require('express');
require('../models/users.js');

const login = new users(1,'mwafrika','mufungizi','josue@gmail.com');
const app = express();
app.use(express.json);
const logTable = [login];
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listen to the port ${port}...`));
