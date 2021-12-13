class Album {
  constructor(name, songs) {
    this.name = name
    this.songs = songs
  }

  likeSecondSong() {
    // debugger
    
    return this.songs[1].like()
  }

  likeAllSongs() {
    this.songs.forEach((song) => {
      // console.log("logging song");
      // console.log(song);
      // console.log(song.likeStatus);
      song.like()
      // console.log(song.likeStatus);
    })

    // return true
    return `Liked all songs in album ${this.name}`
  }
}

export default Album