// Import the file system module from Node.js
const fs = require('fs').promises;

// Function to read the file content asynchronously
async function readFileContent(filePath) {
    try {
        // Read the file content in UTF-8 encoding
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content); // Output the content to the console
        return content;
    } catch (error) {
        // Log any errors that occur during file reading
        console.error('Error reading file:', error);
    }
}

// Replace 'paragraph.txt' with the path to your text file
readFileContent('paragraph.txt');
