'use strict';

var serveStatic = require('serve-static');

var mountFolder = function (dir) {
  return serveStatic(require('path').resolve(dir));
};

var webpackDistConfig = require('./webpack.dist.config.js');
var webpackDevConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  // Let *load-grunt-tasks* require everything
  require('load-grunt-tasks')(grunt);

  // Read configuration from package.json
  var pkgConfig = grunt.file.readJSON('package.json');

  grunt.initConfig({
    'pkg': pkgConfig,

    'webpack': {
      options: webpackDistConfig,
      dist: {
        cache: false
      }
    },

    'webpack-dev-server': {
      options: {
        hot: true,
        port: 8000,
        webpack: webpackDevConfig,
        publicPath: '/assets/',
        contentBase: './<%= pkg.src %>/'
      },

      start: {
        keepAlive: true
      }
    },

    'connect': {
      options: {
        port: 8000
      },

      dist: {
        options: {
          keepalive: true,
          middleware: function () {
            return [
              mountFolder(pkgConfig.dist)
            ];
          }
        }
      }
    },

    'open': {
      options: {
        delay: 500
      },
      dev: {
        path: 'http://localhost:<%= connect.options.port %>/webpack-dev-server/index.web.html'
      },
      dist: {
        path: 'http://localhost:<%= connect.options.port %>/index.html'
      }
    },

    'copy': {
      dist: {
        files: [
          {
            flatten: true,
            src: ['<%= pkg.src %>/index.web.html'],
            dest: '<%= pkg.dist %>/index.html'
          },
          {
            flatten: true,
            src: ['<%= pkg.src %>/favicon.ico'],
            dest: '<%= pkg.dist %>/favicon.ico'
          }
        ]
      }
    },

    'clean': {
      dist: {
        options: {
          force: true
        },
        files: [{
          dot: true,
          src: [
            '<%= pkg.dist %>'
          ]
        }]
      }
    },

    'watch': {
      options: {
        livereload: true
      },
      build: {
        files: 'src/**/*.js',
        tasks: ['webpack']
      }
    },
  });

  grunt.registerTask('serve-web', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open:dist', 'connect:dist']);
    }

    grunt.task.run([
      'open:dev',
      'webpack-dev-server'
    ]);
  });

  grunt.registerTask('build', ['clean', 'copy', 'webpack']);
  grunt.registerTask('default', []);
};
