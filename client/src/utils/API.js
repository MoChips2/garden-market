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
        console.log("a =" +id)
        return axios.get("/api/markets/" + id)
    } 
 
}

