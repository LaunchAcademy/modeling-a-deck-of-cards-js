class Song {
  constructor(title, duration, genre) {
    this.title = title
    this.duration = duration
    this.genre = genre
    this.likeStatus = false
  }

  like() {
    this.likeStatus = true
    return `You liked the song ${this.title}`
  }
}

export default Song
