/**
 * @author 5antos#4876
 * @param {object[]} array Array with objects with a key named 'chance', representing the chance of that element to occur
 * @note An element with a chance value of zero (0) will never occur
 * @returns {any} Random element from the provided array, based on the different elements' chances
 */

function getRandom(array) {
  const auxArray = Array.from(array)
  auxArray.reduce((acc, curr, i, a) => a[i] = acc + curr.chance, 0)

  return array[auxArray.findIndex(w => w > Math.random()*auxArray[auxArray.length-1])]
}


// Usage Examples:

getRandom([
  { rarity: 'Common', chance: 60 },
  { rarity: 'Uncommon', chance: 25 },
  { rarity: 'Rare', chance: 10 },
  { rarity: 'Very rare', chance: 5 }
])

getRandom([
  { side: 'Heads', chance: 50 },
  { side: 'Tails', chance: 50 }
])
