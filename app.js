import Song from "./src/Song.js"
import Album from "./src/Album.js"

const heatWaves = new Song("Heat Waves", 2.5, "alternative")
// console.log(heatWaves)
// heatWaves = "Hello"
// console.log(heatWaves)

const windows = new Song("Windows", 3, "pop")
// console.log(windows.likeStatus)
// console.log(windows.like())
// console.log(windows.likeStatus)

// console.log(heatWaves.like())

// Song.convertDuration(2.5)
// > "2 minutes 30 seconds"

// version 1
const songArray = [heatWaves, windows]
const glassAnimals = new Album("Glass Animals", songArray)
// console.log(glassAnimals.songs)
// console.log(glassAnimals.songs[1])
// console.log(glassAnimals.songs[1].like())

console.log(glassAnimals.songs)
console.log(glassAnimals.likeAllSongs())
console.log(glassAnimals.songs)


// console.log(glassAnimals.likeSecondSong())


// version 2
// const songArray = []
// songArray.push(heatWaves)
// songArray.push(windows)
// new Album("Glass Animals", songArray)

// version 3
// new Album("Glass Animals", [heatWaves, windows])
// const glassAnimals = new Album("Glass Animals", [new Song("Heat Waves", 2.5, "alternative"), new Song("Windows", 3, "pop")])