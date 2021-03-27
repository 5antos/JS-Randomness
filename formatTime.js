/**
 * @author 5antos#4876
 * @param {object} time Object returned from the convertMilliseconds function (available in this repository)
 * @param {string} format Format to display
 * @param {boolean} [twoDigits=true] Whether or not to add zeros on the left of a number if it's lower than 10
 * @returns {string} Formatted string
 */

function formatTime(time, format, twoDigits=true) {
  const formats = { YY: 'years', MM: 'months', dd:'days', hh:'hours', mm:'minutes', ss:'seconds' }

  return format.replace(/YY|MM|dd|hh|mm|ss/g, match => time[formats[match]].toString().padStart(twoDigits ? 2 : 0, '0'))
}


// Example Outputs:

formatTime({ years: 1, months: 3, days: 0, hours: 2, minutes: 39, seconds: 48 }, 'YY year, MM months, dd days, hh hours, mm minutes and ss seconds', false) // 1 year, 3 months, 0 days, 2 hours, 39 minutes and 48 seconds
formatTime(convertMilliseconds(1020000), 'dd:hh:mm:ss', false) // 0:0:17:0
formatTime(convertMilliseconds(74000), 'dd:hh:mm:ss') // 00:00:01:14
