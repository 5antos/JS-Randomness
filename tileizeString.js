/**
 * @author 5antos#4876
 * @param {string} str String to tileize
 * @returns {string} Tileized string
 */

function tileize(str) {
  return str.toLowerCase().replace(/(\s|^)\w/g, m => m.toUpperCase())
}


// Example Outputs:

tileize('hEy thEre')                             // Hey There
tileize('thIS iS A mIXeD capITalIzEd STriNG')    // This Is A Mixed Capitalized String
tileize('HELLO WORLD')                           // Hello World
