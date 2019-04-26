const staticPages = ['index', 'about'];

const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source => {
  const directoryPaths = readdirSync(source).map(name => join(source, name)).filter(isDirectory);
  const result = [];
  directoryPaths.forEach((item) => {
    result.push(item.split('/')[1]);
  })
  staticPages.forEach((item) => {
    const index = result.indexOf(item);
    result.splice(index, 1);
  });
  return result;
}

const withSass = require('@zeit/next-sass')

const config = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              publicPath: (url, resourcePath, context) => {
                return `/_next/static/images/${url}`;
              },
              outputPath: `${isServer ? "../" : ""}static/images/`,
            },
          },
        ]
      }
    )

    return config
  },

  exportPathMap: function () {
    const dynamicPages = {};
    const directoryList = getDirectories("./posts");
    // console.log(directoryList)
    directoryList.forEach((item) => {
      dynamicPages[`/f/${item}`] = { page: '/food', query: { 'id': item } }
    })
    const fixedPages = {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
    const cache = Object.assign({}, dynamicPages, fixedPages);
    // console.log(cache)
    return cache;
  }
}

module.exports = withSass(config);