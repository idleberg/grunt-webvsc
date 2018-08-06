# grunt-webvsc

[![npm](https://flat.badgen.net/npm/license/grunt-webvsc)](https://www.npmjs.org/package/grunt-webvsc)
[![npm](https://flat.badgen.net/npm/v/grunt-webvsc)](https://www.npmjs.org/package/grunt-webvsc)
[![Travis](https://flat.badgen.net/travis/idleberg/grunt-webvsc)](https://travis-ci.org/idleberg/grunt-webvsc)
[![David](https://flat.badgen.net/david/dep/idleberg/grunt-webvsc)](https://david-dm.org/idleberg/grunt-webvsc)
[![David](https://flat.badgen.net/david/dev/idleberg/grunt-webvsc)](https://david-dm.org/idleberg/grunt-webvsc?type=dev)

Grunt task to convert [Winamp AVS presets](https://www.wikiwand.com/en/Advanced_Visualization_Studio) into [Webvs](https://github.com/azeem/webvs) JSON.

## Installation

```sh
# npm
$ npm install grunt-webvsc

# Yarn
$ yarn add grunt-webvsc
```

## Usage

**Example:**

```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    webvsc: {
      options: {
        minify: true,
      },
      build: {
        src: ['**/*.avs'],
        dest: './output/'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-webvsc');
  
  // Default task(s).
  grunt.registerTask('default', ['webvsc']);
};
```

The output file-extension will automatically be set to `.webvs`, unless specified explicitly otherwise in your `Gruntfile.js`.

## Options

### hidden

Type: `boolean`  
Default: `true`  

Don't extract hidden strings from fixed-size strings

### minify

Type: `boolean`  
Default: `false`  

Minify generated JSON

### verbose

Type: `number`  
Default: `0`  

Control the amount of output displayed:

* `0` Hide output
* `1` List detected components
* `2` List component details

## Related Projects

* [webvsc](https://github.com/grandchild/AVS-File-Decoder)
* [webvsc-cli](https://github.com/idleberg/webvsc-cli)
* [gulp-webvsc](https://github.com/idleberg/gulp-webvsc)

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/grunt-webvsc) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
