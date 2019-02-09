var Letter = require('./letter.js');

function Word() {
    this.letters = [];
    this.getWord = function() {
        var str = '';
        for (var i = 0; i < this.letters.length; i++) {
            str += this.letters[i] + ' ';
        };
        return str.trim();
    };
    this.guess = function(char) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkGuess(char);
        };
    };
    this.storeWord = function(word) {
        for (var i = 0; i < word.length; i++) {
            var guessed = false;
            if (word[i] === ' ') { guessed = true; };
            this.letters.push(new Letter(word[i], guessed));
        };
    };
};

module.exports = Word;