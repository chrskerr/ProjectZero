// a place for all declarations and variables
// only core logic code, except AI, all animations, page turns, resets, and listeners in pageFlow.js

const computerResponseTime = 650;
let whoseTurn = 1;
let whoStarted = 1;
let mode;
let chooserClickCount = 0; // for characterchooser listener logic
let roundCount = 1;
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let players = [
  {
  ref: 1,
  name: 'Ash',
  image: '',
  score: 0,
  tree: '',
},
{
  ref: 2,
  name: 'Gary',
  image: '',
  score: 0,
  tree: '',
},
];

let trees = {
  charmander: ['images/charmander.png', 'images/charmeleon.png', 'images/charizard.png'],
  squirtle: ['images/squirtle.png','images/wartortle.png','images/blastoise.png'],
  bulbasaur: ['images/bulbasaur.png','images/ivysaur.png','images/venusaur.png']
}

let themeSong = new Audio('sounds/battleVsTrainer_trim.mov');


function recordChoice (cellIndex) {
  // test for unique
  if (board[cellIndex] != 0) return;

  // record the choice visually and in the array, then swap turns
  if (whoseTurn === 1) {
    $(`#${cellIndex}`).css({'background-image': `url(${players[0].image})`});
    board[cellIndex] = 1;
    swapPlayer();

  } else if (whoseTurn === 2) {
    $(`#${cellIndex}`).css({'background-image': `url(${players[1].image})`});
    board[cellIndex] = 2;
    swapPlayer();
  }

  // testing for terminal state / finish
  setTimeout(function() {
    let outcome = terminalStateTest(board);
    if (outcome === -1) {
      if (whoseTurn === 2 && mode === 'computer') idealMove();
    } else if (outcome === 0){
      draw();
    } else {
      someoneWon(outcome);
    }
  }, computerResponseTime);
}

function swapPlayer () {
  if (whoseTurn === 1) {
    whoseTurn = 2;
    $('#playerTwo').animate({'font-size': '45px'}, 200)
    $('#playerOne').animate({'font-size': '15px'}, 200)
    return;
  } else if (whoseTurn === 2) {
    whoseTurn = 1;
    $('#playerOne').animate({'font-size': '45px'}, 200)
    $('#playerTwo').animate({'font-size': '15px'}, 200)
    return;
  }
}


function terminalStateTest(tempBoard) {
  let testList = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  let output;

  testList.forEach(function(test) {
    if (tempBoard[test[0]] === 0 || tempBoard[test[1]] === 0 || tempBoard[test[2]] === 0) { //ignore
    } else if (tempBoard[test[0]] === tempBoard[test[1]] && tempBoard[test[2]] === tempBoard[test[1]]) {
      output = tempBoard[test[1]]}
  });

  if (output) {
    return output;
  } else {
    // test for draw
    let emptyCount = 0;
    tempBoard.forEach(function(i) {if (i === 0) emptyCount++;});
    if (emptyCount === 0) return 0
  }

  return -1;
}
