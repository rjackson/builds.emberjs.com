module.exports = {
  "compass": {                  // Task
    compass: {                   // Target
      options: {              // Target options
        sassDir: 'app/styles',
        cssDir: 'tmp/public/assets',
        environment: 'production'
      }
    },
    dev: {                    // Another target
      options: {
        sassDir: 'app/styles',
        cssDir: 'tmp/public/assets',
      }
    }
  }
};
