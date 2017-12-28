const paths = require('./config/paths')

module.exports = function (gulp, bs) {
  return gulp.task('markup', function () {
    return gulp.src('index.html', {cwd: paths.dev}) // TODO: inject svg into DOM
      .pipe(gulp.dest(paths.assets))
      .pipe(bs.stream())
  })
}
