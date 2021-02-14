/**
 * @author 5antos#4876
 * @returns {object} Object with a random color's code in HEX, RGB and decimal formats
 */

function randomColor() {
  const [R,G,B] = [~~(Math.random()*255), ~~(Math.random()*255), ~~(Math.random()*255)]
  const HEX = '#' + ((1<<24) + (R<<16) + (G<<8) + B).toString(16).slice(1)
  const decimal = (R<<16) + (G<<8) + B

  return { RGB: [R,G,B], HEX, decimal }
}


// Example Output:

randomColor() // { RGB: [ 254, 219, 104 ], HEX: '#fedb68', decimal: 16702312 }