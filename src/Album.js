class Album {
  constructor(name, songArray){
    this.name = name 
    this.songs = songArray
  }

  likeAllSongs(){
    const likeSong = (songObject) => {
      songObject.like()
    }

    this.songs.forEach(likeSong)
  }
}

export default Album