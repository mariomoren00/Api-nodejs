'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import util from 'util';
import expressValidator from 'express-validator'
require('dotenv').config();

const app = express();

// Declare routes files
import authRoute from './app/http/routes/auth.route';

// Parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express validator Ems5
app.use(expressValidator());

// Access control request and response
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Allow', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

// Send code status 200
app.disable('etag');

// Allow access to public folder
app.use(express.static(process.env.APP_PATH));

// Declare routes  
app.use('/api/v1/auth', authRoute);

// Running the server
app.listen(process.env.APP_PORT, () => {
    console.log(`Running the server in port ${process.env.APP_PORT}`);
})