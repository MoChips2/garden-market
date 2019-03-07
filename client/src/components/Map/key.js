require('dotenv').config();
console.log('keys.js is loaded');

exports.googleAPI = {
  apiKey:process.env.API_KEY
}

console.log('End Loading keys.js..');