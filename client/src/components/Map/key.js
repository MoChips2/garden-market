require('dotenv').config();
console.log('keys.js is loaded');

var googleAPI = {
  apiKey:process.env.API_KEY
}

module.exports = googleAPI;

console.log('End Loading keys.js..');