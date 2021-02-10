/**
 * @author 5antos#4876
 * @note Uppercase and lowercase letters are considered different characters
 * @param {String} string Input string to remove duplicated characters in a row
 * @param {Boolean} bool Whether or not to allow two letters in a row. Useful for some words, like 'really', 'see', 'good', etc.
 * @returns {String} String without duplicated characters in a row
 */

function removeDupeChars(string, bool=false) {
  return string.split('').filter((_, i, a) => a[i] != a[bool ? i+2 : i+1]).join('')
}


// Example Outputs:

removeDupeChars('Heeeeeyyyy guyssssss!!!!') // Hey guys!
removeDupeChars('Wow, that code is really short!', true) // Wow, that code is really short!
removeDupeChars('Ssssshhhhh, be quiet please!') // Ssh, be quiet please!
