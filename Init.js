import { Character } from './Character.js';
import { displayCharacterInfo } from './Utility.js';
import { STORYI } from './Story.js';
import { UIManager } from './UIManager.js';

function initializeGame() {
    const PlayerCharacter = new Character() // Create the player's character
    displayCharacterInfo(PlayerCharacter);   // Display character info on the screen
    displayInitialStory();                  // Display the initial story or setting
    promptActions();                        // Prompt the player to choose an action
    return PlayerCharacter;
}


function displayInitialStory() {
    UIManager.displayMessage(STORYI[0].text);
}

function promptActions() {
    UIManager.displayMessage('What do you do?');
    UIManager.displayMessage('Here are the actions available to you:')
}

export { initializeGame };