/* eslint-disable */
import DetailsView from "../views/detailsView";

function Details(props){
    console.log("PLAYERRESULT");
    console.log(props.model.players);
    return 
        <DetailsView
        playerDetailsToDisplay= {props.model.players.find(findPlayerCB)}
        /> 



        function findPlayerCB(player) {
            return player.player.id === props.currentPlayerId;
          }     


 
        
    
}

export default Details;