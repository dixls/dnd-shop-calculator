class Investor {
    constructor(name, init) {
        this.name = name,
            this.init = init,
            this.roll = 0,
            this.mod = 0,
            this.percent = 0,
            this.gain = 0,
            this.row = $(`#${this.name}`)
    }
    newRoll() {
        const roll = this.row.find('.roll')
        let newRoll = 0
        if (roll.val()) {
            this.roll = Number(roll.val())
            return this.roll
        } else {
            newRoll = Math.floor(Math.random() * 100)
            roll.val(newRoll)
            this.roll = newRoll
            return this.roll
        }
    }
    getMod() {
        const $mod = this.row.find('.mod')
        if ($mod) {
            this.mod = Number($mod.val())
        } else {
            this.mod = 0
            $mod.val(0)
        }
        return this.mod
    }
    calcPercent() {
        const totalRoll = Number(this.roll) + Number(this.mod);
        let newPercent = 0;
        if (totalRoll == 0){
            newPercent = 0
        }else if(totalRoll == 1) {
            newPercent = -.5
        } else if (totalRoll < 21) {
            newPercent = -.05
        } else if (totalRoll < 41) {
            newPercent = -.01
        } else if (totalRoll < 81) {
            newPercent = .01
        } else if (totalRoll < 91) {
            newPercent = .05
        } else if (totalRoll > 91) {
            newPercent = .1
        }
        this.percent = newPercent;
        return newPercent
    }
    calcGain() {
        this.gain = this.init * this.percent
        return this.gain
    }

    appendTable() {
        this.row.find('.init').val(this.init)
        this.row.find('.roll').val(this.roll)
        this.row.find('.gainPer').val(`${this.percent * 100}%`)
        this.row.find('.gainActual').val(this.gain)
        this.row.find('.gainPerWeek').val(this.gain * 7)
    }
    runCalcs() {
        this.newRoll();

        this.getMod();

        this.calcPercent();

        this.calcGain();

        this.appendTable();
    }
}


const elkian = new Investor('elkian', 2000);
const flynt = new Investor('flynt', 2000);
const gus = new Investor('gus', 3500);
const gart = new Investor('gart', 2000);
const vada = new Investor('vada', 1000);

const investors = [elkian,flynt,gus,gart,vada]

const runAllCalcs = () => {
    for (let investor of investors) {
        investor.runCalcs()
    }
}

$('#investors').on('change', 'input', function(evt){
    runAllCalcs();
})

$('#investors').on('click', 'button', function(evt){
    evt.preventDefault();
    runAllCalcs();
})