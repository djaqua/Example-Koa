require('co-mocha');
var expect = require('chai').expect;
var helloGenerator = require('./src/helloGenerator.js');
var timerGenerator = require('./src/timerGenerator.js');

describe('Hello Generator', function() {
    it ('should yield to the function and return hello', function *() {
        var ans = yield helloGenerator();
        expect(ans).to.equal('hello generator');
    });
});

describe('Timer Generator', function() {
    it ('should yield to the function and return hello', function *() {
        var ans = yield timerGenerator();
        expect(ans).to.equal('timer generator');
    });
});
