/**
 * @author 5antos#4876
 * @param {string} abbreviation Abbreviated number, such as 15k or 1.5M, for example. Returns the number itself if provided without any unit
 * @returns {number} Converted number
 */

function convertAbbreviatedNum(abbreviation) {
  const number = parseFloat(abbreviation.substr(0, abbreviation.length-1))
  const unit = abbreviation.substr(-1)
  const zeros = { k:1e3, M:1e6, G:1e9, T:1e12 } // k: thousand, M: million, G: billion, T: trillion

  return !zeros[unit] ? parseFloat(abbreviation) : number*zeros[unit]
}


// Example Outputs:

convertAbbreviatedNum('30.6M') // 30600000
convertAbbreviatedNum('5000') // 5000 
convertAbbreviatedNum('175.05k') // 175050
