/* eslint-disable */

if (!["#stadion", "#search", "#details"].find(findHashCB))
        window.location.hash = "#stadion";

function findHashCB(){
    window.location.hash;
}