import Album from "./src/Album.js"
import Song from "./src/Song.js"

const black = new Song("Black", "3 minutes", "grunge")
// console.log(black)

// black.like()

const snow = new Song("Snow on the Beach", "2:30", "Holiday")

const songs = [black, snow]
// console.log(songs)
const launchJams = new Album("Launch Jams", songs)
// const launchJams = new Album("Launch Jams", [black, snow])

// console.log(launchJams)

// console.log(launchJams.songsArray[1].like())
// launchJams.songsArray[1].like()

console.log(launchJams)
launchJams.likeAllSongs()
console.log(launchJams)
