/**
 * @author 5antos#4876
 * @param {number} number Number to abbreviate
 * @param {number} [precision=2] Number of decimal digits to be displayed
 * @returns {string} Abbreviated number
 */

function abbreviateNumber(number, precision=2) {
  return number.toLocaleString('en-US', { notation: 'compact', maximumFractionDigits: precision })
}


// Example Outputs:

console.log(abbreviateNumber(30600000))                  // 30.6M
console.log(abbreviateNumber(500))                       // 500
console.log(abbreviateNumber(175050))                    // 175.05K
console.log(abbreviateNumber(5006500000))               // 5.01B
console.log(abbreviateNumber(5006600000, 3))   // 5.007B
console.log(abbreviateNumber(15000))                     // 15k
