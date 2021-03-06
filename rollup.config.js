const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const license = require('rollup-plugin-license');

module.exports = {
  input: 'src/markable.js',
  output: {
    file: 'lib/markable.js',
    format: 'umd',
    name: 'markable'
  },
  plugins: [
    license({
      banner: `
DO NOT EDIT THIS FILE
The code in this file is generated from files in ./src/
`
    }),
    license({
      banner: `
markable - make non-English Markdown plain text markable
Copyright (c) ${new Date().getFullYear()}, Guxi11. (MIT Licensed)
https://github.com/hbhde/markable
`
    }),
    commonjs(),
    babel({
      presets: [['@babel/preset-env', { loose: true }]]
    })
  ]
};
