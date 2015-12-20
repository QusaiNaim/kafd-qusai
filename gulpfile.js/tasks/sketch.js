// ========================================
// Sketch Task
// ========================================

var gulp   = require('gulp');
var config = require('../config');
var sketch = require('gulp-sketch');
var path   = require('path');
var paths  = {
  src: path.join(config.root.src, config.tasks.sketch.src, '/*.sketch'),
  dest: path.join(config.root.dest, config.tasks.sketch.dest)
};

gulp.task('sketch', function() {
  return gulp.src(paths.src)
    .pipe(sketch({
      export: 'slices',
      formats: 'png'
    }))
    .pipe(gulp.dest(paths.dest));
});
