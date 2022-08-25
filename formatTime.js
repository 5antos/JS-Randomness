/**
 * @author 5antos#4876
 * @param {object} time Object returned from the convertMilliseconds function (available in this repository) or equivalent
 * @param {string} [format="dd:hh:mm:ss"] Format to display
 * @returns {string} Formatted string
 */

function formatTime(time, format='dd:hh:mm:ss') {
  const formats = { dd:'days', hh:'hours', mm:'minutes', ss:'seconds' }
  
  const newFormat = format
    .replace(/dd|hh|mm|ss/g, match => time[formats[match]].toString().padStart(2, '0'))
    .replace(/^(00:)+/g, '')

  return newFormat.length > 2 ? newFormat : '00:'+newFormat
}

function autoFormatTime(time) {
  return Object.entries(time)
    .filter(e => e[1])
    .map(e => ([e[0].slice(0, -1).padEnd(e[1] > 1 ? e[0].length : 0, 's'), e[1]]))
    .map((e,i,a) => (i === a.length-1 && a.length > 1) ? `and ${e[1]} ${e[0]}` : (i === a.length-2 || a.length === 1) ? `${e[1]} ${e[0]}` : `${e[1]} ${e[0]},`)
    .join(' ')
    || '0 seconds'
}


// Example Outputs:

formatTime(convertMilliseconds(1_020_000)) // 17:00
formatTime(convertMilliseconds(6_350_676)) // 01:45:50
formatTime(convertMilliseconds(5_278_988_000), 'dd days, hh:mm:ss') // 61 days, 02:23:08
formatTime({ days: 0, hours: 8, minutes: 0, seconds: 15 }) // 08:00:15

autoFormatTime(convertMilliseconds(104_490_000)) // 1 day, 5 hours, 1 minute and 30 seconds
autoFormatTime(convertMilliseconds(0)) // 0 seconds
autoFormatTime({ days: 0, hours: 1, minutes: 30, seconds: 0 }) // 1 hour and 30 minutes
autoFormatTime({ days: 14, hours: 8, minutes: 0, seconds: 1 }) // 14 days, 8 hours and 1 second
