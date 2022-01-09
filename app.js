class Investor {
    constructor (name, init) {
        this.name = name,
        this.init = init,
        this.roll = undefined,
        this.mod = 0,
        this.percent = this.calcPercent(this.roll),
        this.gain = this.percent * this.init,
        this.row = $(`${this.name}`)
    }
    newRoll () {
        if () {

        }
    }
    calcPercent (roll) {

    }
}