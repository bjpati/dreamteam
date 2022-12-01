/* eslint-disable */
import StadionView from '../views/stadionView.js'


export default function Stadion (props) {
 
  return <StadionView 
  players = {props.model.players}
  remove ={onRemovePlayerACB} 
  setCurrentPlayer={onSetCurrentPalyerACB}

  />

   function onRemovePlayerACB (player) {
    props.model.removePlayer(player)
  }

  function onSetCurrentPalyerACB (id) {
    props.model.setCurrentPlayer(id)
  } 
}