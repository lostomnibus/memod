'use strict';

var defaults = {
  debug : true,
  logger : {}
};

function Configuration(options) {

  if(!options){
    options = defaults;
  }

  this.options = options;
  this.debug = options.debug | defaults.debug;
}

Configuration.prototype.getLogger = function() {
  return this.options.logger;
};

module.exports = Configuration;

