class Album {
  constructor(name, songsArray) {
    this.name = name
    this.songsArray = songsArray
  }

  likeAllSongs() {
    this.songsArray.forEach((song) => {
      song.like()
    })
  }
}

export default Album