/**
 * @author 5antos#4876
 * @param {string} time Time (supports different formats)
 * @returns {number|null} Provided time, converted to milliseconds. Returns null if the provided time is invalid
 * @note The provided time can be invalid if does not follow the order days-hours-minutes-seconds,
 * the used format is not included in the "formats" array, any format is provided more than once,
 * an unit's value has symbols ('.', '-', ',', etc.), hours>23, minutes>59, seconds>59 or some weird and non-sense inputs
 */

function timeToMilliseconds(time) {
  const timeUnits = time.replace(/[\d\s]/g, _ => '').toLowerCase().split('')
  const formats = ['d', 'h', 'm', 's']

  const isValid =  timeUnits.length === new Set(timeUnits).size && timeUnits.every((u, i, a) => formats.includes(u) && formats.indexOf(a[i-1]) < formats.indexOf(u))
  if (!isValid) return null

  const formatted = time.replace(/([a-zA-Z])/g, '$1 ').toLowerCase().trim().split(' ').filter(f => !!f)
  if (formatted.some(e => !/[0-9]/.test(e))) return null

  const invalid = { h:24, m:60, s:60 }
  for (const f of formatted) {
    const value = f.replace(/\D/g, '')
    const unit = f.replace(/\d/gi, '')

    if (value >= invalid[unit]) return null
  }

  const convertions = { d:86_400_000, h:3_600_000, m:60_000, s:1000 }

  return formatted.reduce((acc, curr, i, a) => acc + parseInt(curr.substring(0, curr.length-1))*convertions[curr[curr.length-1]], 0)
}


// Example Outputs:

timeToMilliseconds('1d')               // 86400000
timeToMilliseconds('12h30m')           // 45000000
timeToMilliseconds('7d 12h 50m 30s')   // 651030000
timeToMilliseconds('1d6h60s')          // null (seconds > 59)
timeToMilliseconds('2d4h3s2m')         // null (does not follow the order days-hours-minutes-seconds)
timeToMilliseconds('asfjkafi')         // null (weird and non-sense input)
timeToMilliseconds('5a20b30c')         // null (formats not included in the "formats" array)
