module.exports = class Bag {
    
    constructor (data) {
        this.red = Number(data.red) || 0;
        this.green = Number(data.green) || 0;
        this.blue = Number(data.blue) || 0;
        this.max = this.getMax()
    }


    getRed() {
        return this.red;
    }
    getGreen() {
        return this.green;
    }
    getBlue() {
        return this.blue;
    }
    

    getMax() {

        const data = {
            red: this.red,
            green:this.green,
            blue: this.blue
        }

        let max = Object.entries(data).reduce((max, entry) => entry[1] >= max[1] ? entry : max, [0, -Infinity])

        return max;
    }
}