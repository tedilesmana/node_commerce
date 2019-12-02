var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.render('index', {
		h1 : 'Selamat Datang Admin, Selamat koding di nodejs'
	});
});

router.get('/add_page', function(req, res) {
	var title = "";
	var link = "";
	var content = "";

	res.render('admin/add_page', {
		title : title,
		link : link,
		content : content
	});
});

module.exports = router;