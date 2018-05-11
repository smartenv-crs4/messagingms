var mongoose = require('mongoose'); 
var conf = require('../config').conf; 
var app = require('../app'); 
var request = require('request'); 
var _ = require("underscore"); 
var util = require("util"); 
var debug = require('debug')('models:db');

var dbUrl = conf.dbHost + ':' + conf.dbPort + '/' + conf.dbName; 

var options = 
{
	server:
    {
			socketOptions:
      {
				keepAlive:1, connectTimeoutMS:30000 
			}
	  }
}; 

exports.connect = function connect(callback)
{
	mongoose.Promise = require('bluebird').Promise; 
	mongoose.connect(dbUrl, options, function (err, res)
  {

		if (err)
    {
			debug('Unable to connect to database ' + dbUrl); 
			callback(err); 
		}
		else 
    {
			var msg = 'Connected to database ' + dbUrl; 
			//console.log(msg);
			debug(msg); 
			callback(); 
		}
	}); 
}; 

exports.disconnect = function disconnect(callback)
{
	mongoose.disconnect(callback); 
}; 
