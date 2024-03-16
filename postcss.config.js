const path = require('path');

module.exports = {
  plugins: [
    'postcss-nested',
    path.resolve(__dirname, 'postcss-util-hover'),
    'postcss-utilities',
    'postcss-custom-media',
    ['@csstools/postcss-global-data', { files: ['src/styles/_media.css'] }],
    [
      'postcss-preset-env',
      {
        stage: 4,
        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
          'media-query-ranges': true,
        },
        browsers: 'last 2 versions',
      },
    ],
  ],
};
