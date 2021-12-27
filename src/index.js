require('./style.sass')

const body = document.getElementsByTagName('body')

const toolbar = require('./index.html')

body[0].innerHTML = toolbar

const navbar = require('./navbar/index')

// display by default the homepage
document.getElementById('home').click()
