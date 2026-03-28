#!/usr/bin/node
const request = require('request');

// The first argument is the Movie ID
const movieID = process.argv[2];
const movieURL = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

/**
 * Fetches character names based on the order provided in the film data.
 * @param {Array} characterUrls - List of character API endpoints.
 * @param {number} index - Current index in the list to maintain order.
 */
function fetchCharacters (characterUrls, index) {
  if (index >= characterUrls.length) {
    return;
  }

  request(characterUrls[index], (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const characterData = JSON.parse(body);
      console.log(characterData.name);

      // Move to the next character in the list to ensure order
      fetchCharacters(characterUrls, index + 1);
    }
  });
}

// Initial request to get the movie details
request(movieURL, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    // Start fetching characters starting from the first one in the array
    fetchCharacters(characters, 0);
  } else {
    console.log(`Error: Status code ${response.statusCode}`);
  }
});
