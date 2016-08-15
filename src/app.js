import { Players } from 'services/players';

export class App {
  static inject() { return [Players]; }
  constructor(players) {
    this.players = Players;
    this.player1sel = false;
    this.player2sel = false;
    this.player1win = false;
    this.player2win = false;
    this.player1val = "";
    this.player2val = "";
  }
  
  play(player) {
    if (!this.player1sel && player != this.player2val) {
      console.log("Player 1 Selected");
      this.player1val = player;
      this.player1sel = true;
    }
    else if (!this.player2sel && player != this.player1val) {
      console.log("Player 2 Selected");
      this.player2val = player;
      this.player2sel = true;
    }
  }
  
  remove(player) {
    if (player == 1) {
      this.player1val = "";
      this.player1sel = false;
    }
    else if (player == 2) {
      this.player2val = "";
      this.player2sel = false;
    }
  }
  
  winner(player) {
    if (this.player1sel && this.player2sel) {
      var p1i = this.players.indexOf(this.player1val)
      var p2i = this.players.indexOf(this.player2val)
      if (player == 1) {
        if (p2i < p1i) {
          this.players.splice(p1i, 1)
          this.players.splice(p2i, 0, this.player1val)
        }
        this.player1win = true;
        this.player2sel = false;
      }
      else if (player == 2) {
        if (p1i < p2i) {
          this.players.splice(p2i, 1)
          this.players.splice(p1i, 0, this.player2val)
        }
        this.player2win = true;
        this.player1sel = false;
      }
      setTimeout(() => {
        this.player1win = false;
        this.player2win = false;
        this.player1val = "";
        this.player2val = "";
        this.player1sel = false;
        this.player2sel = false;
      }, 2000)
    }
  }
}
