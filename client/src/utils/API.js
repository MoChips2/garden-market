import axios from "axios";

export default {
    // search: function(query) {

    //     return axios.get(query)
    // },

    saveMarket: function(marketData) {

        return axios.post("/api/markets", marketData);

    },
    getMarkets: function() {
        console.log("API line 16")
        return axios.get("/api/markets")
    },

    getOneMarket: function(id) {
        // console.log("getting market by id: " + id);
        return axios.get("/api/markets/" + id);
    },
    updateMarket: function(id, updatedMarketData) {
        console.log("updating market by id: " + id);
        console.log(updatedMarketData);
        return axios.put(`/api/markets/${id}`, updatedMarketData);
    },

    pushMessage: function(id, message) {
        console.log("API line: 30");
        console.log(id)
        console.log(message)
        console.log("API line: 33")
        return axios.post(`/api/markets/${id}`, message)
    },

    sendJoin: function(id, joinMessage) {
        console.log("API line: 38");
        console.log(id)
        console.log(joinMessage)
        console.log("API line: 41")
        return axios.post(`/api/markets/join/${id}`, joinMessage)
    },

    getPublicMessages: function(id) {
        console.log(id)
        return axios.get("api/markets/" + id);
    },

    geocodeAddress: function(address) {
        console.log("searching for: " + address);
        return axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
            params:{
                address: address,
                key: "AIzaSyCkb1B8yUakYSWHYbogPL28_aN95F99qhY"
            }
        })
    }

}

