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
    }
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jsonlint');

  grunt.registerTask('default', ['eslint', 'jsonlint']);

};
