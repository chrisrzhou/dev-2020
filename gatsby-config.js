require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/ui/layout.js'),
        },
        extensions: ['.md', '.mdx'],
      },
    },
    'gatsby-plugin-theme-ui',
  ],
};
