module.exports = function(grunt) {
    grunt.initConfig({
        sass: {                              // Task 
            dist: {                            // Target job
              options: {                       // Target options 
                style: 'expanded',
                sourcemap: 'file'
              },
              files: [{                         // Dictionary of files 
                src: 'process/sass/style.scss',
                dest: 'builds/sassEssentials/css/style.css'
              }]
            }
          }, // sass

        watch: {
            scripts: {
                files: ['builds/sassEssentials/**/*.html',
                        'process/sass/**/*.scss'],
                tasks: ['sass']
            },
            options: {
                spawn: false,
                livereload: true
            }
        },//watch

        connect: {
            server: {
                options: {
                  port: 8000,
                  hostname: 'localhost',
                  base: 'builds/sassEssentials',
                  livereload: true
                }
              }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['sass', 'connect', 'watch']);
}; //module