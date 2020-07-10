const students = []
const input = document.querySelector('input')

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
  const enteredStudent = input.value
  // Check if student is in array
  const exists = students.find(student => student === enteredStudent)
  // If 'student' is NOT in array already push
  if (exists === undefined) {
    students.push(enteredStudent)
  }
  // Clear input field
  input.value = ''
})

document.querySelector('.giant-btn').addEventListener('click', () => {
  // Randomly generate a number
  const randInt = getRandomIntInclusive(0, students.length - 1)
  // Log student using random number
  console.log(students[randInt])
})
