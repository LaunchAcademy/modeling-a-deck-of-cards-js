import Song from "./src/Song.js"
import Album from "./src/Album.js"

const getDown = new Song("I get knocked down", "3 minutes", "rock")
const passenger = new Song("Passenger", "4 minutes", "rock")
// console.log(getDown)
// console.log(getDown.like())
// console.log(getDown)

// const album = new Album("Launch Tracks", [getDown, passenger])

const songsArray = [getDown, passenger]
const album = new Album("Launch Tracks", songsArray)
// console.log(album.songs[1].like())
console.log(album)
console.log(album.likeAllSongs())
console.log(album)
