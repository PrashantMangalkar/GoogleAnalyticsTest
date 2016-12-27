var express = require('express');
var router = express.Router();
var db = require("./../bin/db.js");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Analytics Test' });
});

// get reports
router.get('/reports', function(req, res, next) {
	db.getreport(function(err,data){
		res.send("report = "+JSON.stringify(data));
	})
  
});

module.exports = router;
