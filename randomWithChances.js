/**
 * @author 5antos#4876
 * @param {Object[]} array Array with objects with a key named 'weight', representing the chance of that element to occur
 * @note An element with a weight value of zero (0) will never occur
 * @returns {any} Random element from the provided array, based on the different elements' chances
 */

function getRandom(array) {
  const auxArray = Array.from(array)
  auxArray.reduce((acc, curr, i, a) => a[i] = acc + curr.weight, 0)
  const randomChance = Math.random() * auxArray[auxArray.length-1]

  return array[auxArray.findIndex(w => w > randomChance)]
}


// Usage Examples:

getRandom([
  { rarity: 'Common', weight: 60 },
  { rarity: 'Uncommon', weight: 25 },
  { rarity: 'Rare', weight: 10 },
  { rarity: 'Very rare', weight: 5 }
])

getRandom([
  { face: 'Heads', weight: 50 },
  { face: 'Tails', weight: 50 }
])
