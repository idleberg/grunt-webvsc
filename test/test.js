'use strict';

const grunt = require('grunt');

exports.webvsc = {
  empty: function (test) {
    test.expect(1);

    let actual = grunt.file.read('./test/.tmp/empty.webvs');
    let expected = grunt.file.read('./test/expected/empty.webvs');

    test.equal(actual, expected, 'should convert AVS');
    test.done();
  },
  misc: function (test) {
    test.expect(1);

    let actual = grunt.file.read('./test/.tmp/comment.webvs');
    let expected = grunt.file.read('./test/expected/comment.webvs');

    test.equal(actual, expected, 'should convert AVS');
    test.done();
  },
  render: function (test) {
    test.expect(1);

    let actual = grunt.file.read('./test/.tmp/superscope.webvs');
    let expected = grunt.file.read('./test/expected/superscope.webvs');

    test.equal(actual, expected, 'should convert AVS');
    test.done();
  },
  trans: function (test) {
    test.expect(1);

    let actual = grunt.file.read('./test/.tmp/invert.webvs');
    let expected = grunt.file.read('./test/expected/invert.webvs');

    test.equal(actual, expected, 'should convert AVS');
    test.done();
  }
};
