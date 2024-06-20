#!/usr/bin/node

const fs = require('fs');

// Get the file paths from command line arguments
const [fileA, fileB, fileC] = process.argv.slice(2);

try {
  // Read the contents of the first source file
  const dataA = fs.readFileSync(fileA, 'utf8');

  // Read the contents of the second source file
  const dataB = fs.readFileSync(fileB, 'utf8');

  // Concatenate the contents of the two source files
  const combinedData = dataA + dataB;

  // Write the concatenated contents to the destination file
  fs.writeFileSync(fileC, combinedData);

  console.log(`Successfully concatenated ${fileA} and ${fileB} into ${fileC}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
}
