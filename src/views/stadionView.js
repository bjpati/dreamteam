/* eslint-disable */
let i = 0;
function StadionView(props){
    return (
        <div> 
            <h1 class="title">
            Your Dream Team
            </h1>
            <div class ="footballGround" >

                
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

        </div>
    
    
    )

        function showPlayerACB(index){
            if (!props.players[index]){
                return (<div> 
                <button class="choosePlayerButton" onClick={searchPlayerACB}>
                <span class="choosePlayer"> 
                <img class="addImage"src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMn89o80Kkq3OvFtkibG0X9JEdT3fx-aLnA&usqp=CAU"}/>
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