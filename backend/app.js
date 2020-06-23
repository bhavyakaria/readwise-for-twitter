const express = require('express');
require('dotenv').config();

const config = require('./config/config');
const logger = require('morgan');
const cors = require('cors');

const app = express();

// Logger
app.use(logger('dev'));

// CORS
app.use(cors());

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/twitter', require('./routes/twitter'));
app.use('/email', require('./routes/email'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));