class Song {
  constructor(title, duration, genre) {
    this.title = title
    this.duration = duration
    this.genre = genre
    this.likeStatus = false
  }

  like() {
    // console.log(`You liked the song: ${this.title}`)
    // return "hello world"
    this.likeStatus = true

    return `You liked the song: ${this.title}`
  }
}

export default Song
