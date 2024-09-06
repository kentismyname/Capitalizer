const inputTextArea = document.getElementById('inputText');
const outputTextArea = document.getElementById('outputText');
const historyList = document.getElementById('historyList');

// Function to capitalize text and update the output textarea
function capitalizeText() {
    const text = inputTextArea.value;
    const capitalizedText = text.toUpperCase();
    outputTextArea.value = capitalizedText;
}

// Function to update the history list
function updateHistory(capitalizedText) {
    if (capitalizedText.trim() !== "") { // Check if the text is not empty
        const listItem = document.createElement('li');
        listItem.textContent = capitalizedText;
        historyList.appendChild(listItem);
    }
}

// Event listener for typing
inputTextArea.addEventListener('input', capitalizeText);

// Event listener for pasting
inputTextArea.addEventListener('paste', function(event) {
    event.preventDefault(); // Prevent the default paste action
    const pastedData = (event.clipboardData || window.clipboardData).getData('text');
    inputTextArea.value = pastedData; // Set the input textarea value to the pasted data
    capitalizeText(); // Capitalize the pasted text
});

// Event listener for copy button
document.getElementById('copyBtn').addEventListener('click', function() {
    outputTextArea.select();
    document.execCommand('copy');
    updateHistory(outputTextArea.value); // Add capitalized text to history after copying
});
