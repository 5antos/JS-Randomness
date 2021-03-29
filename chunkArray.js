/**
 * @author 5antos#4876
 * @param {any[]} array Array to be chunked
 * @param {number} count Length of each chunk
 * @returns {any[][]} Chunked array
 */

function chunkArray(array, count) {
  return array.reduce((acc, _, i, arr) => !(i%count) ? [...acc, arr.slice(i, i+count)] : acc, [])
}


// Example Outputs:

chunkArray([1,2,3,4,5,6,7,8,9], 3) // [ [1,2,3], [4,5,6], [7,8,9] ]
chunkArray([1,2,3,4,5,6,7,8,9], 4) // [ [1,2,3,4], [5,6,7,8], [9] ]
chunkArray([1,2,3,4,5,6,7,8,9], 5) // [ [1,2,3,4,5], [6,7,8,9] ]
