import postcssPresetEnv from 'postcss-preset-env';
import postcssCustomMedia from 'postcss-custom-media';
import postcssGlobalData from '@csstools/postcss-global-data';

/** @type {import('postcss-preset-env').Config} */
const config = {
	plugins: [
		postcssCustomMedia,
		postcssGlobalData({
			files: ['src/lib/css/media.css']
		}),
		postcssPresetEnv({
			features: { 'nested-rules': true }
		})
	]
};

export default config;
