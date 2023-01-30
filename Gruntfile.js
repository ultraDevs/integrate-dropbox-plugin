module.exports = function(grunt) {
	const pkg = grunt.file.readJSON('package.json');
	const pluginName = 'Integrate Dropbox';
	const pluginSlug = pkg.name;
	const pluginDesc = pkg.description;
	const pluginConst = pkg.name.toUpperCase().replace( /-/g, '_' );
	const pluginFName = pkg.name.replace( /-/g, '_' );
	const pluginNameSpace = 'ultraDevs\IntegrateDropbox';
	const pluginPName = pkg.name.split('-').map(word => word.charAt(0).toUpperCase() + word.substring(1) ).join('');

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
                    exclude: [ 'vendor/*', 'build/.*', 'node_modules/*', 'assets/*', 'src/*'],
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
				'assets/js/*.js',
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
					'assets/js/frontend.min.js' : 'assets/js/frontend.min.js',
					'assets/js/admin.min.js' : 'assets/js/admin.min.js',
					'assets/js/editor.min.js' : 'assets/js/editor.min.js',
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
					'assets/js/frontend.min.js' : 'assets/js/frontend.min.js',
					'assets/js/editor.min.js' : 'assets/js/editor.min.js',
					'assets/js/admin.min.js' : 'assets/js/admin.min.js',
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
					cwd: 'assets/sass',
					src: [
						'*.scss'
					],
					dest: 'assets/css',
					ext: '.min.css'
				}],
			},
			dev: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: 'assets/sass',
					src: [
						'*.scss'
					],
					dest: 'assets/css',
					ext: '.css'
				}]
			}
		},
		autoprefixer:{
			dist:{
				files:{
					'assets/css/admin.min.css':'assets/css/admin.min.css',
					'assets/css/editor.common.css':'assets/css/editor.common.min.css',
					'assets/css/frontend.min.css':'assets/css/frontend.min.css',
				}
			}
		},
		watch: {
			css: {
				files: 'assets/sass/*.scss',
				tasks: [ 'sass', 'autoprefixer' ]
			},
			scripts: {
				files: ['assets/js/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				},
			},
		},

		rename: {
			main: {
				files: [
					{
						src: [ 'sticky-list.php' ],
						dest: pluginSlug + '.php'
					},
				]
			}
		},

		replace: {
			main: {
				src: [
					'*.php',
					'**/*.php',
					'!node_modules/**',
					'!vendor/**',
					'!languages/**',
					'!build/**'
				],
				// dest: 'build/text/',
				overwrite: true,
				replacements: [
					{
						from: /(Version:\s+)(\d+(\.\d+){0,3})([^\n^\.\d]?.*?)(\n)/,
						to: 'Version: <%= pkg.version %>\n'
					},
					{
						from: 'Sticky List',
						to: pluginName
					},
					{
						from: 'Sticky List Description',
						to: pluginDesc
					},
					{
						from: 'STICKY_LIST',
						to: pluginConst
					},
					{
						from: 'ultraDevs\IntegrateDropbox',
						to: pluginNameSpace
					},
					{
						from: 'sticky_list',
						to: pluginFName
					},
					{
						from: 'StickyList',
						to: pluginPName
					},
					{
						from: 'sticky-list',
						to: pluginSlug
					},
					{
						from: 'sticky_list',
						to: pluginFName
					},
					{
						from: 'bdpg',
						to: pluginFName
					}
				]
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
                    '!package.json',
					'!readme.md',
					'!codesniffer.ruleset.xml',
					'!ruleset.xml',
                    '!composer.json',
                    '!composer.lock',
                    '!package-lock.json',
                    '!phpcs.xml.dist',
                    '!phpcs.xml',
                    '!node_modules/**',
                    '!.git/**',
                    '!bin/**',
					'!src/**',
					'!.dev/**',
					'!build/**',
					'!assets/*.scss',
					'!assets/**/*.map',
					'!assets/**/*.asset.php',
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

	grunt.loadNpmTasks( 'grunt-text-replace' );
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
    grunt.registerTask( 'replaceText', [ 'rename', 'replace' ] );
	grunt.registerTask( 'readme', [ 'wp_readme_to_markdown' ] );
	// grunt.registerTask( 'watch', [
	// 	'watch'
	// ]);
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