const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// bodyParser middleware
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;
// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('Mongodb connected...'))
  .catch(err => console.log(err, 'error with mongodb'));

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server started on port ${port}`));
