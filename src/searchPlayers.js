/* eslint-disable */
import { API_KEY, BASE_URL } from "./apiConfig";

function searchPlayers(params) {
    console.log(params)
   return myAPICall(new URLSearchParams(params)).then(transformSearchResultACB);
}

function transformSearchResultACB(response) {
        return response.response;
}

function myAPICall(apiParams) {
    function treatHTTPResponseACB(response) {
        if (!response.ok) throw new Error("API problem " + response.status);
        return response.json();
    }
    return fetch(BASE_URL + apiParams, {
        "method": "GET",
        "headers": {
            'X-Mashape-Key': API_KEY,
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        }
    }).then(treatHTTPResponseACB);
}

export {searchPlayers}
