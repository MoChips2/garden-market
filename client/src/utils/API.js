import axios from "axios";

export default {
    search: function(query) {

        return axios.get(query)
    },

    saveMarket: function(marketData) {
        
        return axios.post("/api/markets", marketData);

    },

    getMarkets: function() {

        return axios.get("/api/markets")
    },

    getOneMarket: function(id) {

        return axios.get("/api/maket/" + id)
    }

}

