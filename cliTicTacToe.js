class TicTacToe {
  constructor() {
    this.squares = [
      null,
      { array: 2, pos: 0 },
      { array: 2, pos: 1 },
      { array: 2, pos: 2 },
      { array: 1, pos: 0 },
      { array: 1, pos: 1 },
      { array: 1, pos: 2 },
      { array: 0, pos: 0 },
      { array: 0, pos: 1 },
      { array: 0, pos: 2 },
    ];
  }
  newGame() {
    this.board = [[null, null, null], [null, null, null], [null, null, null]];
    this.player = 'X';
    console.log(this.player, this.board);
  }
  move(input) {
    this.board[this.squares[input].array][this.squares[input].pos] = this.player;
    if (this.checkVictory(this.player)) {
      console.log(`${this.player}, you win!`);
      this.newGame();
    } else {
      this.player = (this.player === 'X') ? 'O' : 'X';
      console.log(this.player, this.board);
    }
  }
  checkVictory() {
    for (let i = 0; i < 3; i++) {
      let count = 0;
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === this.player) count++;
      }
      if (count === 3) return true;
    }
    for (let j = 0; j < 3; j++) {
      let count = 0;
      for (let i = 0; i < 3; i++) {
        if (this.board[i][j] === this.player) count++;
      }
      if (count === 3) return true;
    }
    if (((this.board[0][0] && this.board[2][2]) || (this.board[2][0] && this.board[0][2])) && this.board[1][1]) {
      return true;
    }
    return false;
  }
}
const game = new TicTacToe();

