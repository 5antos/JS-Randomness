/**
 * @author 5antos#4876
 * @param {string} str Input string
 * @param {string[]} array Array of strings corresponding to potential matches
 * @param {number} threshold This function will only consider strings with similarity values of <threshold>% or more. Defaults to 60% (recommended)
 * @returns {string|null} String most similar to the input string. Returns null if no string is found according to the threshold value
 */

function didYouMean(str, array, threshold=60) {
  return array
    .map(e => { return {e, v: checkSimilarity(str, e)} }) // checkSimilarity function can be found in this repository
    .filter(({v}) => v >= threshold/100)
    .reduce((_, curr, i, arr) => arr[i].v > curr ? arr[i].v : curr.e, null)
}


// Example Outputs:

didYouMean('hekp', ['goodbye', 'hello', 'help']) // help
didYouMean('dodgeball', ['pencil', 'avocado', 'supermarket']) // null
didYouMean('intsagrm', ['facebook', 'instagram', 'twitter', 'linkedin', 'github']) // instagram
