const request = require("request");

const getcat = function(breed) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`;

  request(url, (error, response, body) => {
    if (error) {
      return console.error(error);
    }

    if (response.statusCode === 200) {
      const data = JSON.parse(body);

      try {
        console.log(data[0].description);
      } catch (e) {
        console.log(`Unable to find the breed ${breed[0]}`);
      }
    }
  });
};

getcat(process.argv.slice(2));
