'use strict';

var constants = require('./constants');
var uuid = require('node-uuid');

function Question(question, logger){
  this._id = uuid.v4();
  this.logger = logger;
  this.validations = [];
}

Question.prototype.addValidation = function(validation){
  if(validation && typeof validation === 'function'){
    this.validations.push(validation);
  } else {
    this.logger.error('Invalid validation');
    process.exit(1);
  }
};

Question.prototype.validate = function(){
  var valid = true;
  for (var i = 0, l = this.validations.length; i < l; i ++) {
    var validation = this.validations[i];
    valid = valid && validation(this);
  }
  return valid;
};

Question.prototype.setName = function(name) {
  this.name = name;
};
Question.prototype.getName = function() {
  return this.name;
};

Question.prototype.setText = function(text) {
  this.text = text;
};
Question.prototype.getText = function(){
  return this.text;
};

Question.prototype.setValue = function(value) {
  this.value = value;
};
Question.prototype.getValue = function() {
  return this.value;
};

Question.prototype.setType = function(type){

  if(!type){
    this.logger.error('Question type must be defined.');
    process.exit(1);
  }

  if(typeof constants[type] === 'undefined'){
    this.logger.error('Question type is not valid.');
    process.exit(1);
  }

  this.type = type;
};
Question.prototype.getType = function(){
  return this.type;
};


module.exports = Question;
