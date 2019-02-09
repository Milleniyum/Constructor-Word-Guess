var Word = require('./word.js');
var inquirer = require('inquirer');
var chalk = require('chalk');

var actors = ['Robert De Niro', 'Jack Nicholson', 'Tom Hanks', 'Marlon Brando', 'Leonardo DiCaprio', 'Humphrey Bogart', 'Johnny Depp', 'Al Pacino', 'Denzel Washington', 'Laurence Olivier', 'Brad Pitt', 'Daniel Day-Lewis', 'Tom Cruise', 'Cary Grant', 'Dustin Hoffman', 'Clark Gable', 'Sean Penn', 'Christian Bale', 'Gregory Peck', 'Sidney Poitier', 'Harrsion Ford', 'Spencer Tracy', 'George Clooney', 'Charlton Heston', 'Morgan Freeman', 'Katharine Hepburn', 'Meryl Streep', 'Ingrid Bergman', 'Marilyn Monroe', 'Jennifer Lawrence', 'Kate Winslet', 'Elizabeth Taylor', 'Cate Blanchett', 'Audrey Hepburn', 'Helen Mirren', 'Bette Davis', 'Viola Davis', 'Nicole Kidman', 'Sandra Bullock', 'Natalie Portman', 'Jodie Foster', 'Judi Dench', 'Amy Adams', 'Julia Roberts', 'Diane Keaton', 'Grace Kelly', 'Shriley MacLaine', 'Reese Witherspoon', 'Charlize Theron', 'Judy Garland', 'John Wayne', 'Paul Newman', 'Anthony Hopkins', 'Matt Damon', 'Russell Crowe', 'Robert Duvall', 'James Dean', 'Kirk Douglas', 'Henry Ford', 'Robin Williams', 'Orson Welles', 'Christopher Waltz', 'Heath Ledger', 'Sean Connery', 'Kevin Spacey', 'Gene Hackman', 'Liam Neeson', 'Edward Norton', 'Bruce Willis', 'Gary Cooper', 'Phillip Seymour Hoffman', 'Robert Redford', 'Ralph Fiennes', 'Will Smith', 'Steve McQueen', 'Vivien Leigh', 'Angelina Jolie', 'Anne Hathaway', 'Maggie Smith', 'Olivia de Havilland', 'Barbara Stanwyck', 'Joan Fontaine', 'Greer Garson', 'Faye Dunaway', 'Susan Hayward', 'Ellen Burstyn', 'Jane Wyman', 'Sophia Loren', 'Joan Crawford', 'Kathy Bates', 'Julie Andrews', 'Marion Cotillard', 'Deboarh Kerr', 'Sissy Spacek', 'Susan Sarandon', 'Luise Rainer', 'Glenn Close', 'Jane Fonda', 'Doris Day', 'Natalie Wood'];

var movies = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'The Godfather Part II', 'The Lord of the Rings The Return of the King', 'Pulp Fiction', 'Schindler\'s List', 'The Good the Bad and the Ugly', '12 Angry Men', 'Inception', 'Fight Club', 'The Lord of the Rings The Fellowship of the Ring', 'Forrest Gump', 'Star Wars Episode V The Empire Strikes Back', 'Spider-Man Into the Spider-Verse', 'The Lord of the Rings The Two Towers', 'The Matrix', 'Goodfellas', 'One Flew Over the Cuckoo\'s Nest', 'Seven Samurai', 'Andhadhun', 'Interstellar', 'City of God', 'Spirited Away', 'Saving Private Ryan', 'Life is Beautiful', 'The Usual Suspects', 'Se7en', 'Leon The Professional', 'The Silence of the Lambs', 'Star Wars Episode IV A New Hope', 'It\'s a Wonderful Life', 'Dangal', 'Avengers Infinity War', 'Whiplash', 'The Intouchables', 'The Prestige', 'The Departed', 'The Pianist', 'Memento', 'Gladiator', 'The Green Mile', 'American History X', 'The Lion King', 'Terminator 2 Judgment Day', 'Cinema Paradiso', 'Grave of the Fireflies', 'Back to the Future', 'Raiders of the Lost Ark', 'Apocalypse Now', 'Alien', 'Once Upon a Time in the West', 'Psycho', 'Rear Window', 'Casablanca', 'The Great Dictator', 'Modern Times', 'City Lights', 'Your Name', 'Coco', 'Django Unchained', 'The Dark Knight Rises', '3 Idiots', 'Like Stars on Earth', 'WALL-E', 'My Father and My Son', 'The Lives of Others', 'Oldboy', 'American Beauty', 'Princess Mononoke', 'Braveheart', 'Aliens', 'Once Upon a Time in America', 'Das Boot', 'The Shining', 'Dr Strangelove', 'Witness for the Prosecution', 'Paths of Glory', 'Sunset Boulevard', 'Green Book', 'The Hunt', 'A Separation', 'Up', 'Toy Story 3', 'Batman Begins', 'Inglorious Basterds', 'Eternal Sunshine of the Spotless Mind', 'Amelie', 'Snatch', 'Requiem for a Dream', 'LA Confidential', 'Good Will Hunting', 'Children of Heaven', 'The Bandit', 'Toy Story', 'Reservoir Dogs', 'Full Metal Jacket', 'Amadeus', 'Scarface', 'Star Wars Episode VI Return of the Jedi'];

var word;
var guesses;

function playGame() {
    if (guesses > 0) {
        console.log(chalk.blue('\n' + guesses + ' guesses remaining!!!\n'));
        inquirer.prompt([
            {
                message: chalk.green('Guess a letter!'),
                name: 'guess'
            }
        ]).then(function(answer){
            word.guess(answer.guess);
            console.log(word.getWord());
        });
    }
};

function setWord(randWord) {
    word = new Word;
    word.storeWord(randWord);
    guesses = 15;
    playGame();
}

function getChoice() {
    inquirer.prompt([
        {
            type: 'rawlist',
            message: 'Please select a category to begin:',
            choices: ['Actors', 'Movies', 'Exit Game'],
            name: 'category'
        }
    ]).then(function (choice) {
        switch (choice.category) {
            case 'Actors':
                setWord(actors[Math.floor(Math.random() * actors.length)]);
                break;

            case 'Movies':
                setWord(movies[Math.floor(Math.random() * movies.length)]);
                break;

            default:
                console.log(chalk.yellow('\nThanks for playing!'));
        }
    });
};

console.log(chalk.yellow('\nWelcome to Word-Guess!\n'));
getChoice();