/**
 * @author 5antos#4876
 * @requires Node.js version 14 or above
 * @note The error 'Unexpected end of JSON input' will be thrown if there is any empty JSON
 * @param {object} path Path to the languages' folder (from the project's root)
 * @param {string} topic Topic to translate
 * @param {string} language Language to translate the provided topic to
 * @param {object} [bindTo=null] Object to bind the languages' JSONs (as a cache method)
 * @returns {string|null} Translated topic. Returns null if an invalid language or topic is provided
 */

const { readdirSync, readFileSync } = require('fs')

function getTranslation(path, topic, language, bindTo=null) {
  const languages = bindTo?.translation?.languages || readdirSync(path).map(l => [l.slice(0,2)])

  if (!languages.flat().includes(language)) return null

  for (var i = 0; i < languages.length; i++)
    languages[i][1] = JSON.parse(readFileSync(`${path}/${languages[i][0]}.json`, { encoding: 'utf8' }).replace(/\s|\r|\n|\t/g, ' '))

  if (bindTo) {
    bindTo.translation = bindTo?.translation || {} // For Node.js v15+, this can be replaced with: bindTo.translation ??= {}
    bindTo.translation.languages = languages
  } 

  return topic.replace(/:/g, '.').split('.').reduce((obj, curr) => obj?.[curr], languages[languages.findIndex(l => l[0] === language)][1]) || null
}


// Example Outputs:

const Client = {}
getTranslation('Translation/languages', 'person:job.name', 'en', Client)   // Software Engineer, Client: { translation: { languages: [ [Array], [Array] ] } }

getTranslation('Translation/languages', 'person:job.name', 'pt')           // Engenheiro Informático
getTranslation('Translation/languages', 'person:job.salary', 'en')         // null (property "salary" does not exist on person.job)
getTranslation('Translation/languages', 'person:name', 'fr')               // null (invalid language)