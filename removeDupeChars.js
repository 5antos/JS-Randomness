/**
 * @author 5antos#4876
 * @author Gian
 * @note Uppercase and lowercase letters are considered different characters
 * @param {string} string Input string to remove duplicated characters in a row
 * @param {number} [maxAllowed = 1] The max duplicated characters allowed in a row
 * @returns {string} String without duplicated characters in a row
 */

function removeDupeChars(content, maxAllowed = 1) {
    return content.split('').filter((_, i, a) => 
        a[i] != a[i + ((isNaN(maxAllowed) 
        || maxAllowed > content.length 
        || maxAllowed < 1) ? 1 : maxAllowed)]).join('')
}


// Example Outputs:

removeDupeChars('Heeeeeyyyy guyssssss!!!!') // Hey guys!
removeDupeChars('Wow, that code is really short!', 2) // Wow, that code is really short!
removeDupeChars('Ssssshhhhh, be quiet please!') // Ssh, be quiet please!
