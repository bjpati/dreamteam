/* eslint-disable */
import StadionView from '../views/stadionView.js'


function Stadion (props) {
 
  {console.log("stadion presenter props")}
  {console.log(props)}
  return <StadionView 
  players = {props.model.players}
  remove ={onRemovePlayerACB} 
  setCurrentPlayer={onSetCurrentPalyerACB}
  indexPointer={props.model.searchPointer}
  changePointer={testchangeACB}

  />

  function testchangeACB(index){
    props.model.changeIndex(index)
  }

   function onRemovePlayerACB (player) {
    props.model.removePlayer(player)
  }

  function onSetCurrentPalyerACB (id) {
    props.model.setCurrentPlayer(id)
  } 
}

export default Stadion;