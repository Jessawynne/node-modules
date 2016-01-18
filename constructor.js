function Animal () {};

Animal.prototype.poop = function () {
  console.log('💩');
};

module.exports = Animal;

//require('./constructor'); OR
//
//var Animal = require('./constructor');
//var cat = new Animal();
//cat.poop();


