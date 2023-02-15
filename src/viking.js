// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// // Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"

    }

}



// // Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// // War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let res = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        this.saxonArmy.pop()
        return res

    }

    saxonAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let res = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

        this.vikingArmy.forEach((Viking, i )=> {
            if(Viking.health <= 0){
                this.vikingArmy.splice(this.vikingArmy[i], 1)
            }

        })
      

        return res
    }


    showStatus() {

        if (this.saxonArmy == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}


