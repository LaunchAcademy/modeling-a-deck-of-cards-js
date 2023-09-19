class Album {
  constructor(name, arrayOfSongs) {
    this.name = name
    this.songs = arrayOfSongs
  }

  likeAllSongs() {
    this.songs.forEach((song) => {
      // console.log("inside foreach song", song);
      song.like()
    })
  }
}

export default Album
