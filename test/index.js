var shrugy = require('../index.js');
var test = require('tape');

test('shrugy', function(t) {
    t.equal('¯\\_(ツ)_/¯', shrugy(), 'shrugs GREAT ¯\\_(ツ)_/¯');
    t.end();
});
