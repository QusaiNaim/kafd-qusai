// ========================================
// svgSprite Task
// ========================================

var gulp = require('gulp');
var path = require('path');
var config = require('../config');
var imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var browserSync  = require('browser-sync');

gulp.task('svgSprite', function() {
  var settings = {
    src: path.join(config.root.src, config.tasks.svg.src, '/*.svg'),
    dest: path.join(config.root.dest, config.tasks.svg.dest)
  };

  return gulp.src(settings.src)
    .pipe(imagemin())
    .pipe(svgstore())
    .pipe(gulp.dest(settings.dest))
    .pipe(browserSync.reload({stream: true}));
});
