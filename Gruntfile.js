'use strict';
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });
    grunt.initConfig({
        pgk:grunt.file.readJSON('package.json'),
        jshint: {
             options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
             },
             all: {
                src: [
                    'Gruntfile.js',
                    'app/scripts/{,*/}*.js'
                ]
            }
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'dist'
            }
        },       
        concat: {
            options: {
                seperator: ';'
            },
            dist: {}
        },
        uglify: {
          options: {
            report: 'min',
            mangle: false
          },
          dist: {}
        },
        cssmin: {
            dist: {}
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            release: {
                files: [{
                   src: [
                       'dist/scripts/*.js',
                       'dist/styles/*.css'
                   ] 
                }]
            }
        },
        usemin: {
            html: ['dist/*.html'],
            css: ['dist/styles/*.css'],
            options: {
                assetDirs:['dist','dist/styles']
            }
        },         
        copy: {
            dist: {
                cwd: 'app',
                src: ['**','!styles/**/*.css','!scripts/**/*.js'],
                dest: 'dist',
                expand: true
            },
            fonts: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/font-awesome',
                        src: ['fonts/*.*'],
                        dest: 'dist'                      
                    }
                ]
            },
            components: {
                files: [                    
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/bootstrap/dist/js',
                        src: ['bootstrap.min.js'],
                        dest: 'dist/scripts/lib'                      
                    },  
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/angular',
                        src: ['angular.min.js'],
                        dest: 'dist/scripts/lib'                      
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/lodash/dist',
                        src: ['lodash-3.0.0.min.js'],
                        dest: 'dist/scripts/lib'                      
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/jquery/dist',
                        src: ['jquery.min.js'],
                        dest: 'dist/scripts/lib'                      
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/angular-route/',
                        src: ['angular-route.min.js'],
                        dest: 'dist/scripts/lib'                      
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/angular-animate',
                        src: ['angular-animate.min.js'],
                        dest: 'dist/scripts/lib'                      
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/angular-ui-bootstrap',
                        src: ['ui-bootstrap-1.0.3.min.js'],
                        dest: 'dist/scripts/lib'                      
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/angular-simple-logger/dist',
                        src: ['angular-simple-logger.min.js'],
                        dest: 'dist/scripts/lib'                      
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/angular-google-maps/dist',
                        src: ['angular-google-maps.min.js'],
                        dest: 'dist/scripts/lib'                      
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/preload',
                        src: ['preloadCtrl.js'],
                        dest: 'dist/scripts'                        
                    }
                ]
            }
        },        
        clean: {
            build: {
                src: ['dist/']
            }
        },
        watch: {
            copy: {
                files: ['app/**','!app/**/*.css','!app/**/*.js'],
                tasks: ['build']
            },
            scripts: {
                files: ['app/scripts/app.js'],
                tasks: ['build']
            },
            style: {
                files: ['app/styles/style.css'],
                tasks: ['build']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    'app/images/{,*/}*.{png, jpg, jpeg, gif, webp, svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            dist: {
                options: {
                    open: true,
                    base: {
                        path: 'dist',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },
        processhtml: {
          build: {
            files: {
              'dist/index.html': ['dist/index.html']
            }
          }
        }        
    });
    grunt.registerTask('build', [
        'clean',
        'jshint',
        'useminPrepare',        
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'filerev',
        'processhtml',
        'usemin'        
    ]);
    grunt.registerTask('serve',['build','connect:dist','watch']);
    grunt.registerTask('default',['build']);
};