module.exports = {
  rules: [
    {
      test: /\.js?$/,
      use: [
        'babel-loader'
      ],
      exclude: /(node_modules|public)/,
    },
    { 
      test: /\.css$/, 
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      use: [
        { loader: 'file-loader' }
      ]
    }
  ]
}
