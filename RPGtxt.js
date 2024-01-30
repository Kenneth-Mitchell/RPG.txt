import { initializeGame } from './Init.js';
import { UIManager } from './UIManager.js';

let playerCharacter;

document.addEventListener('DOMContentLoaded', () => {
    playerCharacter = initializeGame();
    setupInputListener();
});

function setupInputListener() {
    let inputElement = document.querySelector('.input');
    inputElement.addEventListener('keydown', handleInput);
}

function handleInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent line break
        let inputElement = document.querySelector('.input');
        let inputValue = inputElement.textContent.trim(); // Use textContent
        if (inputValue === 's') {
            if (playerCharacter.check('strength', 10)) {
                UIManager.displayMessage('You succeed!');
            }
        } else if (inputValue === 'c') {
            playerCharacter.carouse();
        } else {
            UIManager.displayMessage('You do nothing.');
        }
        inputElement.textContent = ''; // Clear the input field
    }
}
