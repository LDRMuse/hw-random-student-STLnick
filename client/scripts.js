const students = []

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

// TODO: Upon clicking your 'giant button', use 'getRandomIntInclusive' to randomly pick a student from your Array. You can just log that for now.