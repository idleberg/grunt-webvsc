'use strict';

// Dependencies
const chalk = require('chalk');
const replaceExt = require('replace-ext');
const { convertFile } = require('@visbot/webvsc');

module.exports = grunt => {
  grunt.registerMultiTask('webvsc', 'Convert AVS presets', async function () {
    const done = this.async();
    const options = this.options();
    let count = 0;

    await Promise.all(this.files[0].src.map(async input => {
      if (!input) return;

      let contents;

      try {
        contents = await convertFile(input, options);
      } catch (err) {
        grunt.warn(`${input}\n${err}`);
        return;
      }

      let output = replaceExt(input, '.webvs');

      grunt.file.write(output, contents);
      count++;
    }));

    let failedMsg = (this.files[0].length !== count ? ' (' + chalk.red(this.files[0].src.length - count) + ' failed)' : '');
    grunt.log.writeln(`Converted ${chalk.cyan(count)} presets${failedMsg}`);

    done();
  });
};
