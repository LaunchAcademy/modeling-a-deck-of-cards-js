import Song from "./src/Song.js"
import Album from "./src/Album.js"

// console.log("hello everyone!")

const loveFool = new Song("Love Fool", "3 minutes", "pop")
// console.log(loveFool)

// loveFool.like()

// console.log(loveFool.like())

const pheonix = new Song("1901", "2:30", "indie")
const peaches = new Song("Peaches", "3:33", "alt rock")
// console.log(peaches)
// console.log(peaches.like())
// console.log(peaches)

// const songs = [loveFool, pheonix, peaches]

// console.log(songs)

// const laTracks = new Album("Launch Tracks", songs)
const laTracks = new Album("Launch Tracks", [loveFool, pheonix, peaches])
// console.log(laTracks.songs)
// console.log(laTracks.songs[1])
// console.log(laTracks.songs[1].like())

// console.log(laTracks.songs)
laTracks.likeAllSongs()
// console.log(laTracks.songs)
