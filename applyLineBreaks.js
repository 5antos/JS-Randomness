/**
 * @author 5antos#4876
 * @param {string} string Target string
 * @param {number} maxCharLengthPerLine Maximum number of characters allowed per line
 * @returns {string} String after all line breaks applied
 */

function applyLineBreaks(string, maxCharLengthPerLine) {
  const split = string.split(' ')
  const chunks = []

  for (var i=0, j=0; i < split.length; i++) {
    if ((chunks[j] + split[i]).length > maxCharLengthPerLine) j++

    chunks[j] = (chunks[j] || '') + split[i] + ' '
  }

  return chunks.map(c => c.trim()).join('\n')
}


// Example Outputs:

applyLineBreaks('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 30)
/*
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit.
*/

applyLineBreaks('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20)
/*
  Lorem ipsum dolor
  sit amet,
  consectetur
  adipiscing elit.
*/
