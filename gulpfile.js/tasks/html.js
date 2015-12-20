// ========================================
// HTML Task
// ========================================

var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var gulpif = require('gulp-if');
var config = require('../config');
var handleErrors = require('../lib/handleErrors');
var browserSync  = require('browser-sync');
var data = require('gulp-data');
var render = require('gulp-nunjucks-render');
var htmlmin = require('gulp-htmlmin');

var exclude = path.normalize('!**/{' +
  config.tasks.html.excludeFolders.join(',') + '}/**'
);
var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/**/*.html'),
    exclude],
  dest: path.join(config.root.dest, config.tasks.html.dest)
};

getData = function(file) {
  var dataPath = path.resolve(config.root.src, config.tasks.html.src,
        config.tasks.html.dataFile);
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
};

gulp.task('html', function() {
  render.nunjucks.configure([path.join(config.root.src, config.tasks.html.src)],
    {watch: false});

  return gulp.src(paths.src)
    // .pipe(data)
    .pipe(render())
    .on('error', handleErrors)
    // .pipe(gulpif(process.env.NODE_ENV == 'production', htmlmin(config.html.htmlmin)))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
