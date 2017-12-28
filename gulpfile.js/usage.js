const paths = require('./config/paths')
const usage = require('gulp-csso-usage')

module.exports = function (gulp) {
  return gulp.task('usage', function () {
    return gulp.src('*.html', {cwd: paths.assets})
      .pipe(usage())
      .pipe(gulp.dest(paths.dev))
  })
}
