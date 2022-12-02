/* eslint-disable */
let i = 0;
function StadionView(props){

    return ( 
        <div> 
            <div class="title">
            Your Dream Team
            </div>
         <div class="attacker"> 
            <div class ="player10"> {showPlayerACB(10)}</div>
            <div class ="player9"> {showPlayerACB(9)}</div>
            <div class ="player8"> {showPlayerACB(8)}</div>
         </div>
        <div class ="midFilder">
            <div class ="player7"> {showPlayerACB(7)}</div>
            <div class ="player6"> {showPlayerACB(6)}</div>
            <div class ="player5"> {showPlayerACB(5)}</div>
        </div>

        <div class ="defender">
            <div class ="player4"> {showPlayerACB(4)}</div>
            <div class ="player3"> {showPlayerACB(3)}</div>
            <div class ="player2"> {showPlayerACB(2)}</div>
            <div class ="player1"> {showPlayerACB(1)}</div>

        </div>
        <div class = "goalKeeper"> {showPlayerACB(0)}</div>

        </div>
    
    
    )

        function showPlayerACB(index){
            if (!props.players[index]){
                return (<div> 
                <button onClick={searchPlayerACB}>
                <span class="choosePlayer"> 
                <img src={"https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-add-vector-icon-png-image_470700.jpg"}/>
                </span>
                </button> 
             </div>)
            }
            
            else 
            return (<div> 
                <button onClick={console.log("")}>
                <span class="choosePlayer"> 
                <img src={"#"}/>
                <span class="playerName"></span>
                </span>
                </button> {props.players[index].name}
             </div>)
            
            
        }
//nevigation to the result in the sidebar
        function searchPlayerACB(){
            console.log(i++);
        }
    }


export default StadionView;