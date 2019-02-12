# Constructor-Word-Guess

This CLI application is a hangman style word-guess game executed with Node.js.

To get started, download or clone the repository.
Navigate to the folder location and install the package.json with 'npm install'.
Run the application with 'node index.js'.

## Game Play
The game currently has three word categories to choose from: **Actors, Movies** and **Singers**. Choose a category by entering the corresponding number and press enter.

A word will display with underscores along with a message informing you how many guesses are remaining. Begin guessing the word by entering one letter at a time and pressing enter. The game will remember which letters you've chosen and will not penalize you if you choose the same letter more than once. The same if you accidentally enter more than one letter.

![Game Play Gif](https://github.com/Milleniyum/Constructor-Word-Guess/blob/master/word_guess.gif)

## Technology
* Javascript
* Chalk (node package)
* Inquirer (node package)
* Node.js
