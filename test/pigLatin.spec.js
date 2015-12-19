var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var pigLatinTranslator = require('./../pigLatin.js');

describe('pigLatinTranslator', function() {
  it('should be a module', function(){
    expect(pigLatinTranslator).to.exist;
    expect(pigLatinTranslator).to.be.a('object');
  });
  it('should have two methods, toPigLatin and toEnglish', function () {
    expect(pigLatinTranslator.toPigLatin).to.exist;
    expect(pigLatinTranslator.toPigLatin).to.be.a('function');
    expect(pigLatinTranslator.toEnglish).to.exist;
    expect(pigLatinTranslator.toEnglish).to.be.a('function');
  });

});