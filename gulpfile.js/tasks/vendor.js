// ========================================
// Vendor Task
// ========================================

var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var filter = require('gulp-filter');
var bowerFiles  = require('main-bower-files');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var paths = {
  dest: path.join(config.root.dest, config.tasks.vendor.dest)
};

gulp.task('vendor', function() {
  return gulp.src(bowerFiles())
    .pipe(filter('*.js'))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream: true}));
});
