require('./style.sass')

const home = require('../home/index')
const menu = require('../menu/index')
const contact = require('../contact/index')

const navbar = new Map([
  ['#home', home],
  ['#menu', menu],
  ['#contact', contact],
])

const content = document.querySelector('#content')

// tab switching logic
navbar.forEach(function (value, id) {
  const tab = document.querySelector(id)
  tab.onclick = function () {
    content.innerHTML = value.innerHTML
  }
})

module.exports = navbar
