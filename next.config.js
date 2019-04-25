module.exports = {
  webpack: (config) => {
    // const { isServer } = option s;
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
                return `static/images/${url}`;
              },
              outputPath: `../static/images/`,
            },
          },
        ]
      }
    )

    return config
  },

  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}