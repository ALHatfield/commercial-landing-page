// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function (grunt) {
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({
    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON("package.json"),
    assemble: {
      options: {
        // assets: 'assets',    ??
        // plugins: ['permalinks'],     ??
        partials: ["src/templates/partials/*.hbs"],
        data: ["src/data/*.{json,yml}"],
        layoutdir: "src/templates/layouts",
        layout: ["default.hbs"],
      },
      site: {
        src: ['**/*.hbs'],
        dest: 'build/index'
      },
    },
    clean: {
      default: {
        src: "build/*",
      },
    },
    copy: {
      default: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: "src/scripts",
            src: "**",
            dest: "build/",
          },
          {
            expand: true,
            flatten: true,
            cwd: "src/images",
            src: "**",
            dest: "build/",
          },
        ],
      },
    },
    "dart-sass": {
      target: {
        options: {
          sourcemap: "none",
          outputStyle: "compressed",
        },
        files: [
          {
            expand: true,
            cwd: "src/scss/",
            src: ["*.scss"],
            dest: "build/",
            ext: ".css",
          },
        ],
      },
    },
    watch: {
      all: {
        files: ["src/**/*"],
        tasks: [
          "clean:default",
          "copy:default",
          "assemble",
          "dart-sass",
          "watch:all",
        ],
        // options: {
        //   livereload: true,  //not working
        // },
      },
    },
    // open: {
    //   dev: {
    //     path: "http://127.0.0.1:8888/build",
    //     app: "Firefox",
    //   },
    // },
    // serve: {
    //   options: {
    //     port: 9000,
    //   },
    // },
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks("grunt-assemble");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-dart-sass");
  grunt.loadNpmTasks("grunt-serve");

  // Register task default to grunt
  grunt.registerTask("default", [ "clean:default", "copy:default", "assemble", "dart-sass", "watch:all"]);
};
