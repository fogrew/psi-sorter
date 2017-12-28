const config = require('./config')
const paths = require('./config/paths')

module.exports = function (gulp, bs) {
  return gulp.task('watch', function () {
    bs.init(config)

    gulp.watch(paths.source.scripts + '**/*.js', gulp.series('scripts'))
    gulp.watch(paths.source.images + '**/*.svg', gulp.series('images'))
    gulp.watch(paths.source.styles + '**/*.pcss', gulp.series('styles'))
    gulp.watch(paths.dev + '**/*.html', gulp.series('markup'))
  })
}
