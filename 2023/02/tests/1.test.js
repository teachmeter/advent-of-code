const fs = require('fs')
const input = fs.readFileSync('./tests/test_input', 'utf8')
const {parse, sumArray}  = require('../src/lib.js')
const Constraint = require('../src/constraint.js')

test('It gets the sum of valid game ids to euqal 8', () => {

    const games = parse(input)
    const constraint = new Constraint({red: 12, green: 13, blue: 14})

    let validGameIds = [];

    for (let game of games) {
        let valid = game.isValid(constraint);
        if (valid === 1) {
            validGameIds.push(Number(game.id));
        }
    }

    const sum = sumArray(validGameIds)

    expect(sum).toBe(8)
})