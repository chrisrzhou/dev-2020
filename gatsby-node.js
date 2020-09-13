const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  // absolute imports alised to '~'
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  });
};
