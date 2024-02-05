import { initializeGame } from './Init.js';
import { UIManager } from './UIManager.js';


document.addEventListener('DOMContentLoaded', () => {
    initializeGame().then(playerCharacter => {
        setupInputListener();


    function setupInputListener() {
        let inputElement = document.querySelector('.input');
        inputElement.addEventListener('keydown', handleInput);
    }

    function handleInput(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent line break
            let inputElement = document.querySelector('.input');
            let inputValue = inputElement.textContent.trim(); // Use textContent
            playerCharacter.day++;
            UIManager.setDay(playerCharacter.day);
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
    });
});