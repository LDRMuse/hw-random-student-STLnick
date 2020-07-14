function render(button) {
  return `<button type="${button.type}" class="btn ${button.class}">${button.text}</button>`
}

export default (prop) => render(prop)
