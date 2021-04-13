/**
 * This method is inspired by a funny "algorithm" found in a video (https://i.imgur.com/TOgyKmM.mp4).
 * @author 5antos#4876
 * @param {string} name1 First person's name
 * @param {string} name2 Second person's name
 * @returns {number} Love percentage
 */

 function getLovePercentage(name1, name2) {
  let concat = [name1, name2].sort((a,b) => a.localeCompare(b)).join('').toLowerCase()
  let counter = ''
  while(concat.length) {
    counter += concat.match(new RegExp(concat[0], 'gi')).length
    concat = concat.split('').filter(c => c !== concat[0]).join('')
  }
  return +_reduce(counter)
}

function _reduce(counter) {
  let result = ''
  while(counter.length >= 2) {
    result += (+counter[0] + (+counter[counter.length-1]))
    counter = counter.substring(1, counter.length-1)
  }
  result += counter
  return result <= 100 ? result : _reduce(result)
}


// Example Outputs:

getLovePercentage('Rose', 'Jack')          // 44
getLovePercentage('Peter', 'Catherine')    // 95
getLovePercentage('Melman', 'Gloria')      // 66
getLovePercentage('Fiona', 'Shrek')        // 64
