'use strict';

// Dependencies
const eachAsync = require('each-async');
const replaceExt = require('replace-ext');
const { convertFile } = require('@visbot/webvsc');
const { join } = require('path');

module.exports = function (grunt) {
  grunt.registerMultiTask('webvsc', 'Convert AVS presets', function() {
    const done = this.async();
    const options = this.options();
    let count = 0;

    eachAsync(this.filesSrc, (input, i, next) => {
      convertFile(input, options)
        .then( result => {
          const outFile = join(this.target, replaceExt(input, '.webvs'));
          grunt.file.write(outFile, result);

          count++;
          next();
        })
        .catch( err => {
          grunt.log.errorlns(err);
        });
      });
    }, () => {
      done();
    });
};
