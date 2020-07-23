document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {}

function createBoard() {
  board.cells = [];

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      var cell = {
        row: i,
        col: j,
        isMine: Math.random () >= 0.7,
        hidden: true,
        isMarked: false
      }
      board.cells.push(cell); 
    }  
  }
 return board
}

//this functions starts the game
function startGame (cell) {
  createBoard();
  //Loop through board.cells
  for (var i = 0; i < board.cells.length; i++)
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])


  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  

  lib.initBoard()
}

//Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {

  for (var i = 0; i < board.cells.length; i++) { 
    if (board.cells[i].isMine == true && board.cells[i].isMarked == false) {
      return; 
    } else if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
      return;
    }
  }
  lib.displayMessage('You are a Winner!')
  }


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 

// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  
  for (var i = 0; i < surrounding.length; i++){
   if (surrounding[i].isMine == true) {
      count++;
    }
  }
  return count
}
