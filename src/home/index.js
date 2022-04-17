require('./style.scss')

const html = require('./index.html')

const home = document.createElement('div')

home.innerHTML = html

module.exports = home
