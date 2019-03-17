import axios from "axios";
require("dotenv").config();
// var keys = require('../components/Map/key');

export default {

    saveMarket: function(marketData) {

        return axios.post("/api/markets", marketData);

    },
    getMarkets: function() {
        console.log("API line 16")
        return axios.get("/api/markets")
    },

    getOneMarket: function(id) {
        console.log("step 2")
        // console.log("getting market by id: " + id);
        return axios.get("/api/markets/" + id);
    },
    updateMarket: function(id, updatedMarketData) {
        console.log("updating market by id: " + id);
        console.log(updatedMarketData);
        return axios.put(`/api/markets/${id}`, updatedMarketData);
    },

    pushMessage: function(id, message) {
        console.log(id)
        console.log(message)
        return axios.post(`/api/markets/${id}`, message)
    },

    sendJoin: function(id, joinMessage) {
        console.log("API line: 38");
        console.log(id)
        console.log(joinMessage)
        console.log("API line: 41")
        return axios.post(`/api/markets/join/${id}`, joinMessage)
    },

    // getPublicMessages: function(id) {
    //     console.log(id) // this keeps running
    //     return axios.get(`api/markets/messages/${id}`);
    // },

    geocodeAddress: function(address) {
        console.log("searching for: " + address);
        return axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json", {
            // https://cors-anywhere.herokuapp.com/    (I removed this from before the link above to force the search button to work.)
            params:{
                address: address,
                key: "AIzaSyCkb1B8yUakYSWHYbogPL28_aN95F99qhY"
              //  key:keys.googleAPI
            }
        })
    }

}

