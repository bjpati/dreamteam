/* eslint-disable */
class DreamTeam {
  constructor(currentPlayerId) {
    this.observers = []
    const player = {id:"6cb7dbe26a2d56b",
    name:"Nicolas Colazo",
    country:"AR",
    birth_date:"1990-07-08",
    foot:"Left",
    height:"175 cm",
    has_image:false};

    const player1 = {id:"4ab7dbe26a2d56b",
    name:"Lionell messi",
    country:"AR",
    birth_date:"1993-03-08",
    foot:"right",
    height:"170 cm",
    has_image:true}




    this.players = [player, player1];
    this.searchResultsPromiseState={};
    this.searchParams={};
    this.currentDishPromiseState={};
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
    if (this.players.find(findPlayerCB)) {
      return;
    }

    this.players= [...this.players, playerToAdd]

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


  setCurrentPlayer(id){

    function notifyACB(){
      this.notifyObservers(); 
      }

  if(id && id!==this.currentPlayerId){
  this.currentPlayerId = id;
  this.notifyObservers({dishId:id});
  //resolvePromise(getDishDetails(id),this.currentDishPromiseState, notifyACB.bind(this));


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
