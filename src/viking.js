// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    getAttack() {
        console.log(this.strength);
    }

    getReceiveDamage(damage) {
        console.log(this.health);
    }
}

// Viking
class Viking extends Soldier {
    constructor(name) {
        super(health, strength)
        this.name = name;
    }

    getReceiveDamage(damage) {
        if () {
            console.log("NAME has received DAMAGE points of damage")
        } else {
            console.log("NAME has died in act of combat")
        }
        getBattleCry() {
            console.log("Odin os pertenece a todos")
        }


    }

// Saxon
class Saxon extends Soldier {
    constructor(health, strength)

    getReceiveDamage(damage) {
        if () {
            console.log("A Saxon has received DAMAGE points of damage")
        } else {
            console.log("el sajon ha A Saxon has died in combat")
        }

    }
}

// War
class War { }
