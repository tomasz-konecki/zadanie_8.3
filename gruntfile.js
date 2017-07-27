module.exports = function(grunt) {

  grunt.initConfig({
		
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
		
    jshint: {
      all: ['js/*.js']
    },

    watch: {
      css: {
        files: 'sass/*.sass',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
		
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'jshint', 'watch']);

};
