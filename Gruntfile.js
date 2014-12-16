module.exports = function (grunt) {
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		// UGLIFY
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
				beautify: false, 
				preserveComments: false 
			},
			build: {
			    src: 'js/main.js', 
				dest: 'build/js/main.min.js'
			}
		}, 


		// CSS MINIFY 
		cssmin: {
		  minify: {
		    expand: true,
		    cwd: 'build/css/',
		    src: ['*.css', '!*.min.css'],
		    dest: 'build/css/',
		    ext: '.min.css'
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.registerTask('default',['uglify', 'cssmin']);
};