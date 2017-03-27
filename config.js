var path = require('path');

var taskConfig = {

  component: {
    name: 'react-bootstrap-datetime-range-picker',
    lib: './lib',
    scripts: {
      entry: './src/index.js',
      output: {
        library: 'react-bootstrap-datetime-range-picker'
      },
      externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      }
    }
  },

  example: {
    src: './examples/src',
    dist: './examples/dist',
    index: 'index.html',
    script: 'js/app.js',
    alias: {
      'react-bootstrap-datetime-range-picker': path.resolve(__dirname, './src')
    },
    files: []
  }

};

module.exports = taskConfig;
