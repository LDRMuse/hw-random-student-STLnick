import Button from './Button'
import Input from './Input'

function render(props) {
  return props.map(el => {
    return `
      ${Input(el.Input)}
      ${Button(el.Button)}
    `
  }).join('')
}

export default (props) => render(props)
