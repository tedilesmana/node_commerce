var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
// 	res.render('index');
// });

var pages = require('./routes/pages.js');

app.use('/',pages);

var port = 3000;

app.listen(port, function() {
	console.log('Server brjalan dengan port' + port);
});
