const paths = require('./config/paths')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const partialImport = require('postcss-partial-import')
const nested = require('postcss-nested')
const csso = require('postcss-csso')
const syntax = require('postcss-scss')

module.exports = function (gulp, bs) { // TODO: add processing with stylefmt
  return gulp.task('styles', function () {
    const staticUsage = require(paths.dev + '/index.json')
    const dinamicUsage = [
      'settings--opened', 'spinner', 'page-loading'
    ]
    const usage = Object.assign(staticUsage.classes, dinamicUsage)

    return gulp.src('styles.pcss', {cwd: paths.source.styles})
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(postcss([
        partialImport,
        nested,
        csso({
          comments: false,
          restructure: true,
          sourceMap: true,
          debug: true,
          usage: usage
        })
      ], { syntax: syntax }))
      .pipe(rename({extname: '.css'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.public.styles))
      .pipe(bs.stream())
  })
}
