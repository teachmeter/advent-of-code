module.exports = class Constraint {
    constructor(data) {
        this.blue = Number(data.blue) || 0;
        this.green = Number(data.green) || 0;
        this.red = Number(data.red) || 0;
    }

    getRed() {
        return this.red
    }

    getBlue() {
        return this.blue
    }

    getGreen() {
        return this.green
    }
}