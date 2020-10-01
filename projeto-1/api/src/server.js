const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes')
require('dotenv').config({
  path: process.env.NODE_ENV === 'DEV' ? './.env.dev' : './.env',
});

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(routes);

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));