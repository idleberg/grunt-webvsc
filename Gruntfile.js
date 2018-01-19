'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      all: ['./tasks/*.js']
    },
    jsonlint: {
      src: [ './*.json' ],
      options: {
        formatter: 'prose'
      }
    },
    clean: {
      test: ['./test/.tmp']
    },
    webvsc: {
      convert: {
          files: {
            './test/.tmp/superscope.webvs': './test/fixtures/superscope.avs'
          },
      },
      options: {
        minify: true,
        noDate: true
      }
    },
    nodeunit: {
      tests: ['test/test.js']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jsonlint');

  grunt.registerTask('default', ['eslint', 'jsonlint', 'clean', 'webvsc', 'nodeunit']);
};
