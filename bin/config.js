var config={
  //db url
  dburl : 'mongodb://localhost:27017/myproject',

  //In order to use for another analytics replace values of key and view id
  key :{
    "type": "service_account",
    "project_id": "static-cirrus-xxxxx",
    "private_key_id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "private_key": "-----BEGIN PRIVATE KEY-----\nxxxxxxxxxxxxxxxxxxxxxxxxx\n-----END PRIVATE KEY-----\n",
    "client_email": "xxxxxxxxxxxxxxxxxxx@developer.gserviceaccount.com",
    "client_id": "xxxxxxxxxxxxxxxxxxx",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxxxxxxxxxxxxxxxxxxxxx%40developer.gserviceaccount.com"
  },
  VIEW_ID : 'ga:xxxxxxxxxx',
  
  //configuration to get data from google analytics
  metrics:'ga:sessions,ga:pageviews,ga:users',
  startDate : '7daysAgo',
  endDate : 'today',
  dimentations : 'ga:date,ga:browser,ga:city',
  
  // Set cron parameters to set frequency to import data.
  // When specifying your cron values you'll need to make sure that your values fall within the ranges, 
  // if you don't want to use any parameter then put * in it.
  // Seconds: 0-59
  // Minutes: 0-59
  // Hours: 0-23
  // Day of Month: 1-31
  // Months: 0-11
  // Day of Week: 0-6
  Seconds: "0",
  Minutes: "*",
  Hours: "*",
  DayofMonth: "*",
  Months: "*",
  DayofWeek: "*"
};

module.exports = config;
