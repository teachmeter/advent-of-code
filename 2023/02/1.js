const fs = require('fs')
const input = fs.readFileSync('./input', 'utf8')
const { parse, sumArray } = require('./src/lib.js')
const Constraint = require('./src/constraint.js')

function task1() {
    const games = parse(input)
    const constraint = new Constraint({ red: 12, green: 13, blue: 14 })

    let validGameIds = [];

    for (let game of games) {
        let valid = game.isValid(constraint);
        if (valid === 1) {
            validGameIds.push(Number(game.id));
        }
    }

    const sum = sumArray(validGameIds)
    console.log(sum)
}


task1();