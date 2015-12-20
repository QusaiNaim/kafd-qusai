// ========================================
// BrowserSync Task
// ========================================

var gulp = require('gulp');
var path = require('path');
var config = require('../config');
var browserSync  = require('browser-sync');
var settings = {
  server: {
    baseDir: path.resolve(config.root.dest, config.tasks.html.dest)
  }
};

gulp.task('browserSync', function() {
  return browserSync(settings);
});
