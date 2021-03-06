/**
 * @author 5antos#4876
 * @param {number} number Number to abbreviate
 * @param {number} [precision=2] Number of decimal digits to be displayed
 * @returns {string} Abbreviated number
 */

function abbreviateNumber(number, precision=2) {
  const suffsFromZeros = { 0:'', 3:'k', 6:'M', 9:'G', 12:'T' }
  const { length } = number.toString()
  const lengthThird = length%3
  const divDigits = length-(lengthThird || lengthThird+3)
  const calc = ''+(number/(10**divDigits)).toFixed(precision)

  return number < 1000 ? ''+number : (calc.indexOf('.') === calc.length-3 ? calc.replace(/\.00/, '') : calc)+suffsFromZeros[divDigits]
}


// Example Outputs:

abbreviateNumber(30600000)       // 30.60M
abbreviateNumber(500)            // 500
abbreviateNumber(175050)         // 175.05k
abbreviateNumber(5006500000)     // 5.01G
abbreviateNumber(5006600000, 3)  // 5.007G
abbreviateNumber(15000)          // 15k
