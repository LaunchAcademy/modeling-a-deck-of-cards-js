class Song {
  constructor(title, duration, genre) {
    this.title = title
    this.duration = duration
    this.genre = genre
    this.likeStatus = false
  }

  like() {
    this.likeStatus = true
    // this.likeStatus = !this.likeStatus
    return `you liked the song ... ${this.title}`
    // console.log(`you liked the song ... ${this.title}`)
  }
}

export default Song
