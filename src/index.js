require('./style.sass')

const body = document.querySelector('body')

const main = document.querySelector('main')

const toolbar = require('./index.html')

body.innerHTML = toolbar

const navbar = require('./navbar/index')

// display by default the homepage
document.getElementById('home').click()
