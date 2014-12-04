module.exports = function (grunt) {
	grunt.initConfig({
		uglify: {
			build: {
			    src: 'js/*.js', 
				dest: 'build/js/*.min.js'
			}
		}, 
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