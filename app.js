import Song from "./src/Song.js"
import Album from "./src/Album.js"

const newSong = new Song("Mambo No 5", "too long", "dancing")
const macarena = new Song("Macarena", "too short", "dancing")

// console.log(newSong)

// newSong.like()
// console.log(newSong.like())

// console.log(newSong)
// console.log(newSong.like())
// console.log(newSong)

const launchTracks = new Album("Launch Tracks", [newSong, macarena])
// const songs = [newSong, macarena]
// const launchTracks = new Album("Launch Tracks", songs)

console.log(launchTracks)

// console.log(launchTracks.songs[1].like())

launchTracks.likeAllSongs()

console.log(launchTracks)
