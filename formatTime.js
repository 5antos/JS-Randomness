/**
 * @author 5antos#4876
 * @param {object} time Object returned from the convertMilliseconds function (available in this repository) or equal
 * @param {string} format Format to display
 * @param {boolean} [twoDigits=true] Whether or not to add zeros on the left of a number if it's lower than 10
 * @returns {string} Formatted string
 */

function formatTime(time, format, twoDigits=true) {
  const formats = { dd:'days', hh:'hours', mm:'minutes', ss:'seconds' }

  return format.replace(/dd|hh|mm|ss/g, match => time[formats[match]].toString().padStart(twoDigits ? 2 : 0, '0'))
}

function autoFormatTime(time) {
  return Object.entries(time)
    .filter(e => e[1])
    .map(e => ([e[0].slice(0, -1).padEnd(e[1] > 1 ? e[0].length : 0, 's'), e[1]]))
    .map((e,i,arr) => (i === arr.length-1 && arr.length > 1) ? `and ${e[1]} ${e[0]}` : (i === arr.length-2 || arr.length === 1) ? `${e[1]} ${e[0]}` : `${e[1]} ${e[0]},`)
    .join(' ')
    || '0 seconds'
}


// Example Outputs:

formatTime({ days: 0, hours: 2, minutes: 39, seconds: 48 }, 'dd day(s), hh hour(s), mm minute(s), ss second(s)', false) // 0 day(s), 2 hour(s), 39 minute(s), 48 second(s)
formatTime(convertMilliseconds(1020000), 'dd:hh:mm:ss', false) // 0:0:17:0
formatTime(convertMilliseconds(74000), 'hh:mm:ss') // 00:01:14

autoFormatTime({ days: 0, hours: 1, minutes: 30, seconds: 0 }) // 1 hour and 30 minutes
autoFormatTime(convertMilliseconds(104_490_000)) // 1 day, 5 hours, 1 minute and 30 seconds
autoFormatTime({ days: 14, hours: 8, minutes: 0, seconds: 1 }) // 14 days, 8 hours and 1 second
autoFormatTime(convertMilliseconds(0)) // 0 seconds