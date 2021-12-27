// const menu = require('./menu.json')
const menu = require('./menu.yaml')
const append = require('../append')

const div = document.createElement('div')

const dl = document.createElement('dl')

for (const [dish, price] of Object.entries(menu)) {
  append(dl, 'dt', dish)
  append(dl, 'dd', price)
}

div.append(dl)

module.exports = div
