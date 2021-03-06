module.exports = {
  app: {
    src: ['tmp/transpiled/app/**/*.js'],
    dest: 'tmp/public/assets/app.js',
    options: {
      sourcesContent: true
    },
  },

  css: {
    src: ['tmp/public/assets/**/*.css'],
    dest: 'tmp/public/assets/app.css',
    options: {
      sourcesContent: true
    },
  },

  test: {
    src: 'tmp/transpiled/tests/**/*.js',
    dest: 'tmp/public/tests/tests.js',
    options: {
      sourcesContent: true
    }
  }
};
