'use strict';

var express = require('express');
var app = express();
var routes = require('./app/routes/index.js');

app.set('views', __dirname + '/app/views');
app.use(express.static(require('path').join(__dirname, 'public')));

routes(app);

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Node.js listening on port ' + port + '...');
});