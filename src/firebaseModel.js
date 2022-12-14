/* eslint-disable */
import DreamTeam from "./DreamTeam";
import firebaseConfig from "./firebaseConfig";
import { searchPlayers } from "./searchPlayers";
import firebase from "firebase/app";
import "firebase/database";
console.log("Ali");

firebase.initializeApp(firebaseConfig)
firebase.database().ref("test").set(2);
//const REF ="DreamTeam";
function observerReacap(model){
    function addingObserverCB(payload){
        console.log(payload)
    }
    model.addObserver(addingObserverCB);
}
/*function firebaseModelPromise(){
    function makeBigPromiseACB(firebaseData){

        function makePlayerPromiseCB(playerId){
            return console.log("HHah")
        }
    }
}*/

function updateFirebaseFromModel(model){
    function uppdateObserverFirebaseCB(payload){
        console.log(payload)


        if (payload && payload.DishId){
            firebase.database().ref(REF+"/currentPlayerId").set(model.currentPlayerId);
        }

        if(payload && payload.playerToAdd){
            firebase.database().ref(REF+"/players"+payload.playerToAdd.id).set(payload.playerToAdd.name);
        }
    }
    model.addObserver(uppdateObserverFirebaseCB);
    return;
}

export {observerReacap, updateFirebaseFromModel};