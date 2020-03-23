const express = require("express");
const router = express.Router();
var con = require('../db.js');

router.use(express.json());
router.use(express.urlencoded({extended:false}));

var options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['html', 'htm'],
	index: "index.html"
}

router.use('/', express.static('./index', options));

router.post('/addUser', function(req, res) {
	var values = {
		Name: req.body.name,
		Email: req.body.email,
		Age: req.body.age
	}

	con.query('INSERT INTO Users SET?', values, function(err, result) {
		if (err) throw err;
		res.redirect(req.get('referer'));
	});
});

router.get('/edit/:Key', function(req, res) {
	let sql = "SELECT * FROM `Users` WHERE `Key` = " + req.params.Key;

	con.query(sql, (err, result) => {
		if (err) throw err;
		var values = {
		Name: req.body.name,
		Email: req.body.email,
		Age: parseInt(req.body.age)
		}
		console.log(result[0].Name);
		res.send(`
			<!DOCTYPE html>
			<html>
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
				<link rel="stylesheet" type="text/css" href="/css/layout.css">
				<title>EDIT</title>
			</head>
			<div class = "outermost">
				<h1 style = "text-align:center;color:white">Edit user on key: ${req.params.Key}</h1>
				<div class = "formbox">
					<form action="/edit/${req.params.Key}/submit" method="POST">
						<label for="name">Name:</label><br>
						<input type="text" id="name" name="name" value="${result[0].Name}" required><br>
						<label for="email">Email:</label><br>
						<input type="text" id="email" name="email" value="${result[0].Email}" required><br>
						<label for="age">Age:</label><br>
						<input type="text" id="age" name="age" value="${result[0].Age}" required><br>
						<br>
						<input type="submit" value="Submit" style = "font-weight:bold">
					</form>
				</div>
			</div>
			</html>`
		);
	})
});

router.post('/edit/:Key/submit', function(req, res) {
	var values = {
		Name: req.body.name,
		Email: req.body.email,
		Age: parseInt(req.body.age)
	}
	con.query("UPDATE `Users` SET `Name` = " + "'" + values.Name + "'" +
	 	", `Email`" + " ='" + values.Email + "'" +
		", `Age`" + " ='" + values.Age + "' WHERE `Key` = " + req.params.Key, function(err, result) {
		if (err) throw err;
		res.redirect("/");
	});
})

router.get('/delete/:Key', function(req, res) {
	var sql = "DELETE FROM `Users` WHERE `Key` = " + req.params.Key;
	con.query(sql, function(err, result) {
		if (err) throw err;
		res.redirect(req.get('referer'));
	});
});

module.exports = router;