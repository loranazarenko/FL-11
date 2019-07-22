let _name = new WeakMap();
let _damage = new WeakMap();
let _agility = new WeakMap();
let _totalHP = new WeakMap();
let _win = new WeakMap();
let _losses = new WeakMap();
let _currentHP = new WeakMap();

class Fighter {

    constructor({ name, damage, agility, hp }) {
        _name.set(this, name);
        _damage.set(this, damage);
        _agility.set(this, agility);
        _totalHP.set(this, hp);
        _win.set(this, 0);
        _losses.set(this, 0);
        _currentHP.set(this, hp);
    }

    getWin() {
        return _win.get(this);

    }

    getLose() {
        return _losses.get(this);
    }

    getName() {
        return _name.get(this);
    }

    getDamage() {
        return _damage.get(this);
    }

    getAgility() {
        return _agility.get(this);
    }

    getHealth() {
        return _currentHP.get(this);
    }

    attack(myFighter2) {
        if (!this.getHealth()) {
            console.log(this.getName() + ' is dead');
            this.logCombatHistory();
            return;
        }
        if (!myFighter2.getHealth()) {
            console.log(myFighter2.getName() + ' is dead');
            myFighter2.logCombatHistory();
            return;
        }
        const handred = 100;
        const criticalHitChance = (handred - myFighter2.getAgility()) / handred;
        if (Math.random() < criticalHitChance) {
            let localDamage = this.getDamage();
            console.log(`${localDamage} localDamage`);
            myFighter2.dealDamage(localDamage);
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${myFighter2.getName()}`);
            console.log(`${this.getName()} life ${this.getHealth()}`);
            this.addWin();
            this.logCombatHistory();
            myFighter2.addLoss();
            myFighter2.logCombatHistory();
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.getWin()}, Losses: ${this.getLose()}`);
    }

    heal(curHP) {
        let currentHP = this.getHealth() + curHP;
        _currentHP.set(this, currentHP);
        if (this.getHealth() > _totalHP.get(this)) {
            _currentHP.set(this, _totalHP);
        }
    }

    dealDamage(dealDam) {
        let currentHP = this.getHealth() - dealDam;
        _currentHP.set(this, currentHP);
        if (this.getHealth() < 0) {
            _currentHP.set(this, 0);
        }
    }

    addWin() {
        let curWin = this.getWin() + 1;
        _win.set(this, curWin);
    }

    addLoss() {
        let curLos = this.getLose() + 1;
        _losses.set(this, curLos);
    }
}

function battle(myFighter1, myFighter2) {
    while (myFighter1.getHealth() > 0 && myFighter2.getHealth() > 0) {
        myFighter1.attack(myFighter2);
        myFighter2.attack(myFighter1);
    }
    if (!myFighter1.getHealth()) {
        console.log(myFighter1.getName() + ' is dead');
        myFighter1.logCombatHistory();
        return;
    }
    if (!myFighter2.getHealth()) {
        console.log(myFighter2.getName() + ' is dead');
        myFighter2.logCombatHistory();
        return;
    }
}

const fighter1 = new Fighter({ name: 'John', damage: 20, agility: 25, hp: 100 });
const fighter2 = new Fighter({ name: 'Jim', damage: 10, agility: 40, hp: 120 });
battle(fighter1, fighter2);
console.log(fighter1._name);

if (!fighter1.getHealth()) {
    const fifty = 50;
    fighter1.heal(fifty);
    console.log(fighter1.getHealth());
}