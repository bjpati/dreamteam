/* eslint-disable */

function SearchResultsView(props) {
    

    function playerACB(player){
        function choosePlayerCB(){
            props.choosePlayer(player);
            window.location.hash = "#stadion";
          }
   
    return (

        <div class="searchResults">
          <img class="imageResult" src={player.player.photo}/> 
          <div class="playerName">{player.player.name} </div>
          <button onClick={choosePlayerCB}>Add player!</button>
        </div>  
    )

  
    
    }
    
   
    
    return(
        <div class="SerachResultArray" >
              {props.searchResults.map(playerACB)}

        </div>           
    ); 
}
export default SearchResultsView;

