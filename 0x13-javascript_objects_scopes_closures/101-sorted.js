#!/usr/bin/node

// Import the dictionary from 101-data.js
const { dict } = require('./101-data');

// Initialize the new dictionary
const newDict = {};

// Iterate through the original dictionary
for (const [userId, occurrences] of Object.entries(dict)) {
  // If the occurrence count is not yet a key in the new dictionary, add it
  if (!newDict[occurrences]) {
    newDict[occurrences] = [];
  }
  // Push the userId to the list of userIds for the current occurrence count
  newDict[occurrences].push(userId);
}

// Print the new dictionary
console.log(newDict);
