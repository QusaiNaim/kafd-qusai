// ========================================
// Scripts Task
// ========================================

var gulp = require('gulp');
var path = require('path');
var config = require('../config');
var browserSync = require('browser-sync');
var jscs = require('gulp-jscs');
var notify = require('gulp-notify');
var paths = {
  src: path.join(config.root.src, config.tasks.scripts.src, '/**/*.js'),
  dest: path.join(config.root.dest, config.tasks.scripts.dest),
};

gulp.task('scripts', function() {
  return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('jscs', function() {
  return gulp.src(paths.src)
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(notify({
      title: 'JSCS',
      message: 'JSCS PASSED'
    }));
});
