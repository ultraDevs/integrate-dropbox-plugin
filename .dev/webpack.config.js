const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const postcssConfig = require( './postcss.config' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const RtlCssPlugin = require( 'rtlcss-webpack-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const nodeSassGlobImporter = require( 'node-sass-glob-importer' );

const isProduction = process.env.NODE_ENV === 'production';


module.exports = {
	...defaultConfig,

	entry: {
		// 'pb-blocks-editor': path.resolve( process.cwd(), 'src/index.js' ),
		'ud-id-admin-settings': path.resolve( process.cwd(), 'src/settings/index.js' ),
		'admin-settings': path.resolve( process.cwd(), 'src/settings/scss/admin.scss' ),

		// 'admin': path.resolve( process.cwd(), 'src/index.js' ),
		// 'frontend': path.resolve( process.cwd(), 'src/js/frontend.js' ),
		// 'pb-editor-common': path.resolve( process.cwd(), 'src/scss/editor.scss' ),
		// 'frontend': path.resolve( process.cwd(), 'src/scss/frontend.scss' ),
	},

	output: {
		filename: 'js/[name].js',
		path: path.resolve( process.cwd(), 'assets/' ),
	},

	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,

			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							...postcssConfig,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: ! isProduction,
							sassOptions: {
								importer: nodeSassGlobImporter(),
							},
						},
					},
				],
			},
		],
	},

	stats: {
		...defaultConfig.stats,
		modules: false,
		warnings: false,
	},

	plugins: [
		...defaultConfig.plugins,

		new FixStyleOnlyEntriesPlugin(),
		new MiniCssExtractPlugin( {
			filename: 'css/[name].min.css',
		} ),
		// new RtlCssPlugin( {
		// 	filename: 'css/[name]-rtl.css',
		// } ),
	],
};
