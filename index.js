const winston = require('winston');
const express = require('express');
const config = require('config');
const app = express();

require('./startup/logging')();
// require('./startup/cors')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
// const cors = require('cors');
// app.use(cors());

// var express = require('express')
var cors = require('cors');
// var app = express()

app.use(cors());

// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// app.listen(port, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

const port = process.env.PORT || config.get('port');
const server = app.listen(port, () =>
	winston.info(`Listening on port ${port}...`),
);

module.exports = server;
