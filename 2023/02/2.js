const fs = require('fs')
const input = fs.readFileSync('./input', 'utf8')
const { parse, sumArray } = require('./src/lib.js')
const Constraint = require('./src/constraint.js')

function task() {
    const games = parse(input)

    const powers = [];
    for (let game of games) {
       const powerItems = game.getMinimums();
        powers.push(powerItems.blue * powerItems.green * powerItems.red);
    }

    console.log(sumArray(powers))
}


task();