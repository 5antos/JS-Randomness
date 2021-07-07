/**
 * This method comes handy when you need to create time outs with a duration bigger than the maximum allowed
 * duration of the NodeJS in-built method setTimeout (2147483647 = (2^31)-1)
 * 
 * @author 5antos#4876
 * @param {function} callback Function to run when the timer ends
 * @param {number} ms Time value in milliseconds (timer)
 * @returns {void}
 */

function extendedSetTimeout(callback, ms) {
  const biggestInt = (2**31)-1
  const max = ms > biggestInt ? biggestInt : ms

  setTimeout(() => ms > max ? extendedSetTimeout(callback, ms - max) : callback(), max)
}


// Example Outputs (extendedSetTimeout VS setTimeout):

extendedSetTimeout(() => console.log('5 years later!'), 1.5778463e11) // [👍] Outputs '5 years later!' after 5 years... if your application remained online the entire time
setTimeout(() => console.log('5 years later?'),         1.5778463e11) // [👎] Outputs a warning because the provided duration exceeds the maximum allowed duration