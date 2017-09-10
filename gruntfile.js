module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['development/html/*.html',
        'development/sass/*.sass',
        'development/scss/*.scss',
        'development/css/*.css',
        'development/js/*.js',
        'development/css/*min.css',
        'development/js/*.min.js'
      ],
      tasks: ['jshint', 'sass', 'htmlmin', 'uglify']
    },
    jshint: {
      all: ['gruntfile.js',
        'development/js/*.js'
      ]
    },
    sass: {
        	options: {
              sourceMap: true,
              outputStyle: 'compressed'
            },
          dev: {
            files: {
              'distribution/css/main.css': 'development/sass/main.sass'
            }
          }
        },
    htmlmin: { // Task
      dist: { // Target
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: { // Dictionary of files
          'distribution/index.html': 'development/html/index.html' // 'destination': 'source'
        }
      }
    },
    uglify: {
      my_target: {
        options: {
          sourceMap: true,
          sourceMapName: 'distribution/js/script.min.map'
        },
        files: {
          'distribution/js/script.min.js': ['development/js/*.js']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'development/images/',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'distribution/images/'
        }]
      }
    },
    browserSync: {
      bsFiles: {
        src: [
          'distribution/css/*.css',
          'distribution/*.html'
        ]
      },
      options: {
        watchTask: true,
        server: './distribution'
      }
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('distribution', ['jshint', 'sass', 'htmlmin', 'uglify']);
};
