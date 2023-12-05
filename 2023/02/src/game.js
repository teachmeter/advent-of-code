module.exports = class Game {
    constructor(id, sets) {
        this.id = id;
        this.valid = -1;
        this.sets = sets || [];
    }

    isValid(constraint) {
        let valid = -1;

        for (let set of this.sets) {
            let condition = 
                set.red > constraint.red ||
                set.blue > constraint.blue ||
                set.green > constraint.green;
            
            if (condition) {
                valid = 0;
                break;
            }

            valid = 1;
        }

        return valid;
    }

    getMinimums() {
        let green = [];
        let blue = [];
        let red = [];

        for(let set of this.sets) {
            green.push(set.green)
            red.push(set.red)
            blue.push(set.blue)
        }

        return { 
            blue: Math.max(...blue), 
            green: Math.max(...green), 
            red: Math.max(...red), 
        }
    }
}