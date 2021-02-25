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
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || config.get('port');
const server = app.listen(port, () =>
	winston.info(`Listening on port ${port}...`),
);

module.exports = server;
