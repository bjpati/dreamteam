/* eslint-disable */

function StadionView(props){
    return (
        <div> 

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
                <button class="choosePlayerButton" onClick={viewDetailsACB} onDragend={viewSerachACB}>
                <span class="choosePlayer"> 
                <img class="addImage"src={props.players[index].player.photo}/>
                </span>
                </button> 
                
             </div>)



          function searchPlayerACB(){
            props.changePointer(index);
            window.location.hash = "#search";
            //test(index);

                  
          }
            function viewDetailsACB(){
                props.showPointet(index);
                window.location.hash = "#details";
            }

            function viewSerachACB(){
                props.changePointer(index);
                window.location.hash = "#search";
            }
            
        }

    }


export default StadionView;