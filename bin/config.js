var config={
  //db url
  dburl : 'mongodb://localhost:27017/myproject',

  //In order to use for another analytics replace values of key and view id
  key :{
    "type": "service_account",
    "project_id": "static-cirrus-153217",
    "private_key_id": "7b33568df285a67b8d4bac45fcde29398d1ea7f5",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfBdY10afh8led\ny1fA67cLcPFhqctfagpQ99Z1YQfs/UPS1lv3q3f8NfAfuca1kN/uHcX38EL5B0ws\nM92mRKaPIf62GiWb2RfBQlPBrMvRTA8D7WhMVThhtjwOQ4GHOzIyLXZ0OcWTGmnW\n4rhxAgWYidECLQm+lR8hFc8ArFRSoaabUCAm0ItUpqXhEGZSuwAsrh+1ZgimM338\nbQy7Hh5uGmM9C25eH/FTyVMETdS/9ofCumlt6ugf8noDK3z8a67qO14DUsqRZRZS\n7WaIwxrTC7YKRTJGTMPtIws9gxR7YsxSu0q4+voiON2PNL2cMXI80jdkkcJu5b7/\nXZeh1HbjAgMBAAECggEAXSvQTAwgrvOMfjlrmu8AekWcR7pyG99HWBU9o9xMBoCF\nQnyxubTPQghgPlZcpHjTmvH60cAFnV63NJbW4NoMNISYdh1vt5ZEosi3xhv19xT3\nHzf0CfVMaYOaQEkxFQiL6nZUlthaeEvbgzmnEx86JBtrSDkXIoDAkmPyutQ9O4Pq\nV/YXYFuj8QWYyPXV8UNhgo4a7G/w0SqpFlPZA0YqgJx5DKdpWmPmBf+XhE1QQpN3\nFFBYi3EdfoY3iHcBMCrMAI81UPm2hpEgYDLvHrr5sfdya+LLWftLuJniimtYPrN1\nHouXbcvJVon4p1Etc8hLDkNRCxNuzVIhBBdwoe8QIQKBgQDOmPFjiBa7fhCdcdJ8\nglTBaoPovLImpft7+7RS2S76/apeAo8LdzR1oSA9aqJm/PEylUm32h1XG/+kYdOW\nEhLfDntMQV9q8AX/VlNJPiJcROOIz2+xp4J1tJXf56nrHdPQx9hvSDZTgxbBr1fN\nnJqrQx4Xb7jXD8pkDD0EEHYR2QKBgQDFDJFUnJKAS9ymuBTdfHCFQYHnHEI96xMS\nJMwXbTap5PUHlMER4sO+uo6KIIZDWNSZYe1BIgaoEoZLjUWmaTGRmypeevrpHZtd\n3JCgCK1bArBQhB9/frsevTbdJH/z16WZKf8SeV+0aCX3weA9PGumP/+FIeZcZieD\nfzz5HFMdGwKBgQCJkEE7GwS392ssyvtyuH2jBD+tGugs39yiY6lgeQjVS07DpkSF\nR+yAXrdO7dARb19TZSBe8TcUJ6qDVDhE9ufl6oii7+yPEh+MM3jljh/m/F/dWvJu\ngrFVmtco7eKwkX3WyRsOjjDOTr06XnzChgJfAyPoSxXy7arAD34ZVLSpkQKBgDD2\nv4Iz6d+BelHfOigTTO5/6aShDADQ0gtXI3PKyqOK5iw9FYC5RYS2XMcL7/D6ONHo\nWIkvyFGpUL+jWiRQzWVuFigmDQUyOzImpbVuko0j7OYE/sKynhK0V9a5xCW2d0rI\n+b4AdPyiSJT5ExyEUAeerYLKerCJHdZ6Ho+ULz7zAoGAAOjUXa/mchDjtjAqTUZ9\nxLTT7OoohoE/qwbIkZxqnPAjU39x/7Z3SQfTQlFnx+qkt1nTLfBL/XrSp/YSzIkn\n+t0g6B5vY2upVmpd14WxL8yRqhJh+kn7iekm6QOBRJvKP6AJNE7oha6uh405LHqR\nLuJAdCag4RxAXButWbt70Dk=\n-----END PRIVATE KEY-----\n",
    "client_email": "262841920770-compute@developer.gserviceaccount.com",
    "client_id": "112161670494698234703",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/262841920770-compute%40developer.gserviceaccount.com"
  },
  VIEW_ID : 'ga:136538309',
  
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