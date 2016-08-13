import { Players } from 'services/players';

export class App {
  static inject() { return [Players]; }
  constructor(players) {
    this.players = Players;
    this.player1sel = false;
    this.player2sel = false;
    this.player1val = "";
    this.player2val = "";
  }
  
  play(player) {
    if (!this.player1sel) {
      console.log("Player 1 Selected");
      this.player1val = player;
      this.player1sel = true;
    }
    else if (!this.player2sel) {
      console.log("Player 2 Selected");
      this.player2val = player;
      this.player2sel = true;
    }
  }
}
