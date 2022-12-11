// grab DOM elements

// set event listeners

const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const button = document.getElementById('update-button');

button.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
});

const pronounDisplay = document.getElementById('pronoun-display');
const pronounInput = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('update-pronounButton');

pronounButton.addEventListener('click', () => {
    pronounDisplay.textContent = pronounInput.value;
});

