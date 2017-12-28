'use strict'

/* GLOBAL MODULES */
const gulp = require('gulp')
const bs = require('browser-sync').create()

/* TASKS */
require('./images')(gulp, bs)
require('./scripts')(gulp, bs)
require('./markup')(gulp, bs)
require('./usage')(gulp)
require('./styles')(gulp, bs)
require('./watch')(gulp, bs)

gulp.task('default', gulp.series(
  gulp.parallel('images', 'scripts'),
  'markup',
  'usage',
  'styles',
  'watch'
))
