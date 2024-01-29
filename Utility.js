import { BASE_STATS, ADJECTIVES, NOUNS } from "./Constants.js";
import { UIManager } from "./UIManager.js";

function generateRandomName() {
    const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    return `${adjective} ${noun}`;
}

function rollDice(numberOfDice, sides) {
    let total = 0;
    for (let i = 0; i < numberOfDice; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
}

function rollStats() {
    const stats = BASE_STATS;
    for (const ability in BASE_STATS) {
        stats[ability]["score"] = rollDice(3, 6);
    }
    return stats;
}

function calcMods(stats) {
    for (const ability in BASE_STATS) {
        stats[ability]["modifier"] = Math.floor((BASE_STATS[ability]["score"] - 10) / 2);
    }
    return stats
}


function randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

function displayCharacterInfo(character) {
    UIManager.updateCharacterInfo(character);
}

export { generateRandomName, rollDice, rollStats, randomProperty, displayCharacterInfo, calcMods };