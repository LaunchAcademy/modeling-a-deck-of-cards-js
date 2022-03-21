import Album from "./src/Album.js"
import Song from "./src/Song.js"

const songOne = new Song("Never Gonna Give You Up", "20:00", "Pop")
const songTwo = new Song("Im On the Road to Veridian City", "3:00", "TV Show Songs")

const arrayOfSongs = [songOne, songTwo]

const albumOne = new Album("NOW Christmas", arrayOfSongs)

console.log(albumOne.likeAllSongs())
console.log(albumOne)

