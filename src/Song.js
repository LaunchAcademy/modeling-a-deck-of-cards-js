class Song {
  constructor(title, duration, genre){
    this.title = title 
    this.duration = duration 
    this.genre = genre 
    this.likeStatus = false 
    this.songNumber = null 
  }

  like(){
    this.likeStatus = true 
    return "I totally dig this jam, dude. Radical. Tubular"
  }
}

export default Song
