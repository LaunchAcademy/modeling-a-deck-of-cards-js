class Album {
  constructor(name, arrayOfSongObjects) {
    // constructor({ name, arrayOfSongObjects }) {
    this.name = name
    this.arrayOfSongObjects = arrayOfSongObjects
  }

  likeAllSongs() {
    this.arrayOfSongObjects.forEach((song) => {
      return song.like()
      // console.log(song.like())
    })
    return "You liked all the songs!"
  }
}

export default Album
