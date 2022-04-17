module.exports = function append(container, type, text) {
  const element = document.createElement(type)
  element.textContent = text
  container.append(element)
}
