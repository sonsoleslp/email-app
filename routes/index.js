var express = require('express');
var router = express.Router();
var emails = require('../emails');
var profile = require('../profile');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Login'
	});
});

router.post('/mail', function (req, res, next) {
	console.log(req.body)
	if (req.body.email === 'dr@upm.es' && req.body.password === '1234') {
		res.redirect('/mail');
	} else {
		res.redirect("/");
	}
});

router.get('/mail/:id', function (req, res, next) {
	var id = req.params.id;
	if (id < emails.length) {
		res.render('email', {
			title: 'Inbox',
			emails: emails,
			profile: profile,
			id: id
		});
	} else {
		res.redirect('/mail');
	}

});
router.get('/mail', function (req, res, next) {
	res.render('email', {
		title: 'Inbox',
		emails: emails,
		profile: profile
	});
});

module.exports = router;