/**
 * @author 5antos#4876
 * @param {number} current Current progress of the bar
 * @param {number} total The value of the progress when the bar is totally filled
 * @param {number} barSize Fixed bar size
 * @returns {string} Progress bar
 */

function progressBar(current, total, barSize) {
  const progress = Math.round((barSize*current)/total)

  return '▮'.repeat(progress) + '▯'.repeat(barSize-progress)
}

function progressBarEnhanced(current, total, barSize) {
  const progress = Math.round((barSize*current)/total)

  return '—'.repeat(progress > 0 ? progress-1 : progress) + '•' + '-'.repeat(barSize-progress)
}


// Example Outputs:

progressBar(50, 100, 10)              // ▮▮▮▮▮▯▯▯▯▯
progressBar(100, 1000, 10)            // ▮▯▯▯▯▯▯▯▯▯
progressBar(20, 20, 5)                // ▮▮▮▮▮

progressBarEnhanced(50, 100, 10)      // ————•-----
progressBarEnhanced(100, 1000, 10)    // •---------
progressBarEnhanced(20, 20, 5)        // ————•
