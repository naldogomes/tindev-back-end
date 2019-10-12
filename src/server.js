const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.send('Hello Word');
})

server.listen(3333)