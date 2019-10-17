const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const routes = require('./routes');
const credentials = require('./private/auth')
 
const server = express();

mongoose.connect(credentials, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);