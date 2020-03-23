var mysql = require('mysql');
var express = require('express');
var application = express();
var con = require('./db.js');

const path = require("path");
const bodyparser = require("body-parser");
const CourseController = require("./controllers/controller");
const router = express.Router();

con.connect(function(err) {
  if (err) throw err;
});


application.use(bodyparser.urlencoded({
	extended : true
}));

application.use(express.static(__dirname + '/public'));

application.set('views', path.join(__dirname, "/views/"))
application.set('view engine', 'ejs');

application.get("/", (req, res)=>{
	let sql = "SELECT * FROM Users";
	let query = con.query(sql, (err, rows) => {
		if (err) throw err;
		res.render('index', {
			Users: rows
		});
	})
});

application.use("/", CourseController);
application.use("/courses/delete", CourseController);

application.listen("3000", ()=>(
	console.log("Connected")
))

module.exports = router;