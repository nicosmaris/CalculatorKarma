module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'lib/angular.min.js',
      'lib/angular-mocks.js',
      'app/*.js',
      'tests/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    // dots is mandatory for travis
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox'],
    plugins: ['karma-jasmine', 'karma-firefox-launcher'],
    // Continuous Integration mode: if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
