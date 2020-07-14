function render(input) {
  return `<label for="${input.for}" class="screen-reader-text">${input.label}</label>
    <input type="${input.type}" id="${input.for}" placeholder="${input.label}" ${input.readonly}></input>`
}

export default (prop) => render(prop)
