class Song {
  constructor(title, duration, genre){
    this.title = title 
    this.duration = duration 
    this.genre = genre
    this.likeStatus = false
  }
  
  like(){
    this.likeStatus = true

    return `I like ${this.title}`
  }
}

export default Song