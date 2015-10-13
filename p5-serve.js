var express = require('express');
var path=require('path');
var app = express();
var url = "localhost"
var port = 8000

app.use('/',express.static(path.join(__dirname,'')));

app.get('/', function(req, res){
  res.send('Express Rules  <a href="/express.html">express.html</a>');
});

app.listen(port);
console.log(url+" listening on port "+ port)