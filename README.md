# grunt-webvsc

[![npm](https://img.shields.io/npm/l/grunt-webvsc.svg?style=flat-square)](https://www.npmjs.org/package/grunt-webvsc)
[![npm](https://img.shields.io/npm/v/grunt-webvsc.svg?style=flat-square)](https://www.npmjs.org/package/grunt-webvsc)
[![Travis](https://img.shields.io/travis/idleberg/grunt-webvsc.svg?style=flat-square)](https://travis-ci.org/idleberg/grunt-webvsc)
[![David](https://img.shields.io/david/idleberg/grunt-webvsc.svg?style=flat-square)](https://david-dm.org/idleberg/grunt-webvsc)
[![David](https://img.shields.io/david/dev/idleberg/grunt-webvsc.svg?style=flat-square)](https://david-dm.org/idleberg/grunt-webvsc?type=dev)

Grunt task to convert [Winamp AVS presets](https://www.wikiwand.com/en/Advanced_Visualization_Studio) into [Webvs](https://github.com/azeem/webvs) JSON.

## Installation

```sh
# npm
$ npm install grunt-webvsc

# Yarn
$ yarn add grunt-webvsc
```

## Usage

`webvsc([options])`

The output file-extension will automatically be set to `.webvs`, unless specified explicitly in your `Gruntfile.js`

**Example:**

```js
module.exports = function(grunt) {

  grunt.initConfig({
    webvsc: {
      options: {
        minify: true,
      },
      files: ['input/**/*.avs']
    }
  });

  grunt.loadNpmTasks('grunt-webvsc');
  grunt.registerTask('default', ['webvsc']);
};
```

## Options

### hidden

Type: `boolean`  
Default: `false`  

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

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/grunt-webvsc) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
