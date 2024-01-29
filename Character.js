// Character.js
import { generateRandomName, randomProperty, rollStats, calcMods } from './Utility.js';
import { CLASSES } from './Constants.js';

class Character {
    constructor() {
        this.name = generateRandomName();
        this.class = randomProperty(CLASSES);
        this.stats = rollStats();
        this.stats[this.class.primaryAbility]["score"] += 2;
        this.stats = calcMods(this.stats);
        this.inventory = [];
    }
    check(ability, DC) {
        const d20 = Math.floor(Math.random() * 20) + 1;
        const mod = this.stats[ability]["modifier"];
        return d20 + mod >= DC;
    }

}

export { Character };
