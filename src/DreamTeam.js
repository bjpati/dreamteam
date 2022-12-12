/* eslint-disable */
class DreamTeam {
  constructor(currentPlayerId, searchPointer, detailsPointer) {
    this.observers = []
    this.searchPointer=0;    
    this.players = [];
    this.searchResultsPromiseState={};
    this.searchParams={};
    this.currentPlayerPromiseState={};
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
    // if (this.players.find(findPlayerCB)) {
    //   return;
    // }

    
   //this.players=[...this.players, playerToAdd];
   console.log("test dreamteam");
   console.log(this.searchPointer);
   this.players[this.searchPointer]=playerToAdd;

   
    
    function findPlayerCB(player) {
      return player.id === playerToAdd.id
    }
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


  setSearch(name){
    this.searchParams.search=name;
 }

 doSearch(search){

  function notifyACB(){
    this.notifyObservers(); 
    }

    resolvePromise(searchPlayers(search), this.searchResultsPromiseState, notifyACB.bind(this));
  }

}

export default DreamTeam
