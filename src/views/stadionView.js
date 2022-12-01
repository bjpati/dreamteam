/* eslint-disable */
let i = 0;
function StadionView(props){

    return ( 
        <div> 
            <div class="title">
            Your Dream Team
         </div>
         <div> 
         {doSomeThingACB(4)}
         </div>
        </div>
    
    
    )

        function doSomeThingACB(index){
            if (!props.players[index]){
                return (<div> 
                <button onClick={console.log(toDo())}>
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
                </span>
                </button> {props.players[index].name}
             </div>)
            
            
        }

        function toDo(){
            return i++;
        }
    }


export default StadionView;