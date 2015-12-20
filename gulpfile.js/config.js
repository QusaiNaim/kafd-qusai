// ========================================
// Gulp Tasks Config File
// ========================================

module.exports = {
  root: {
    src: './src',
    dest: './public'
  },
  tasks: {
    html: {
      src: 'html',
      dest: './',
      dataFile: 'data/global.json',
      excludeFolders: ['layouts'],
      extensions: ['html', 'json'],
      htmlmin: {
        collapseWhitespace: true
      }
    },
    css: {
      src: 'styles',
      dest: 'styles',
      autoprefixer: {
        browsers: ['last 2 versions']
      },
      sass: {
        indentedSyntax: true // Enable .sass syntax (.scss still works too)
      },
      extensions: ['sass', 'scss', 'css']
    },
    scripts: {
      src: 'scripts',
      dest: 'scripts',
      extensions: ['js']
    },
    fonts: {
      src: 'fonts',
      dest: 'fonts',
      extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
    },
    images: {
      src: 'images',
      dest: 'images',
      extensions: ['jpg', 'png', 'svg', 'gif']
    },
    svg: {
      src: 'sprites',
      dest: 'images',
      extensions: ['svg']
    },
    vendor: {
      dest: 'scripts/vendor',
      extensions: ['js']
    },
    sketch: {
      src: 'sketch',
      dest: 'images',
      extensions: ['sketch']
    }
  }
};
