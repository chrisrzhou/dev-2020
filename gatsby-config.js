const remarkSlug = require('remark-slug');

require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        remarkPlugins: [remarkSlug],
      },
    },
    'gatsby-plugin-theme-ui',
  ],
};
