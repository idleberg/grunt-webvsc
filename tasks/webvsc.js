
'use strict';

// Dependencies
const { basename, extname } = require('path')
const chalk = require('chalk');
const { convertPreset } = require('@visbot/webvsc');
const replaceExt = require('replace-ext');
const { statSync } = require('fs');

module.exports = function (grunt) {
  grunt.registerMultiTask('webvsc', 'Convert AVS presets', function () {
    let options = this.options();
    let count = 0;
    let whitespace = (options.minify === true) ? 0 : 2;

    this.files.forEach(function (file) {
      let input = file.src[0];
      let output;

      if (!input) {
        return;
      }

      if (file.dest === 'files') {
        // always change file extension unless specified explicitly
        file.dest = replaceExt(input, '.webvs');
      }

      let presetContents = grunt.file.read(input, {encoding: null});
      let presetName = basename(input, extname(input));
      let presetDate = (options.noDate === true)? '2000-03-03T00:00:00.000Z' : statSync(file.path).mtime.toISOString();

      try {
        output = convertPreset(presetContents, presetName, presetDate, options);
      } catch (err) {
        grunt.warn(input + '\n' + err);
        return;
      }

      count++;

      grunt.file.write(file.dest, JSON.stringify(output, null, whitespace));
      grunt.verbose.writeln('Converted ' + chalk.cyan(file.dest));
    });

    grunt.log.writeln('Converted ' + chalk.cyan(count) + ' presets' + (this.files.length !== count ? ' (' + chalk.red(this.files.length - count) + ' failed)' : ''));
  });
};
