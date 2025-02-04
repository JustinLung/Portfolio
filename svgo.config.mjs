export default {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					// disable a default plugin
					cleanupIds: false,
					removeViewBox: false,
					convertColors: {
						currentColor: true
					},

					// customize the params of a default plugin
					inlineStyles: {
						onlyMatchedOnce: false
					}
				}
			}
		},
		{
			name: 'removeAttrs',
			params: {
				attrs: ['svg:class'],
				elemSeparator: ':',
				preserveCurrentColor: true
			}
		}
	]
};
