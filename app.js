const inputTextArea = document.getElementById('inputText');
const outputTextArea = document.getElementById('outputText');
const historyList = document.getElementById('historyList');

// Function to capitalize text and update the output textarea
function capitalizeText() {
    const text = inputTextArea.value;
    const capitalizedText = processText(text);
    outputTextArea.value = capitalizedText;
}

// Function to process the input text by removing text before "BB", "BKB", "BWB", or "BAB" and capitalizing the rest
function processText(text) {
    // Regular expression to match any of the keywords "BB", "BKB", "BWB", or "BAB"
    const regex = /\b(BB|BKB|RKB|LKB|BWB|RWB|LWB|BAB|RAB|LAB|SB|RSB|LSB|BEB|REB|LEB)\b/i;
    const match = text.match(regex);
    
    if (match) {
        // Extract the text starting from the keyword to the end
        const startIndex = match.index;
        const resultText = text.substring(startIndex).toUpperCase();
        return resultText;
    }

    // If no keyword is found, return the capitalized version of the entire input
    return text.toUpperCase();
}

// Function to update the history list
function updateHistory(capitalizedText) {
    if (capitalizedText.trim() !== "") { // Check if the text is not empty
        const listItem = document.createElement('li');
        listItem.textContent = capitalizedText;
        
        // Prepend the new item to the top of the history list
        historyList.prepend(listItem);
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

function closeUpdateBox() {
    const updateBox = document.getElementById('updateBox');
    updateBox.style.display = 'none'; // Hide the update box when the X button is clicked
}
