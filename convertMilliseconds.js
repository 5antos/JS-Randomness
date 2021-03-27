/**
 * @author 5antos#4876
 * @param {number} ms Time value in milliseconds
 * @returns {object} Object with the converted time in years, months, days, hours, minutes and seconds
 * @note Years and months are not 100% accurate due to the existence of months with 28, 29, 30 and 31 days and years with 365 and 366 days
 */

function convertMilliseconds(ms) {
  const seconds = ~~(ms/1000)
  const minutes = ~~(seconds/60)
  const hours = ~~(minutes/60)
  const days = ~~(hours/24)

  return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }
}

function convertMillisecondsEnhanced(ms) {
  const seconds = ~~(ms/1000)
  const minutes = ~~(seconds/60)
  const hours = ~~(minutes/60)
  const days = ~~(hours/24)
  const months = ~~(days/30)
  const years = ~~(days/365)

  return { years, months: months%12 , days: days%30, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }
}


// Example Outputs:

convertMilliseconds(527988000) // { days: 6, hours: 2, minutes: 39, seconds: 48 }
convertMilliseconds(1020000) // { days: 0, hours: 0, minutes: 17, seconds: 0 }
convertMilliseconds(1.45e10) // { days: 167, hours: 19, minutes: 46, seconds: 40 }
convertMilliseconds(1.42006167e12) // { days: 16435, hours: 21, minutes: 34, seconds: 30 }

convertMillisecondsEnhanced(527988000) // { years: 0, months: 0, days: 6, hours: 2, minutes: 39, seconds: 48 }
convertMillisecondsEnhanced(1020000) // { years: 0, months: 0, days: 0, hours: 0, minutes: 17, seconds: 0 }
convertMillisecondsEnhanced(1.45e10) // { years: 0, months: 5, days: 17, hours: 19, minutes: 46, seconds: 40 }
convertMillisecondsEnhanced(1.42006167e12) // { years: 45, months: 7, days: 25, hours: 21, minutes: 34, seconds: 30 }