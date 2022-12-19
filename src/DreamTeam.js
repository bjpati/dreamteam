/* eslint-disable */

import { toRaw } from "vue";


class DreamTeam {
  constructor(playersArray = []) {
    this.observers = []
    this.searchPointer=0;   
    this.players = playersArray;
    this.searchResultsPromiseState={};
    this.detailsPointer = 0;
  }


addObserver(callback) {
    this.observers=[...this.observers,callback];
}

notifyObservers(payload){
    try{     
   this.observers.forEach(function invokeObserverCB(obs){obs(payload);})
}
    catch(err){console.error(err); } 
}

  addToTeam(playerToAdd) {

    const y = toRaw(this.players);
    const x = Object.values(y);
    if (x.find(findPlayerCB)) {
      alert("The player already is in the team!");
       return;
       }

     function findPlayerCB(player) {
      return player.player.id === playerToAdd.player.id;
    }
    
   this.players[this.searchPointer]= playerToAdd;
   this.notifyObservers({addPlayer:playerToAdd});
  
  }

 changeIndex(index) {
 this.searchPointer=index;
 } 

 getPlayerFromFirebase(players){
   this.players = players;
 }

 setPlayerDetails(index){
   this.detailsPointer = index;
 }
 
}

export default DreamTeam
