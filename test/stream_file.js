var browserify = require('../');
var vm = require('vm');
var test = require('tap').test;
var fs = require('fs');

test('stream file', function (t) {
    var expected = [
        __dirname + '/stream/foo.js',
        __dirname + '/stream/bar.js',
        '/fake.js'
    ];
    t.plan(2 + expected.length);
    
    var stream = fs.createReadStream(__dirname + '/stream/main.js');
    stream.file = '/fake.js';
    
    var b = browserify(stream, { basedir: __dirname + '/stream' });
    b.transform(function (file) {
        t.equal(file, expected.shift());
    });
    
    b.bundle(function (err, src) {
        vm.runInNewContext(src, { t: t });
    });
});
