// create a function that will take a string and reveal it letter by letter, it has a param of the percentage in decimal to reveal
export function typewriter(string, percentage) {
  // get the length of the string
  const length = string.length * percentage
  // get the number of characters to reveal
  const reveal = Math.floor(length * percentage)
  // return the string sliced to the number of characters to reveal
  return string.slice(0, reveal)
}
