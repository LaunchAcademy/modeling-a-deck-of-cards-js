import Song from "./src/Song.js"
import Album from "./src/Album.js"

const titanicTheme = new Song("The Titanic Theme Song", "2 hours", "romance")

// console.log(titanicTheme.title)

// debugger
// console.log(titanicTheme.like())

const sinkingShip = new Song("Sinking Ship", "1 min", "tragedy")
const myHeart = new Song("My Heart", "too long", "romance")

const songsArray = [titanicTheme, sinkingShip, myHeart]
const titanicAlbum = new Album("Titanic NEWWWW", songsArray)

// console.log(titanicAlbum.arrayOfSongObjects)
console.log(titanicAlbum.likeAllSongs())
// console.log(titanicAlbum.arrayOfSongObjects)

// const titanicAlbum = new Album({
//   arrayOfSongObjects: [],
//   name: "Titanic NEWWWW"
// })
// const titanicAlbum2 = new Album("Titanic", [titanicTheme, sinkingShip, myHeart])

// console.log(titanicAlbum)
