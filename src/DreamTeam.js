/* eslint-disable */
class DreamTeam {
  constructor() {
    this.observers = []
    this.players = []
  }

  addToTeam(playerToAdd) {
    if (this.players.find(playerToAdd)) {
      return
    }

    this.playerToAdd = [...this.players, playerToAdd]

    function findPlayerCB(dish) {
      return player.id === playerToAdd.id
    }
  }
}

export default DreamTeam
