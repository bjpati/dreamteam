/* eslint-disable */

function SearchResultsView(props) {
    console.log(props);

    function playerACB(player){
    return (

        <div>
        
          <img class="imageResult" src={player.player.photo} height="50"/> 
          <div>{player.player.name} </div>
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

