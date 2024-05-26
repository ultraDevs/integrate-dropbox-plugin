module.exports = function(grunt) {
	const pkg = grunt.file.readJSON('package.json');
	const pluginSlug = pkg.name;

	const buildPath = 'build/' + pluginSlug + '/';

	grunt.initConfig({
		pkg: pkg,
		wp_readme_to_markdown: {
            pb: {
                files: {
                    'readme.md': 'readme.txt'
                }
            },
		},
		// Generate POT files.
        makepot: {
            target: {
                options: {
                    exclude: [ 'vendor/*', 'vendors/*', 'build/.*', 'node_modules/*', 'assets/*' ],
                    mainFile: pkg.main,
                    domainPath: '/languages/',
                    potFilename: pkg.name + '.pot',
                    type: 'wp-plugin',
                    updateTimestamp: true,
                    potHeaders: {
                        'report-msgid-bugs-to': 'https://www.ultradevs.com/contact',
                        'language-team': 'LANGUAGE <EMAIL@ADDRESS>',
                        poedit: true,
                        'x-poedit-keywordslist': true
                    }
                }
            }
        },
		jshint: {
			files: [
				'assets/frontend/js/*.js',
			],
			options: {
				expr: true,
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		uglify: {
			dist: {
				options: {
					banner: '/*! <%= pkg.name %> <%= pkg.version %> filename.min.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
					report: 'gzip'
				},
				files: {
					'assets/frontend/js/frontend.min.js' : 'assets/frontend/js/frontend.min.js',
					'assets/frontend/js/admin.min.js' : 'assets/frontend/js/admin.min.js',
					'assets/frontend/js/editor.min.js' : 'assets/frontend/js/editor.min.js',
				}
			},
			dev: {
				options: {
					banner: '/*! <%= pkg.name %> <%= pkg.version %> filename.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
					beautify: true,
					compress: false,
					mangle: false
				},
				files: {
					'assets/frontend/js/frontend.min.js' : 'assets/frontend/js/frontend.min.js',
					'assets/frontend/js/editor.min.js' : 'assets/frontend/js/editor.min.js',
					'assets/frontend/js/admin.min.js' : 'assets/frontend/js/admin.min.js',
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'assets/frontend/scss',
					src: [
						'*.scss'
					],
					dest: 'assets/frontend/css',
					ext: '.min.css'
				}],
			},
			dev: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: 'assets/frontend/scss',
					src: [
						'*.scss'
					],
					dest: 'assets/frontend/css',
					ext: '.css'
				}]
			}
		},
		watch: {
			css: {
				files: 'assets/frontend/scss/*.scss',
				tasks: [ 'sass', 'autoprefixer' ]
			},
			scripts: {
				files: ['assets/frontend/js/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				},
			},
		},


		copy: {
            main: {
                expand: true,
                src: [
					'**',
					'!.gitignore',
					'!.gitattributes',
					'!.editorconfig',
					'!.jshintrc',
					'!.stylelintrc',
					'!*.sh',
					'!*.map',
					'!*.zip',
                    '!Gruntfile.js',
					'!/app/AuthorizeApp.php',
                    // '!package.json',
					'!readme.md',
					'!codesniffer.ruleset.xml',
					'!ruleset.xml',
                    '!composer.lock',
                    '!package-lock.json',
                    '!phpcs.xml.dist',
                    '!node_modules/**',
                    '!.git/**',
                    '!bin/**',
					'!src/**',
					'!.dev/**',
					'!build/**',
					// '!assets/*.scss',
					'!assets/**/*.map',
					'!*~',
					'!cmnd.txt',
					'!yarn.lock',
                ],
                dest: buildPath
            }
		},

		compress: {
            main: {
                options: {
                    archive: pluginSlug + '.zip',
                    mode: 'zip'
                },
                files: [
                    {
						cwd: 'build/',
						expand: true,
                        src: [
                            '**'
                        ]
                    }
                ]
			},
		},

		clean: {
            main: [ 'build' ],
            zip: [ '*.zip' ]
        },
		
	});

	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-compress' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-wp-readme-to-markdown' );
	grunt.loadNpmTasks( 'grunt-contrib-rename' );

    grunt.registerTask( 'i18n', [ 'makepot' ] );
	grunt.registerTask( 'readme', [ 'wp_readme_to_markdown' ] );
	grunt.registerTask( 'watch', [
		'watch'
	]);
	grunt.registerTask( 'dev', [
		'jshint',
		'uglify:dev',
		'sass:dev',
		'watch'
	]);
	grunt.registerTask( 'default', [
		'jshint',
		'uglify:dev',
		'uglify:dist',
		'sass:dev',
		'sass:dist',
		'makepot',
		'readme',
		'watch'
	]);
	grunt.registerTask('release', [
		'makepot',
		'readme',
		'clean:zip',
		'copy:main',
		'compress:main',
		'clean:main'
	]);

};