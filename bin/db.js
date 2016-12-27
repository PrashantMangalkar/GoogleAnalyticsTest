var MongoClient = require('mongodb').MongoClient;
var assert = require("assert")
var config = require("./config.js");
var url = config.dburl;

// add periodic report to the database
exports.addreport = function(data,callback){
   	MongoClient.connect(url, function(err, db) {
	  	assert.equal(null, err);
	  	console.log("Connected correctly to server");
	 	var reports = db.collection("reports");
		reports.insertMany(data,function(err,data){
			db.close();
			return callback(err,data);
		});
	});	
}

// get reports from database
exports.getreport = function(callback){
   	MongoClient.connect(url, function(err, db) {
	  	assert.equal(null, err);
	  	console.log("Connected correctly to server");
	 	var reports = db.collection("reports");
	 	reports.find({}).toArray(function(err,data){
			db.close();
			return callback(err,data);
		});
	});	
}