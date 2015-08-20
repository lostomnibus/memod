'use strict';
var Configuration = require('./configuration');
var Logger = require('./logger');
var Form = require('./form');

function Memod(options){
  this.configuration = new Configuration(options);
  this.logger = new Logger(this.configuration.getLogger());
}

Memod.prototype.Form = Form;

module.exports = Memod;

// var handlebars = require('handlebars');
