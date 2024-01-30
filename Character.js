// Character.js
import { generateRandomName, randomProperty, rollStats, calcMods, rollDice } from './Utility.js';
import { CLASSES } from './Constants.js';
import { UIManager } from './UIManager.js';

class Character {
    constructor() {
        this.name = generateRandomName();
        this.class = randomProperty(CLASSES);
        this.stats = rollStats();
        this.abilities = this.stats["abilities"];
        this.abilities[this.class.primaryAbility]["score"] += 2;
        this.stats = calcMods(this.stats);
        this.inventory = [];
        this.friends = [];
    }
    check(ability, DC) {
        const d20 = rollDice(1, 20);
        const mod = this.abilities[ability]["modifier"];
        let dice = document.getElementsByClassName('dice')[0];
        setTimeout(function() {
            dice.textContent += " + " + mod + " = " + (d20 + mod); // Display final result
        }, 1000);
        return d20 + mod >= DC;
    }
    carouse() {
        if (this.check('personality', 10)){
            this.newFriend();
        }
        else {
            UIManager.displayMessage('You try to carouse with the locals, but they ignore you.');
        }
    }
    newFriend() {
        const name = generateRandomName();
        UIManager.displayMessage('You made a new friend! Their name is ' + name + '.');
        UIManager.displayMessage('You now have ' + this.friends.push(name) + ' friends.');
    }

}

export { Character };
