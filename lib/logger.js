'use strict';

function Logger(l){
  this.logger = null;

  if(l){
    this.logger = l;
  } else {
    var winston = require('winston');
    this.logger = new (winston.Logger)();
  }
}

Logger.prototype.info = function(log) {
  if(this.logger && this.logger.info){
    this.logger.info(log);
  } else {
    this.logger.log(log);
  }
};

Logger.prototype.log = function(log) {
  if(this.logger & this.logger.log){
    this.logger.log(log);
  } else {
    console.log(log);
  }
};

Logger.prototype.warn = function(log){
  if(this.logger && this.logger.warn){
    this.logger.warn(log);
  } else {
    this.logger.log(log);
  }
};

Logger.prototype.error = function(log){
  if(this.logger && this.logger.error){
    this.logger.error(log);
  } else {
    this.logger.log(log);
  }
};

module.exports = Logger;
