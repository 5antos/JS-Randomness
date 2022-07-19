/**
 * The checkSimilarity function can be found in this repository (https://github.com/5antos/JS-Randomness/blob/master/stringSimilarity.js).
 * You can also write your own checkSimilarity function, just make sure that the function's return type should be a number between 0 and 1
 * @author 5antos#4876
 * @param {string} str Input string
 * @param {string[]} array Array of strings corresponding to potential matches
 * @param {number} [threshold=60] This function will only consider strings with similarity values of <threshold>% or more. Defaults to 60% (recommended)
 * @returns {string|null} String most similar to the input string. Returns null if no string is found according to the threshold value
 */

function didYouMean(str, array, threshold=60) {
  const acceptable = array
    .map(e => { return {e, v: checkSimilarity(str, e)} })
    .filter(({v}) => v >= threshold/100)

  return !acceptable.length ? null : acceptable.reduce((acc, curr) => curr.v > acc.v ? curr : acc).e
}


// Example Outputs:

didYouMean('hekp', ['goodbye', 'hello', 'help']) // help
didYouMean('dodgeball', ['pencil', 'avocado', 'supermarket']) // null
didYouMean('intsagrm', ['facebook', 'instagram', 'twitter', 'linkedin', 'github']) // instagram
