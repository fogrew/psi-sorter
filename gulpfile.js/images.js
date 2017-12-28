const paths = require('./config/paths')
const sprite = require('gulp-svg-sprite')

module.exports = function (gulp, bs) {
  return gulp.task('images', function () {
    return gulp.src('*.svg', {cwd: paths.source.images})
      .pipe(sprite({
        mode: {
          symbol: {
            dest: '.',
            sprite: 'index.symbol.svg',
            bust: false
          }
        }
      }))
      .pipe(gulp.dest(paths.public.images))
      .pipe(bs.stream())
  })
}
