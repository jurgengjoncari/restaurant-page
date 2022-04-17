require('./style.sass')

const home = require('../home/index')
const menu = require('../menu/index')
const contact = require('../contact/index')

const navbar = new Map([
  ['#home', home],
  ['#menu', menu],
  ['#contact', contact],
])

const main = document.querySelector('main')

// tab switching logic
navbar.forEach(function (value, id) {
  const tab = document.querySelector(id)
  tab.onclick = function () {
    main.innerHTML = value.innerHTML
    tab.classList.toggle('active')
  }
})

module.exports = navbar
