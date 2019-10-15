// a place for all declarations and variables
let whoseTurn = 1;
let playerOneName = "Gary";
let playerTwoName = "Ash";
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let chosenCharacters = [];

$('#playerOne').animate({'font-size': '45px'}, 0)
$('p#playerOne').text(playerOneName);
$('p#playerTwo').text(playerTwoName);

function recordChoice (cellIndex) {
  if (whoseTurn === 1) {
    $(`#${cellIndex}`).css({'background-image': `url(${chosenCharacters[0]})`});
    board[cellIndex] = 1;
    swapPlayer();

    idealMove();

  }
  if (whoseTurn === 2) {
    $(`#${cellIndex}`).css({'background-image': `url(${chosenCharacters[1]})`});
    board[cellIndex] = 2;
    swapPlayer();

  }

  setTimeout(finishTest, 200);
}

function swapPlayer () {
  if (whoseTurn === 1) {
    whoseTurn = 2;
    $('#playerTwo').animate({'font-size': '45px'}, 200)
    $('#playerOne').animate({'font-size': '15px'}, 200)
    return;
  }
  if (whoseTurn === 2) {
    whoseTurn = 1;
    $('#playerOne').animate({'font-size': '45px'}, 200)
    $('#playerTwo').animate({'font-size': '15px'}, 200)
    return;
  }
}

function finishTest () {
  let testList = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
  testList.forEach( function(test) {
    if (board[test[0]] === 0 || board[test[1]] === 0 || board[test[2]] === 0) {
    } else {
      if (board[test[0]] === board[test[1]] && board[test[1]] === board[test[2]])
      gameover(board[test[0]]);
    }});

  // test for draw
  let emptyCount = 0;
  board.forEach(function(i) {if (i === 0) emptyCount++;});
  if (emptyCount === 0) gameover('draw');
}

function gameover(i) {
  turnPage('#gameScreen', '#gameoverScreen');

  setTimeout(function() {
    if (i === 'draw') {
      $('#gameResults').text(`The game was a draw`);
    } else if (i === 1) {
      $('#gameResults').text(`${playerOneName} has won!`);
    } else if (i === 2) {
      $('#gameResults').text(`${playerTwoName} has won!`);
    }
  }, 0);
}
