/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var solution = [];

  var newBoard = new Board ({n: n});

  var findNRooks = function (board) {
    // base case
    if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
      if (board.numPlayers() === n) {
        var copyBoard = [];

        for (var i = 0; i < board.rows().length; i++) {
          copyBoard.push(board.rows()[i].slice());
        }
        solution = copyBoard;
      }
    } else {
      return;
    }

    //recursive case
    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        if (board.rows()[row][col] === 1) {
          continue;
        }
        board.togglePiece(row, col);
        findNRooks(board);
        board.togglePiece(row, col);
      }
    }
  };

  findNRooks(newBoard);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = [];
  var solutionObj = {};

  var newBoard = new Board ({n: n});

  var findNRooks = function (board) {
    // base case
    if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
      if (board.numPlayers() === n) {
        var copyBoard = [];

        for (var i = 0; i < board.rows().length; i++) {
          copyBoard.push(board.rows()[i].slice());
        }
        solution.push(copyBoard);
      }
    } else {
      return;
    }

    //recursive case
    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        if (board.rows()[row][col] === 1) {
          continue;
        }
        board.togglePiece(row, col);
        findNRooks(board);
        board.togglePiece(row, col);
      }
    }
  };

  findNRooks(newBoard);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
