/**
 * @author 5antos#4876
 * @param {Number} ms Time value in milliseconds
 * @returns {Object} Object with the converted time in days, hours, minutes and seconds
 */

function convertMilliseconds(ms) {
  const seconds = ~~(ms/1000)
  const minutes = ~~(seconds/60)
  const hours = ~~(minutes/60)
  const days = ~~(hours/24)

  return { days, hours: ~~(hours%24), minutes: ~~(minutes%60), seconds: ~~(seconds%60) }
}


// Example Outputs:

convertMilliseconds(527988000) // { days: 6, hours: 2, minutes: 39, seconds: 48 }
convertMilliseconds(1020000) // { days: 0, hours: 0, minutes: 17, seconds: 0 }
convertMilliseconds(74000) // { days: 0, hours: 0, minutes: 1, seconds: 14 }
