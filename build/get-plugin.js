import progress from 'rollup-plugin-progress'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import eslint from 'rollup-plugin-eslint'
import babel from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'

const plugins = {
  progress (opt) {
    return progress({
      clearLine: opt.clear || false
    })
  },
  json () {
    return json({
      exclude: ['node_modules/**'],
      preferConst: true
    })
  },
  resolve () {
    return resolve()
  },
  commonjs () {
    return commonjs()
  },
  eslint () {
    return eslint({
      include: ['src/**/*.js']
    })
  },
  babel () {
    return babel({
      include: ['src/**', 'node_modules/**']
    })
  },
  uglify (opt) {
    return uglify(opt)
  },
  filesize () {
    return filesize()
  }
}

export default function getPlugin (name, opt = {}) {
  // console.log('name: ', name)
  return plugins[name](opt)
}