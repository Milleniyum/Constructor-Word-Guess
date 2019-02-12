var Word = require('./word.js');
var inquirer = require('inquirer');
var chalk = require('chalk');

var categories = {
    actors: {
        list: ['Robert De Niro', 'Jack Nicholson', 'Tom Hanks', 'Marlon Brando', 'Leonardo DiCaprio', 'Humphrey Bogart', 'Johnny Depp', 'Al Pacino', 'Denzel Washington', 'Laurence Olivier', 'Brad Pitt', 'Daniel Day Lewis', 'Tom Cruise', 'Cary Grant', 'Dustin Hoffman', 'Clark Gable', 'Sean Penn', 'Christian Bale', 'Gregory Peck', 'Sidney Poitier', 'Harrsion Ford', 'Spencer Tracy', 'George Clooney', 'Charlton Heston', 'Morgan Freeman', 'Katharine Hepburn', 'Meryl Streep', 'Ingrid Bergman', 'Marilyn Monroe', 'Jennifer Lawrence', 'Kate Winslet', 'Elizabeth Taylor', 'Cate Blanchett', 'Audrey Hepburn', 'Helen Mirren', 'Bette Davis', 'Viola Davis', 'Nicole Kidman', 'Sandra Bullock', 'Natalie Portman', 'Jodie Foster', 'Judi Dench', 'Amy Adams', 'Julia Roberts', 'Diane Keaton', 'Grace Kelly', 'Shirley MacLaine', 'Reese Witherspoon', 'Charlize Theron', 'Judy Garland', 'John Wayne', 'Paul Newman', 'Anthony Hopkins', 'Matt Damon', 'Russell Crowe', 'Robert Duvall', 'James Dean', 'Kirk Douglas', 'Henry Ford', 'Robin Williams', 'Orson Welles', 'Christopher Waltz', 'Heath Ledger', 'Sean Connery', 'Kevin Spacey', 'Gene Hackman', 'Liam Neeson', 'Edward Norton', 'Bruce Willis', 'Gary Cooper', 'Phillip Seymour Hoffman', 'Robert Redford', 'Ralph Fiennes', 'Will Smith', 'Steve McQueen', 'Vivien Leigh', 'Angelina Jolie', 'Anne Hathaway', 'Maggie Smith', 'Olivia de Havilland', 'Barbara Stanwyck', 'Joan Fontaine', 'Greer Garson', 'Faye Dunaway', 'Susan Hayward', 'Ellen Burstyn', 'Jane Wyman', 'Sophia Loren', 'Joan Crawford', 'Kathy Bates', 'Julie Andrews', 'Marion Cotillard', 'Deboarh Kerr', 'Sissy Spacek', 'Susan Sarandon', 'Luise Rainer', 'Glenn Close', 'Jane Fonda', 'Doris Day', 'Natalie Wood'],
        used: []
    },
    movies: {
        list: ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'The Godfather Part II', 'The Lord of the Rings The Return of the King', 'Pulp Fiction', 'Schindlers List', 'The Good the Bad and the Ugly', '12 Angry Men', 'Inception', 'Fight Club', 'The Lord of the Rings The Fellowship of the Ring', 'Forrest Gump', 'Star Wars Episode V The Empire Strikes Back', 'Spider Man Into the Spider Verse', 'The Lord of the Rings The Two Towers', 'The Matrix', 'Goodfellas', 'One Flew Over the Cuckoos Nest', 'Seven Samurai', 'Andhadhun', 'Interstellar', 'City of God', 'Spirited Away', 'Saving Private Ryan', 'Life is Beautiful', 'The Usual Suspects', 'Seven', 'Leon The Professional', 'The Silence of the Lambs', 'Star Wars Episode IV A New Hope', 'Its a Wonderful Life', 'Dangal', 'Avengers Infinity War', 'Whiplash', 'The Intouchables', 'The Prestige', 'The Departed', 'The Pianist', 'Memento', 'Gladiator', 'The Green Mile', 'American History X', 'The Lion King', 'Terminator 2 Judgment Day', 'Cinema Paradiso', 'Grave of the Fireflies', 'Back to the Future', 'Raiders of the Lost Ark', 'Apocalypse Now', 'Alien', 'Once Upon a Time in the West', 'Psycho', 'Rear Window', 'Casablanca', 'The Great Dictator', 'Modern Times', 'City Lights', 'Your Name', 'Coco', 'Django Unchained', 'The Dark Knight Rises', '3 Idiots', 'Like Stars on Earth', 'WALL E', 'My Father and My Son', 'The Lives of Others', 'Oldboy', 'American Beauty', 'Princess Mononoke', 'Braveheart', 'Aliens', 'Once Upon a Time in America', 'Das Boot', 'The Shining', 'Dr Strangelove', 'Witness for the Prosecution', 'Paths of Glory', 'Sunset Boulevard', 'Green Book', 'The Hunt', 'A Separation', 'Up', 'Toy Story 3', 'Batman Begins', 'Inglorious Basterds', 'Eternal Sunshine of the Spotless Mind', 'Amelie', 'Snatch', 'Requiem for a Dream', 'LA Confidential', 'Good Will Hunting', 'Children of Heaven', 'The Bandit', 'Toy Story', 'Reservoir Dogs', 'Full Metal Jacket', 'Amadeus', 'Scarface', 'Star Wars Episode VI Return of the Jedi'],
        used: []
    },
    singers: {
        list: ['Aretha Franklin', 'Ray Charles', 'Elvis Presley', 'Sam Cooke', 'John Lennon', 'Marvin Gaye', 'Bob Dylan', 'Otis Redding', 'Stevie Wonder', 'James Brown', 'Paul McCartney', 'Little Richard', 'Roy Orbison', 'Al Green', 'Robert Plant', 'Mick Jagger', 'Tina Turner', 'Freddie Mercury', 'Bob Marley', 'Smokey Robinson', 'Johnny Cash', 'Etta James', 'David Bowie', 'Van Morrison', 'Michael Jackson', 'Jackie Wilson', 'Hank Williams', 'Janis Joplin', 'Nina Simone', 'Prince', 'Gerard Facchini', 'Bono', 'Steve Winwood', 'Whitney Houston', 'Dusty Springfield', 'Bruce Springsteen', 'Neil Young', 'Elton John', 'Jeff Buckley', 'Curtis Mayfield', 'Chuck Berry', 'Joni Mitchell', 'George Jones', 'George Jones', 'Bobby Bland', 'Kurt Cobain', 'Patsy Cline', 'Jim Morrison', 'Buddy Holly', 'Donny Hathaway', 'Bonnie Raitt', 'Gladys Knight', 'Brian Wilson', 'Muddy Waters', 'Luter Vandross', 'Paul Rodgers', 'Mavis Staples', 'Eric Burdon', 'Christina Aguilera', 'Rod Stewart', 'Bjork', 'Roger Daltrey', 'Lou Reed', 'Dion', 'Axl Rose', 'David Ruffin', 'Thom Yorke', 'Jerry Lee Lewis', 'Wilson Pickett', 'Ronnie Spector', 'Gregg Allmann', 'Toots Hibbert', 'John Fogerty', 'Dolly Parton', 'James Taylor', 'Iggy Pop', 'Steve Perry', 'Merle Haggard', 'Sly Stone', 'Mariah Carey', 'Frankie Valli', 'John Lee Hooker', 'Tom Waits', 'Patti Smith', 'Darlene Love', 'Sam Moore', 'Art Garfunkel', 'Don Henley', 'Willie Nelson', 'Solomon Burke', 'The Everly Brothers', 'Levon Helm', 'Morrissey', 'Annie Lennox', 'Karen Carpenter', 'Patti LaBelle', 'BB King', 'Joe Cocker', 'Stevie Nicks', 'Steven Tyler', 'Mary J Blige'],
        used: []
    }
};

var word = new Word;
var guessCount;
var curState;
var guesses;

function playGame() {
    if (guessCount > 0) {
        console.log(chalk.blue('\n' + guessCount + ' guess(es) remaining!\n'));
        console.log(word.getWord() + '\n');
        inquirer.prompt([{
            message: chalk.green('Guess a letter!'),
            name: 'guess'
        }]).then(function (answer) {
            if (answer.guess.length === 1 && guesses.indexOf(answer.guess.toLowerCase()) === -1) {
                guessCount--;
                guesses.push(answer.guess.toLowerCase());
                word.guess(answer.guess);

                if (curState === word.getWord()) {
                    console.log(chalk.magenta('\nINCORRECT!'));
                    playGame();
                } else {
                    curState = word.getWord();
                    if (curState.includes('_') === false) {
                        console.log('\n' + word.getWord() + '\n');
                        console.log(chalk.yellow('You got it right!\n'));
                        getChoice();
                    } else {
                        console.log(chalk.green('\nCORRECT!'));
                        playGame();
                    }
                };
            } else {
                playGame();
            };
        });
    } else {
        var correctWord = '';
        for (var i = 0; i < word.letters.length; i++) {
            correctWord += word.letters[i].character;
        }
        console.log('\n' + word.getWord());
        console.log(chalk.red('\nYou ran out of guesses! The correct answer was ') + chalk.blue(correctWord.trim()) + '.\n');
        getChoice();
    }
};

function setWord(randWord) {
    word.letters = [];
    word.storeWord(randWord);
    curState = word.getWord();
    guessCount = 16;
    guesses = [];
    playGame();
}

function chooseWord(category) {
    var chosenIndex;
    if (category.list.length === category.used.length) category.used = [];
    do {
        chosenIndex = Math.floor(Math.random() * category.list.length);
    } while (category.used.indexOf(chosenIndex) != -1);
    category.used.push(chosenIndex);
    setWord(category.list[chosenIndex]);
};

function getChoice() {
    inquirer.prompt([{
        type: 'rawlist',
        message: 'Please select a category:',
        choices: ['Actors', 'Movies', 'Singers', 'Exit Game'],
        name: 'category'
    }]).then(function (choice) {
        switch (choice.category) {
            case 'Actors':
                chooseWord(categories.actors);
                break;

            case 'Movies':
                chooseWord(categories.movies);
                break;

            case 'Singers':
                chooseWord(categories.singers);
                break;

            default:
                console.log(chalk.yellow('\nThanks for playing!\n'));
        }
    });
};

console.log(chalk.yellow('\nWelcome to Word-Guess!\n'));
getChoice();