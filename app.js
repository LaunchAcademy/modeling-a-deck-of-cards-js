// add code here 

import Song from "./src/Song.js"
import Album from "./src/Album.js"

const song = new Song("Sweet Caroline", "3:00", "Pop Rock")

let songs = []
songs.push(song)
const album = new Album("Blah", songs)
