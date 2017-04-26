const jsdom = require('mocha-jsdom');
const expect = require('chai').expect;

describe('mocha tests', function () {

  jsdom();

  it('has document', function () {
    var div = document.createElement('div')
    expect(div.nodeName).eql('DIV')
  })

})



