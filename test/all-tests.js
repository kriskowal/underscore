
var assert = require("test/assert");

exports.testModular = function () {
    var _ = require("underscore");
    assert.isTrue(!!_.every, '_ exported');
    assert.isTrue(!_._, 'No _._');
};

/*
// In due time:
var fs = require("file");
var qunit = require("qunit/dsl");
var here = fs.path(module.path);

var test = exports.test = new qunit.Test();

[
    "arrays",
    "collections",
    "functions",
    "objects",
    "utility"
].forEach(function (name) {
    test.load(here.join(name + '.js'))();
});
*/

if (require.main == module.id)
    require("os").exit(require("test/runner").run(exports));

