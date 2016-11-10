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
  // create new Board of size 'n'
  // create accumulator of all solutions
      
  // [[0,0], [0,0]] --> [[1,0], [0,0]]

  // recursion
  // base case -- has row or column conflict
  // 

  var newBoard = new Board({n: n});

  // push to solution array
  var solution = [];
    // recursive function (board)
  var findNRooks = function(board) {
    // base case  
    // if no row / column conflicts
      // if # of rooks === n
        // if passes both, push to solutions accumulator

    if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
      if (board.numPlayers() === n) {
        solutions.push(board.rows().slice());
      }
    } else {
      return;
    }
    // recursive step
      // row start at 0
      // column start at 0 
      //for each spot on the board (2 for loops)

    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        // if spot does not equal 1
        if (board.rows()[row][col] === 1) {
          // board[row][column] = 1
          continue;
        }
        board.togglePiece(row, col);
        findNRooks(board);
        board.togglePiece(row, col);
        // recursively call
      }
    }
  };
  findNRooks(newBoard);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
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
