/* eslint-disable */
//props.playerDetailsToDisplay
function DetailsView(props){
    return (
        <div>
                <p>Name: {props.playerDetailsToDisplay.player.firstname} {props.playerDetailsToDisplay.player.lastname}</p>
                <img src={props.playerDetailsToDisplay.player.photo} height="100" />
                <p>Age: {props.playerDetailsToDisplay.player.age}</p>
                <p>Birth date: {props.playerDetailsToDisplay.player.birth.date}</p>
                <p>Nationality: {props.playerDetailsToDisplay.player.nationality}</p>
                <p>Height: {props.playerDetailsToDisplay.player.height}</p>
                <p>weight: {props.playerDetailsToDisplay.player.weight}</p>
                <p>Statistics:</p>
                <p>Total goals: {props.playerDetailsToDisplay.statistics[0].goals.total}</p>
                <p>Total passes: {props.playerDetailsToDisplay.statistics[0].passes.total}</p>
                <p>Cards:
                    <br/>
                    Yellow: {props.playerDetailsToDisplay.statistics[0].cards.yellow}
                    <br/>
                    Red: {props.playerDetailsToDisplay.statistics[0].cards.red}
                </p>
                <button onClick={backToStadionACB} class="cancelbtn" >Back</button>
        </div>
    ); 

    function backToStadionACB(){
        window.location.hash = "#stadion";
    }

};

export default DetailsView;