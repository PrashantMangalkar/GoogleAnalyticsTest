var express = require('express');
var google = require("googleapis");
var config = require("./../bin/config.js");
var db = require("./../bin/db.js");
var router = express.Router();

var CronJob = require('cron').CronJob;
var jwtClient = new google.auth.JWT(
	config.key.client_email,
    null,
    config.key.private_key,
    ['https://www.googleapis.com/auth/analytics.readonly'], null);


// '00 30 11 * * 1' for week
//'*/3 * * * * *' for every 3 sec
var cronvalue = config.Seconds.trim()+" "+config.Minutes.trim()+" "+config.Hours.trim()+" "+config.DayofMonth.trim()+" "+config.Months.trim()+" "+config.DayofWeek.trim();
var job = new CronJob(cronvalue, function() {
  /*
   * Runs every weekday (Monday)
   * at 11:30:00 AM.
   */
	jwtClient.authorize(function (err, tokens) {
		if (err) {
			console.log(err);
			return;
		}
		console.log("done",tokens)
		var analytics = google.analytics('v3');
		queryData(analytics,function(err,data){
			convertoJSON(data,function(newdata){
				console.log("data ",JSON.stringify(newdata, null, 4));
				db.addreport(newdata,function(err,data){
					if(err) throw err;
					else
						console.log("data==========",data);
				})
			})
		});
	});
   	console.log("hello")
  }, null,
  true /* Start the job right now */
);

function convertoJSON(data,fn){
	var newdata=[];
	var header=data.columnHeaders
	data.rows.forEach(function(row,i){
		obj={};
		row.forEach(function(field,index){
			obj[header[index].name]=field;
			if(index == row.length - 1){
				newdata.push(obj);
			}
		})
		if(i==data.rows.length - 1){
			return fn(newdata);		
		}
	})
}

function queryData(analytics, fn) {
	analytics.data.ga.get({
		'auth': jwtClient,
		'ids': config.VIEW_ID,
		'metrics': config.metrics,
		'start-date': config.startDate,
		'end-date': config.endDate,
		'dimensions': config.dimentations
	}, function (err, response) {
		if (err) {
		  	console.log(err);
		  	return fn(err);
		}
		return fn(null,response);
	});  
}

module.exports = router;
