# Basic OOP in JS: Songs and Albums Exercise

- Create a `Song` class with `title`, `duration` and `genre`
- Create some example `Song` objects, using the `app.js` file to run your code
- Add a "`like`" method on your `Song` class that outputs that the user has liked the song (mention the title)
- Create an `Album` class that has a `name`, and initializes with an array of `Song` objects
- Create an `Album`, pass it `Songs`, and then like the second Song of that Album

## _Time Permitting_

- Update the `like` method to set a Song object's property called `likeStatus` to `true`
  - This property should be `false` by default
- Create a method `likeAllSongs` on the Album class to `like` all of the songs in the Album

## Key Takeaways

- Distinction: object/instance vs class
- We have to call methods on objects, which are instances of a class
  - To have this ability, we have to define the method on the class first
- We should _separate our concerns_ by defining classes in their own files, and running the core program from another file
- Objects can be stored in variables
- Objects can be passed around and stored in data structures, like arrays and other objects
- Objects can even be housed within another object!
- We can accomplish more advanced functionality by chaining methods
