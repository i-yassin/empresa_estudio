module.exports = function(grunt) {
    require('jit-grunt')(grunt);
  
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "./assets/style/css/style.css": "./assets/style/less/style.less" // destination file and source file
          }
        }
      },
      watch: {
        styles: {
          files: ['assets/style/less/**/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
  };