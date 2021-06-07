class Album {
  constructor(name, songs) {
    this.name = name
    this.songs = songs
  }

  likeSecondSong() {
    return this.songs[1].like()
  }

  likeAllSongs() {
    this.songs.forEach((song) => {
      return song.like()
    })
    // const mappedSongs = this.songs.map((song) => {
    //   return song.like()
    // })
  }
}

export default Album