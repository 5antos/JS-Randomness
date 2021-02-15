/**
 * @author 5antos#4876
 * @param {number} xp User's current amount of experience points (xp)
 * @note It's recommended to set the difficuly value as an integer bigger than 0. The bigger the difficulty value is, the harder is to level up
 * @note It's also recommended to set the xp amount given to the users as a constant number, or a number between two constant limits (Examples: 3xp, 0-10xp)
 * @returns {object} Object with information about the current level and the next level
 */

function calculateLevels(xp) {
  const difficulty = 50
  const startingLvl = 1
  const level = ~~(Math.log2(xp/difficulty+1))+startingLvl
  const nextLvlXp = difficulty*((2**level)-startingLvl)

  return { current:{ level: level, xp: xp }, next:{ level: level+1, xp: nextLvlXp }, toNextLevel: nextLvlXp-xp }
}


// Example Outputs:

// Default level up (difficulty=50)
calculateLevels(0) // { current:{ level: 1, xp: 0 }, next:{ level: 2, xp: 50 }, toNextLevel: 50 }
calculateLevels(50) // { current:{ level: 2, xp: 50 }, next:{ level: 3, xp: 150 }, toNextLevel: 100 }
calculateLevels(150) // { current:{ level: 3, xp: 150 }, next:{ level: 4, xp: 350 }, toNextLevel: 200 }

// Harder level up (difficulty=100)
calculateLevels(0) // { current:{ level: 1, xp: 0 }, next:{ level: 2, xp: 100 }, toNextLevel: 100 }
calculateLevels(50) // { current:{ level: 1, xp: 50 }, next:{ level: 2, xp: 100 }, toNextLevel: 50 }
calculateLevels(150) // { current:{ level: 2, xp: 150 }, next:{ level: 3, xp: 300 }, toNextLevel: 150 }
