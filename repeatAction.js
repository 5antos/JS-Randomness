/**
 * @author 5antos#4876
 * @param {number} amount Amount of times to run the callback
 * @param {function} callback Function to run every loop
 * @param {number} time Interval time, in milliseconds (defaults to 0, running every millisecond)
 * @returns {unknown}
 */

function repeatAction(amount, callback, time=0) {
  if (amount--) callback()
  if (amount > 0) return setTimeout(() => repeatAction(amount, callback, time), time)
  
  // Section for code to be executed when the action has repeated the provided amount of times
  console.log('You found a bone!')
}


// Usage Examples:

repeatAction(5, () => console.log('Digging...'), 3000)