const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

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




// user routes
app.use('/api/items', items)




app.listen(process.env.PORT || 5000, ()=> {
  console.log(`Server started on port 5000`)
});
