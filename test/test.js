'use strict';

const grunt = require('grunt');

exports.htmlmin = {
  convert: function (test) {
    test.expect(1);

    let actual = grunt.file.read('./test/.tmp/superscope.webvs');
    let expected = grunt.file.read('./test/expected/superscope.webvs');

    test.equal(actual, expected, 'should convert AVS');
    test.done();
  },
};
