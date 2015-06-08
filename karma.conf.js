module.exports = function(config){
    config.set({
        basePath : './',
        files : [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/jquery/dist/jquery.js',
            'test/unit/*.js',
            'app/resources/js/*.js',

        ],
        autoWatch : true,
        frameworks: ['jasmine'],
        browsers : ['Chrome'],
        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],
        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};