/**
 * @callback cb
 * @param {number} intervalID Created interval's timer ID, useful to clear the interval when desired
 * @param {*} arrayElement Array element each cycle
 */

/**
 * @author 5antos#4876
 * @param {any[]} array Array to cycle through
 * @param {number} delay Delay, in milliseconds, between each call on an array's element
 * @param {cb} callback Function to call on each array element
 * @returns {void}
 */

function cycle(array, delay, callback) {
  let i = 0
  const interval = setInterval(() => callback(interval, array[(i++) % (array.length)]), delay)
}


// Usage Examples:

// Prints every element from the array with a delay of 1 second, cycling through
cycle([1,2,3,4,5], 1000, (_, element) => {
  console.log(element)
})

// Prints each element from the array with a delay of 3 seconds, cycling through, clearing the interval when the value 5 is found
cycle([1,2,3,4,5], 3000, (intervalID, element) => {
  if (element === 5) clearInterval(intervalID)
  console.log(element)
})
