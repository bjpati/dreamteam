/* eslint-disable */


class DreamTeam {
  constructor(playersArray = []) {
    this.observers = []
    this.searchPointer=0;   
    this.players = playersArray;
    this.searchResultsPromiseState={};
    this.currentPlayerId = 0;
    this.detailsPointer = 0;
    //this.currentPlayerPromiseState={};
  }


addObserver(callback) {
    this.observers=[...this.observers,callback];
}
removeObserver(callback){
this.observers= this.observers.filter(checkCallback); 
function checkCallback(cb){
  return  cb!==callback;
}
}

notifyObservers(payload){
    try{     
   this.observers.forEach(function invokeObserverCB(obs){obs(payload);})
}
    catch(err){console.error(err); } 
}

  addToTeam(playerToAdd) {
   // console.log("test10000");
    //console.log(playerToAdd.player);
    //  if (this.players.find(findPlayerCB)) {
    //   return;
    //   }
/*
     function findPlayerCB(player) {
      console.log(player);
      return player.id === playerToAdd.id;
    }*/
    
    /*let x = 1;
    for(let i =0; i<11; i++){
      if(this.players[i]){
        if(this.players[i].player.id===playerToAdd.id)
        x=0;
      }
    }
   if(x===1){ */
   this.players[this.searchPointer]= playerToAdd;
   this.notifyObservers({addPlayer:playerToAdd});
  
    //console.log(this.players);
  }


  removePlayer(playerToRemove){

    function hasSameIdCB(player) {
    
      if (player.id !== playerToRemove.id)
          return true;
      else
          return false;
  }

  if(this.players.find(findPlayerCB)){
    this.players = this.players.filter(hasSameIdCB);
  
}


function findPlayerCB(player) {
  return player.id === playerToAdd.id;
}


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


  setCurrentPlayer(id){

   /* function notifyACB(){
      this.notifyObservers(); 
      }*/

    if(id && id!==this.currentPlayerId){
    this.currentPlayerId = id;
    //this.notifyObservers({dishId:id});
    }
  }
 

}

export default DreamTeam
