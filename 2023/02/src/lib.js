const Bag = require('./bag');
const Game = require('./game');

require('./bag')

function parse(input) 
{
    const lines = input.split('\n')

    const games = [];

    for (let line of lines) {
        const splittedLine = line.split(':');
        

        // console.log(game);
        // console.log(splittedLine[1]);
        const setsString = splittedLine[1].trimStart();

        const sets = [];
        for (let setString of setsString.split(';')) {
            const separatedItems = setString.split(',')
                .map(item => item.trim())
                .map((item) => {
                    const transposed = item.split(' ').reverse()
                    let tmp = {};
                    tmp[transposed[0]] = transposed[1]

                    return tmp;
                })

            const setData = Object.assign({}, ...separatedItems)
            const bag = new Bag(setData);
            sets.push(bag);
        }
        const id = splittedLine[0].replace('Game ', '');
        const game = new Game(id, sets)
        games.push(game)
    }
    
    return games;
}

function sumArray(validGameIds) {
    return validGameIds.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
}

module.exports = {
    parse: parse,
    sumArray: sumArray
}