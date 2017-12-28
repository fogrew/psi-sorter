const paths = require('./config/paths')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const uglifyjs = require('uglify-es')
const composer = require('gulp-uglify/composer')
const minify = composer(uglifyjs, console)

module.exports = function (gulp, bs) {
  return gulp.task('scripts', function () {
    return gulp.src(['settings.js', 'main.js'], {cwd: paths.source.scripts})
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(concat('main.min.js'))
      .pipe(minify({
        compress: {
          unsafe: true,
          unsafe_comps: true,
          unsafe_Func: true,
          unsafe_math: true,
          unsafe_proto: true,
          unsafe_regexp: true,
          warnings: true
        },
        output: {
          beautify: true
        }
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.public.scripts))
      .pipe(bs.stream())
  })
}
