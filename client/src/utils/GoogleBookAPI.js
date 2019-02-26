import axios from "axios";
require("dotenv").config();

var keys = require('../key.js');

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + keys.API_KEY;

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};