import { Name, RandomButton, RandomName, SubmitButton } from './components'

const props = {
  Button: [
    {
      type: 'submit',
      text: 'Add Student',
      class: 'add-btn'
    },
    {
      type: 'button',
      text: 'Random Student',
      class: 'giant-btn'
    }
  ],
  Input: [
    {
      label: 'Name',
      for: 'name',
      type: 'text'
    },
    {
      label: '(Random Student)',
      for: 'random',
      type: 'text'
    }
  ]
}

function render() {
  document.querySelector('#root').innerHTML = `
    <form>
      ${Name()}
      ${SubmitButton()}
      ${RandomName()}
      ${RandomButton()}
    </form>
  `

  const students = []
  const inputName = document.querySelector('#name')
  const addBtn = document.querySelector('.add-btn')
  const randomName = document.querySelector('#random')
  const giantBtn = document.querySelector('.giant-btn')

  /**
   * Getting a random integer between two values, inclusive (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
  }

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    // Get student name entered
    const enteredStudent = inputName.value
    // Check if student is in array
    const exists = students.find(student => student === enteredStudent)
    // If 'student' is NOT in array already push
    if (exists === undefined) {
      students.push(enteredStudent)
    }
    // Clear input field
    inputName.value = ''
  })

  giantBtn.addEventListener('click', () => {
    // Randomly generate a number
    const randInt = getRandomIntInclusive(0, students.length - 1)

    // If Students have been entered render text with student name using random number
    if (students.length !== 0) {
      randomName.value = students[randInt]
    } else {
      randomName.value = 'No Students yet!'
    }
  })

}

render()