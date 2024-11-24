const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
//mongoose.connect('mongodb://localhost:27017/mydatabase')
//.then(() => console.log('Connected to MongoDB'))
//.catch(err => console.error('Could not connect to MongoDB', err));

// Simple route
app.get('/req_res_cookies', (req, res) => {

  reqCookies=req.cookies;

  res.send('Cookies at request side and response side');
  console.log(reqCookies);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
