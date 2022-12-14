/* eslint-disable */
import DetailsView from "../views/detailsView";

function Details(props){
    console.log(props.model.players);
    if (props.model.detailsPointer){
        return (
            <DetailsView class="details"
                playerDetailsToDisplay = {props.model.players[props.model.detailsPointer]}
            /> 
            
            );
    }
        
    
}

export default Details;