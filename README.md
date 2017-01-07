Small project that demonstrates testing of 'app/*.js' that has 'lib/angular.min.js' and 'angular-mocks.js' with 'tests/*.js'.

Travis runs `npm install` and `npm test`. The last one uses Karma (which uses Firefox and jasmine for BDD).

# To debug at firebug

Set singleRun of karma.conf.js to false, run `karma start debug.conf.js` and once firefox opens, click at 'debug' button, press ctrl-shift-i, at debugger find your file and set a breakpoint and refresh the page
