module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
            dirs: {
                main: '.',
                jsSrc: 'src/js',
                sassSrc: 'src/sass'
            },
            watch: {
                js: {
                    files: ['<%= jshint.files %>'],
                    tasks: ['jshint', 'uglify']
                },
                scss: {
                    files: ['<%= dirs.sassSrc %>/*.scss'],
                    tasks: ['compass']
                }

            },
            jshint: {
                files: [
                    '<%= dirs.jsSrc %>/juniper.js'
                ],
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    boss: true,
                    eqnull: true,
                    browser: true,
                    globals: {
                        jQuery: true,
                        $: true
                    }
                }
            },
            uglify: {
                options: {
                    mangle: {toplevel: true},
                    squeeze: {dead_code: true},
                    codegen: {quote_keys: true}
                },
                dist: {
                    src: ['<%= dirs.jsSrc %>/juniper.js'],
                    dest: '<%= dirs.main %>/juniper.min.js'
                }
            },
            compass: {
                dist: {
                    options: {
                        sassDir: '<%= dirs.sassSrc %>',
                        cssDir: '<%= dirs.main %>',
                        environment: 'production'
                    }
                }
            }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['jshint', 'uglify', 'compass']);

};
