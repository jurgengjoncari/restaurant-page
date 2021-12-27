const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
)

const port = 3000

app.listen(port, function () {
  console.log(`Restaurant Project app is running on http://localhost:${port}/`)
})
