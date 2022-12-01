/* eslint-disable */

function StadionView (props){
    {console.log("Hasan")}
return ( 
    <div> 
        <div class="title">
        Your Dream Team
     </div>
     <div> 
      {console.log("Hasan")}
     </div>
    </div>


);
    function doSomeThingACB(index){
        if (!players[index]){
            return (<div> 
            <button onClick={goToSidebarViewACB}>
            <span class="choosePlayer"> 
            <img src={"https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-add-vector-icon-png-image_470700.jpg"}/>
            </span>
            </button> 
         </div>)
        }
        
        else 
        return (<div> 
            <button onClick={goToSidebarViewACB}>
            <span class="choosePlayer"> 
            <img src={"#"}/>
            </span>
            </button> 
         </div>)
        
        
    }
}

