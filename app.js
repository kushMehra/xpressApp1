const express = require('express');
const hostname = '127.0.0.1';
const port = 1337;

const app = express();

app.get('/', function(req,res) {
  res.send('This is a test');
});

console.log('Server running at http://' + hostname + ':' + port + '/');

app.listen(port, hostname);

