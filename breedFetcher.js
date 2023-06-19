const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode === 200) {
      const data = JSON.parse(body);

      try {
        callback(null, data[0].description);
      } catch (e) {
        callback(`Unable to find the breed ${breedName}`, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
