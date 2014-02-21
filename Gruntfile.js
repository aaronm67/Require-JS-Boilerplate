module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        BASE_PATH: './',
        JS_SOURCE_PATH: '<%= BASE_PATH %>' + 'static/js/source/',
        JS_BUILD_PATH: '<%= BASE_PATH %>' + 'static/js/build/',
        requirejs: {
            compile: {
                options: {
                    baseUrl: '<%= JS_SOURCE_PATH %>',
                    mainConfigFile: '<%= JS_SOURCE_PATH %>' + 'site.js',
                    name: 'site',
                    out: '<%= JS_BUILD_PATH %>' + 'site.js',
                    useStrict: true,
                    preserveLicenseComments: true,
                    pragmas: {
                        debugExclude: true
                    },
                    paths: {
                        serverVars: 'empty:'
                    },
                    optimize: 'uglify2',
                    uglify2: {
                        output: {
                            beautify: false,
                            comments: false
                        },
                        compress: {
                            sequences: false
                        },
                        warnings: false,
                        mangle: true
                    }
                }
            }
        },
        
        jshint: {
            all: [
                '<%= JS_SOURCE_PATH %>**/*.js',
                '!<%= JS_SOURCE_PATH %>lib/*.js',
                '<%= BASE_PATH %>GruntFile.js'
            ],
            options: {
                'browser': true,
                'camelcase': true,
                'curly': true,
                'eqnull': true,
                'eqeqeq': true,
                'immed': true,
                'indent': 4,
                'newcap': true,
                'noarg': true,
                'quotmark': 'single',
                'undef': true,
                'trailing': true,
                'maxparams': 4,
                'maxdepth': 2,
                'globals': {
                    define: true,
                    module: true,
                    require: true,
                    console: true,
                    $: true
                }
            }
        }
    });

    // Loads the necessary tasks for this Grunt file.
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // register build tasks (grunt jshint -- runs jshint)
    grunt.registerTask('jshint', [ 'jshint']);
    grunt.registerTask('build', ['requirejs']);

    grunt.registerTask('default', ['build']);
};