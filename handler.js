'use strict';

var http = require('https');
module.exports.hrea = (event, context, callback) => {
//  const response = {
//    statusCode: 200,
//    body: JSON.stringify({
//      message: 'Hello from Serverless Test #3!',
//      input: event,
//    }),
//  };

  http.get('https://hrea-Production.ads.aws.uq.edu.au/RUNME', function (result) {
      context.done(null);
    }).on('error', function (err) {
      context.done("Failed");
    }); 
  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
