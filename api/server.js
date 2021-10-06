const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const server = express();

// const blankRouter = require('../router/router.js')

server.use(helmet());

var allowedOrigins = [
    '',
]

server.use(cors({
    origin: function(origin, callback){
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) {return callback(null, true)};
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
}));

var hpp = require('hpp');
server.use(hpp());

// server.use('/router/', blankRouter) go here

server.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET, POST,  PUT, DELETE, OPTIONS')
    res.status(200).json({message: 'Backend is up and running'});
});

// catch 404 and forward to the error handler
server.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler 
server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ 
        message: {},
        error: err
        // change this back before final deployment!!! -unchanged-
        // err : {}
        
    });
});

module.exports = server;