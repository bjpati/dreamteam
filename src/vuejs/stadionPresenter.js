/* eslint-disable */
import StadionView from '../views/stadionView.js'

function Stadion (props) {
  return <StadionView 
  players = {props.model.players}
  remove ={onRemovePlayerACB} 
  setCurrentPlayer={onSetCurrentPalyerACB}
  indexPointer={props.model.searchPointer}
  changePointer={testchangeACB}
  showPointet={showDetailsACB}
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

  function showDetailsACB(index){
    props.model.setPlayerDetails(index);
  }
}

export default Stadion;