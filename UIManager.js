// UIManager.js
class UIManager {
    // UIManager.js
    static updateCharacterInfo(character) {
        // Update character information in the DOM
        const characterInfoElement = document.getElementsByClassName('characterInfo')[0];

        // Create the table
        const table = document.createElement('table');
        const tableBody = document.createElement('tbody');

        // Create the table rows
        for (const ability in character.stats) {
            const row = document.createElement('tr');

            // Create the table cells
            const statNameCell = document.createElement('td');
            statNameCell.textContent = ability;
            row.appendChild(statNameCell);

            const statScoreCell = document.createElement('td');
            statScoreCell.textContent = character.stats[ability].score;
            row.appendChild(statScoreCell);

            const statModCell = document.createElement('td');
            statModCell.textContent = character.stats[ability].modifier;
            row.appendChild(statModCell);

            // Add the row to the table body
            tableBody.appendChild(row);
        }

        // Add the table body to the table
        table.appendChild(tableBody);

        // Clear the character info element
        characterInfoElement.innerHTML = '';
        characterInfoElement.innerHTML = `
            <h2>${character.name}</h2>
            <p>Class: ${character.class.name}</p>
        `;

        // Add the table to the character info element
        characterInfoElement.appendChild(table);
    }

    static displayMessage(message) {
        // Create a new <p> element for the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        
        // Get the output element
        const output = document.querySelector('.output');
        
        // Append the new <p> element to the output
        output.appendChild(messageElement);
        
        // Optionally, you can add a line break between messages
        const lineBreak = document.createElement('br');
        output.appendChild(lineBreak);
        
        console.log(message);
    }
    
}

export { UIManager };