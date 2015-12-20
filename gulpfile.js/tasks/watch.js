// ========================================
// Watch Task
// ========================================

var gulp = require('gulp');
var path = require('path');
var config = require('../config');
var watch = require('gulp-watch');
var watchableTasks = ['fonts', 'images', 'svgSprite', 'html', 'css', 'scripts'];

gulp.task('watch', ['browserSync'], function() {
  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName];

    if (task) {
      var filePattern = path.join(config.root.src, task.src, '**/*.{' +
        task.extensions.join(',') + '}');
      watch(filePattern, function() {
        gulp.start(taskName);
      });
    }
  });
});
