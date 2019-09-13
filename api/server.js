const express = require('express');
const helmet = require('helmet');

//route to either recipes or ingredients
const projectRouter = require('./projects/project-router');

const server = express();

server.use(helmet());
server.use(express.json());

//Check to make sure these routes are correct
server.use('/api/project',projectRouter )


module.exports = server;