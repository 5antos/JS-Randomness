/**
 * @author 5antos#4876
 * @param {number} amount Amount of times to run the callback
 * @param {function} callback Function to run every loop
 * @param {function} finishCallback Function to run after running all loops
 * @param {number} time Interval time, in milliseconds (defaults to 0, running every millisecond)
 * @returns {unknown}
 */

function repeatAction(amount, callback, finishCallback, time=0) {
  if (amount--) callback()
  if (amount > 0) return setTimeout(() => repeatAction(amount, callback, finishCallback, time), time)
  
  // Section for code to be executed when the action has repeated the provided amount of times
  finishCallback()
}


// Usage Examples:

repeatAction(
  5,
  () => console.log('Digging...'),
  () => console.log('You found a bone!')
  3000
)
