function Letter(character, guessed) {
    this.character = character;
    this.guessed = guessed;
    this.toString = function() {
        if (this.guessed) { return this.character; };
        return '_';
    }
    this.checkGuess = function(char) {
        if (char.toLowerCase() === this.character.toLowerCase()) { this.guessed = true; };
    };
};

module.exports = Letter;