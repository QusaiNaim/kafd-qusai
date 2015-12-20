// ========================================
// Default Task
// ========================================

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var tasks = {
  assetTasks: ['fonts', 'images', 'svgSprite'],
  codeTasks:  ['html', 'css', 'scripts', 'vendor']
};

gulp.task('default', function(cb) {
  // Run a series of gulp tasks in order.
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'watch', cb);
});
