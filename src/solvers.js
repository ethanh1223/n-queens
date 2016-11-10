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

// var solution = [];
  var solutionObj = {};

  var solution = undefined;

  var newBoard = new Board ({n: n});

  var findNRooks = function (board, row, col) {

    row = row || 0;
    col = col || 0;
    // base case
    if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
      if (board.numPlayers() === n) {

        var copyBoard = [];

        for (var i = 0; i < board.rows().length; i++) {
          copyBoard.push(board.rows()[i].slice());
        }
        if (solutionObj[copyBoard] === undefined) {
          solutionObj[copyBoard] = copyBoard;
          solution = copyBoard;
        }
      }
    } else {
      return;
    }

    //recursive case
    for (; row < n; row++, col = 0) {
      for (; col < n; col++) {
        if (board.rows()[row][col] === 1) {
          continue;
        }
        board.togglePiece(row, col);
        findNRooks(board, row, col);
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
  // var solution = [];
  // var solutionObj = {};

  var solutionCount = 0;

  var newBoard = new Board ({n: n});

  var findNRooks = function (board, row, col) {

    row = row || 0;
    col = col || 0;
    // base case
    if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
      if (board.numPlayers() === n) {
        solutionCount++;
        // var copyBoard = [];

        // for (var i = 0; i < board.rows().length; i++) {
        //   copyBoard.push(board.rows()[i].slice());
        // }
        // if (solutionObj[copyBoard] === undefined) {
        //   solutionObj[copyBoard] = copyBoard;
        //   solution.push(copyBoard);
        // }
      }
    } else {
      return;
    }

    //recursive case
    for (; row < n; row++, col = 0) {
      for (; col < n; col++) {
        if (board.rows()[row][col] === 1) {
          continue;
        }
        board.togglePiece(row, col);
        findNRooks(board, row, col);
        board.togglePiece(row, col);
      }
    }
  };

  findNRooks(newBoard);
  console.log(solutionCount);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutionCount));
  return solutionCount;
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
