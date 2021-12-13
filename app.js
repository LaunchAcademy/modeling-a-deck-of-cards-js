import Song from "./src/Song.js"
import Album from "./src/Album.js"

const newSong = new Song("Free Bird", "too long", "guitar")

// console.log(newSong);
// console.log(newSong.like());
// console.log(newSong);

const stairs = new Song("Stairway", "also long", "good")

// version 1
// const songsArray = [newSong, stairs]
// const newAlbum = new Album("Killer Beats", songsArray)

// version 2

// const newAlbum = new Album("Killer Beats", [newSong, stairs])


// version 3

const songsArray = []
songsArray.push(newSong)
songsArray.push(stairs)
const newAlbum = new Album("Killer Beats", songsArray)
console.log(newAlbum.likeAllSongs());

// console.log(newAlbum.likeSecondSong()); 
