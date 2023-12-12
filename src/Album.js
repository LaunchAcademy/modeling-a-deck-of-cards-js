class Album {
  constructor(name, arrayOfSongs) {
    this.name = name
    this.songs = arrayOfSongs
  }

  likeAllSongs() {
    this.songs.forEach((song) => {
      console.log(song.like())
    })
  }
}

export default Album
