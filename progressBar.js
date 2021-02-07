/**
 * @param {Number} current Current progress of the bar
 * @param {Number} total The value of the progress when the bar is totally filled
 * @param {Number} barSize Fixed bar size
 * @returns {String} Progress bar
 */

function progressBar(current, total, barSize) {
  const progress = Math.round((barSize*current)/total)
  const emptyProgress = barSize - progress

  const filled = `▮`.repeat(progress)
  const notFilled = `▯`.repeat(emptyProgress)

  return filled + notFilled
}


// Example Outputs:

progressBar(50, 100, 10) // ▮▮▮▮▮▯▯▯▯▯
progressBar(100, 1000, 10) // ▮▯▯▯▯▯▯▯▯▯
progressBar(20, 20, 5) // ▮▮▮▮▮
