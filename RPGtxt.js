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
            } else if (inputValue === 't'){
                UIManager.displayMessage('You talk to Kenneth.');
                UIManager.displayMessage('"Hey... I think I know you from somewhere..."');
                UIManager.displayMessage('Would you be my valentine?');
                UIManager.displayMessage('y/n');
            } else if (inputValue === 'y'){
                UIManager.displayMessage('You are now Kenneth\'s valentine.');
                UIManager.displayMessage('You win the game!');
                UIManager.displayMessage('          LoveLoveLov                eLoveLoveLo\n'+
                '      veLoveLoveLoveLove          LoveLoveLoveLoveLo\n'+
                '   veLoveLoveLoveLoveLoveL      oveLoveLoveLoveLoveLove\n'+
                '  LoveLoveLoveLoveLoveLoveL    oveLoveLoveLoveLoveLoveLo\n'+
                ' veLoveLoveLoveLoveLoveLoveL  oveLoveLoveLoveLoveLoveLove\n'+
                ' LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove\n'+
                ' LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove\n'+
                '  LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo\n'+
                '  veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove\n'+
                '    LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo\n'+
                '      veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove\n'+
                '        LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo\n'+
                '          veLoveLoveLoveLoveLoveLoveLoveLoveLove\n'+
                '            LoveLoveLoveLoveLoveLoveLoveLoveLo\n'+
                '              veLoveLoveLoveLoveLoveLoveLove\n'+
                '                LoveLoveLoveLoveLoveLoveLo\n'+
                '                   veLoveLoveLoveLoveLo\n'+
                '                       veLoveLoveLo\n'+
                '                            ve');
            
            }
            else {
                UIManager.displayMessage('You do nothing.');
            }
            inputElement.textContent = ''; // Clear the input field
        }
    }
    });
});