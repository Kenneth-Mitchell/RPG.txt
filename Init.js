import { Character } from './Character.js';
import { displayCharacterInfo } from './Utility.js';
import { STORYI } from './Story.js';
import { UIManager } from './UIManager.js';

async function initializeGame() {
    const PlayerCharacter = new Character() // Create the player's character
    displayCharacterInfo(PlayerCharacter);   // Display character info on the screen
    await displayInitialStory();                  // Display the initial story or setting
    await promptActions();                        // Prompt the player to choose an action
    return PlayerCharacter;
}


async function displayInitialStory() {
    await UIManager.displayMessage(STORYI[0].text);
}

async function promptActions() {
    await UIManager.displayMessage('What do you do?');
    await UIManager.displayMessage('Here are the actions available to you:')
    await UIManager.displayMessage('(c)arouse');
}

export { initializeGame };