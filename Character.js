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
        this.day = 0;
        this.Kenneth = false;
    }
    
    async check(ability, DC) {
        let mod = this.abilities[ability]["modifier"];

        let checkTotal_html = document.getElementById('checktotal');
        let modifier_html = document.getElementById('modifier');
        let checkType_html = document.getElementById('checktype');
        let DC_html = document.getElementById('DC');
        let checkResult_html = document.getElementById('checkresult');

        DC_html.textContent = "DC: " + DC;
        checkType_html.textContent = ability + " check";
        modifier_html.textContent = mod;
        checkTotal_html.textContent = "Rolling...";
        checkResult_html.textContent = "";

        const d20 = rollDice(1, 20);

        await new Promise(resolve => {
            setTimeout(() => {
                checkTotal_html.textContent = (d20 + mod); // Display final result
                if (d20 == 20) {
                    document.getElementById("screen").style.animation = "none";
                    void document.getElementById("screen").offsetWidth; // Trigger reflow
                    document.getElementById("screen").style.animation = "shake 0.25s";
                    checkResult_html.textContent = "Critical Success!";
                    checkResult_html.style.color = "white";
                } else if (d20 == 1) {
                    document.getElementById("screen").style.animation = "";
                    void document.getElementById("screen").offsetWidth; // Trigger reflow
                    document.getElementById("screen").style.animation = "shake 0.25s";
                    checkResult_html.textContent = "Critical Failure!";
                    checkResult_html.style.color = "red";
                } else {
                    checkResult_html.textContent = (d20 + mod >= DC) ? "Success!" : "Failure!";
                    checkResult_html.style.color = "#00ff00";
                }
                resolve();
            }, 750);
        });
        if (d20 == 20) {
            return "crit";
        }

        return d20 + mod >= DC;
    }
    async carouse() {
        let result = await this.check('personality', 10);
        if (result == "crit"){
            this.newFriend("Kenneth");
        }
        else if (result) {
            this.newFriend();
        }
        else {
            UIManager.displayMessage('You try to carouse with the locals, but they ignore you.');
        }
    }
    newFriend(name = null) {
        if (name == "Kenneth") {
            UIManager.displayMessage('You made a new friend! Their name is Kenneth.');
            UIManager.displayMessage('You now have ' + this.friends.push("Kenneth") + ' friends.');
            this.Kenneth = true;
            UIManager.displayMessage('Kenneth wants to talk to you...');
            UIManager.displayMessage('(t) to talk to Kenneth.')
            return;
        }
        var name = generateRandomName();
        UIManager.displayMessage('You made a new friend! Their name is ' + name + '.');
        UIManager.displayMessage('You now have ' + this.friends.push(name) + ' friends.');
    }

}

export { Character };
