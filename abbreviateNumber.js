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

abbreviateNumber(30600000)                  // 30.60M
abbreviateNumber(500)                       // 500
abbreviateNumber(175050)                    // 175.05K
abbreviateNumber(5006500000)                // 5.01B
abbreviateNumber(5006600000, 3)             // 5.007B
abbreviateNumber(15000)                     // 15K
