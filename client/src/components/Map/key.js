require("dotenv").config()
console.log("Loding...");

var googleAPI = {
  apiKey: process.env.API_KEY
}
console.log(googleAPI);
export default googleAPI;