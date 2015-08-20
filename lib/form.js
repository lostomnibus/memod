'use strict';

var Question = require('./question');
var uuid = require('node-uuid');

/**
 * instantiator
 */
function Form(options, questions){
  this._id = uuid.v4();
  this.options = options;
  this.questions = [];

  if(questions){
    for (var i = 0, l = questions.length; i < l; i ++) {
      var question = questions[i];
      this.addQuestion(question);
    }
  }
}

/**
 * add question to form
 */
Form.prototype.addQuestion = function(question) {
  var q = new Question(question, this.logger);
  this.questions.push(q);
  return q;
};

/**
 * reset all values in form
 */
Form.prototype.reset = function(){

};

/**
 * submit form
 */
Form.prototype.submit = function(){

};

/**
 * validate form
 */
Form.prototype.validate = function() {

};

module.exports = Form;
