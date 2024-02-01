import { BASE_STATS, ADJECTIVES, NOUNS } from "./Constants.js";
import { UIManager } from "./UIManager.js";

function generateRandomName() {
    const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    return `${adjective} ${noun}`;
}

function rollDice(numberOfDice, sides, showRolls = true) {
    let total = 0;
    for (let i = 0; i < numberOfDice; i++) {
        var finalRoll = Math.ceil(Math.random() * sides);
        total += finalRoll;
        if (showRolls) {
            let d20 = document.getElementById("d20");
            let rollAnimation = setInterval(function() {
                let number = Math.ceil(Math.random() * sides);
                if (number < 10) { // Add a leading zero if the number is less than 10
                    number = "0" + number;
                }
                d20.textContent = number;
            }, 75);
        
            setTimeout(function() {
                clearInterval(rollAnimation); // Stop changing numbers
                if (finalRoll < 10) { // Add a leading zero if the number is less than 10
                    finalRoll = "0" + finalRoll;
                }
                d20.textContent = finalRoll; // Display final result
            }, 1000);
        }
    }
    return total;
}

function rollStats() {
    var stats = BASE_STATS;
    for (const ability in stats["abilities"]) {
        var score = stats["abilities"][ability]["score"];
        if (isNaN(score)) {
            continue;
        }
        stats["abilities"][ability]["score"] = rollDice(3, 6, false);
    }
    return stats;
}

function calcMods(stats) {
    const abilities = stats["abilities"];
    const saves = stats["saves"];
    
    
    for (const ability in abilities) {
        const score = abilities[ability]["score"];
        stats["abilities"][ability]["modifier"] = Math.floor((score - 10) / 2);
    }

    for (const save in saves) {
        const ability = saves[save]["ability"];
        const mod = abilities[ability]["modifier"];
        stats["saves"][save]["modifier"] = mod;
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