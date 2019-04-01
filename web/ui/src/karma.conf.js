// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const process = require('process');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage'),
      require('@angular/cli')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './test.ts', watched: false }
    ],
    preprocessors: {
      'dist/app/**/!(*spec).js': ['coverage'],
      './test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageReporter: {
      dir : 'coverage/',
        reporters: [
          { type: 'html' },
          { type: 'lcov' }
        ]
    },
    angularCli: {
      config: './angular-cli.json',
      codeCoverage: 'coverage',
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage']
              : ['progress'],
    // coverageIstanbulReporter: {
    //   dir: require('path').join(__dirname, '../coverage/ui'),
    //   reports: ['html', 'lcovonly', 'text-summary', 'json'],
    //   fixWebpackSourcePaths: true
    // },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome_no_sandbox'],
    customLaunchers:{
      Chrome_no_sandbox:{
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true,
    concurrency:Infinity
  });
};
