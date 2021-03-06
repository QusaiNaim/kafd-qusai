// ========================================
// Images Task
// ========================================

var gulp = require('gulp');
var path = require('path');
var config = require('../config');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**'),
  dest: path.join(config.root.dest, config.tasks.images.dest)
};

gulp.task('images', function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
