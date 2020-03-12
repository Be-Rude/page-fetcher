const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2).toString();

request(input, (error, response, body) => {
  console.log(input);

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile('index.html', body);
  console.log('The file has been saved!');
});