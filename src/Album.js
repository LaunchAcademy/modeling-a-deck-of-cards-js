class Album {
  constructor(name, arrayOfSongs) {
    this.name = name
    this.songs = arrayOfSongs
  }

  likeAllSongs() {
    this.songs.forEach((song) => {
      // this.songs.forEach((song, index) => {
      // console.log("song HERE:", song)
      // console.log("index HERE:", index)
      song.like()
    })
    return true
  }
}

export default Album
