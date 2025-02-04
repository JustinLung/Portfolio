import postcssPresetEnv from 'postcss-preset-env';
import postcssGlobalData from '@csstools/postcss-global-data';
import autoprefixer from 'autoprefixer';
import pluginHover from 'postcss-plugin-hover';

/** @type {import('postcss-preset-env').Config} */
const config = {
	plugins: [
		pluginHover(),
		autoprefixer(),
		postcssGlobalData({
			files: ['src/lib/css/media.css']
		}),
		postcssPresetEnv({
			stage: 4,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			},
			browsers: 'last 2 versions'
		})
	]
};

export default config;
