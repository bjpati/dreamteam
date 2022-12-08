/* eslint-disable */

function SearchResultsView(props) {
    console.log(props);

    function playerACB(player){
    return (

        <div class="searchResults">
          <img class="imageResult" src={player.player.photo}/> 
          <div class="playerName">{player.player.name} </div>
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

