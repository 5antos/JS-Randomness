/**
 * Random value between two numbers
 * 
 * @author Cookiee#8805
 * @returns {number} Random number generated
 * @param {number} minValue
 * @param {number} maxValue
 */

 function valueBetween (minValue, maxValue) {
    const max = maxValue - minValue
    return Math.floor(Math.random() * max) + minValue
    
}

// Example Outputs:

valueBetween(2, 4) // Always 2 or 3
valueBetween(25, 100) // Number between 25 and 100 (min value 25 and max will be 99)