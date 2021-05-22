/**
 * @author 5antos#4876
 * @param {number} num Number to convert to fraction
 * @param {number} [epsilon=1e-7] Conversion error (for irrational numbers). The smaller this value is, the more precise the result will be
 * @returns {string} Closest fraction for the the provided number
 */

function toFraction(num, epsilon=1e-7) {
  let signal = 1
  if (num < 0) num=-num, signal=-1

  let numerator, denominator, n, d, a=Math.trunc(num)
  let r=num-a, y, ratio, error
  const p=[1, a], q=[0, 1]

  if (r !== 0) y=1/r
  else return `${a*signal}/1`

  for(;;) {
    a=Math.trunc(y), n=p.shift()+a*p[0], d=q.shift()+a*q[0]
    ratio=n/d, error=Math.abs(num-ratio)
    
    if (error < epsilon) {
      numerator=n*signal, denominator=d
      break
    }

    r=y-a, y=1/r

    p.push(n)
    q.push(d)
  }

  return `${numerator}/${denominator}`
}


// Example Outputs:

console.log(toFraction(1.25))             // 5/4
console.log(toFraction(-1.25))            // -5/4
console.log(toFraction(1.125))            // 9/8
console.log(toFraction(Math.PI))          // 103993/33102
console.log(toFraction(Math.PI, 1e-10))   // 312689/99532
