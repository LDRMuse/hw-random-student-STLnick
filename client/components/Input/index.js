function render(input) {
  return `<label for="${input.for}" class="screen-reader-text">${input.label}</label>
    <input type="${input.type}" id="${input.for}" placeholder="${input.label}" ${input.readonly}></input>`
}

export default (props) => render(props)

// <label for="random">(Random Student)</label>
// <input type="text" id="random" placeholder="(Random Student)" readonly></input>

// <label for="name" class="screen-reader-text">Name</label>
// <input id="name" type="text" placeholder="Name"></input>