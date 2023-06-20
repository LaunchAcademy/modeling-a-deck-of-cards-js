# Basic OOP in JS: Songs and Albums Exercise

- create a Song class with a `title`, `duration` and `genre`
- create some example `Song` objects, using the `app.js` file to run your code
- make a "`like`" method on your `Song` class that outputs that the user has liked the song (mention the title)
- create an `Album` class that has a `name`, and initializes with an array of `Song` objects
- create an album, pass it songs, and then like the second song of that album

## _Time Permitting_

- update the `like` method to set a song object's property called `likeStatus` to `true`
  - this property should be `false` by default
- create a method `likeAllSongs` on the Album class to `like` all of the songs in the album

## Key Takeaways

- Distinction: object/instance vs class
- we have to call methods on objects, which are instances of a class
  - to have this ability, we have to define the method on the class first
- we should _separate our concerns_ by defining classes in their own files, and running the core program from another file
- objects can be stored in variables
- objects can be passed around and stored in data structures like arrays and other objects
- objects can even be housed within another object!
- we can accomplish more advanced functionality by chaining methods
