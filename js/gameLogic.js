let gameBoard = [
  'unclicked',
  'unclicked',
  'unclicked',
  'unclicked',
  'unclicked',
  'unclicked',
  'unclicked',
  'unclicked',
  'unclicked'
]

$('#playerOne').animate({'font-size': '45px'}, 0)

let whoseTurn = "playerOne";

$('.game-cell').click(function() {
  if (gameBoard[$(this).attr('id')] === 'unclicked') {
    recordChoice($(this).attr('id'));
    //checkForWin();
    swapPlayer();
    finishTest();
  }
});

function recordChoice (cellIndex) {
  if (whoseTurn === 'playerOne') {
    $(`#${cellIndex}`).addClass('playerOne');
    gameBoard[cellIndex] = 'playerOne';
    return;
  }
  if (whoseTurn === 'playerTwo') {
    $(`#${cellIndex}`).addClass('playerTwo');
    gameBoard[cellIndex] = 'playerTwo';
    return;
  }
}

function swapPlayer () {
  if (whoseTurn === 'playerOne') {
    whoseTurn = 'playerTwo';
    $('#playerTwo').animate({'font-size': '45px'}, 200)
    $('#playerOne').animate({'font-size': '15px'}, 200)
    return;
  }
  if (whoseTurn === 'playerTwo') {
    whoseTurn = 'playerOne';
    $('#playerOne').animate({'font-size': '45px'}, 200)
    $('#playerTwo').animate({'font-size': '15px'}, 200)
    return;
  }
}

function finishTest () {
  // test for a win
  // 0 1 2
  // 3 4 5
  // 6 7 8
  // eight line combinations (012)(345)(678)(036)(147)(258)(048)(246)
  let combinationsArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
  combinationsArray.forEach( function(currentCombination) {
    if (gameBoard[currentCombination[0]] === 'unclicked' || gameBoard[currentCombination[1]] === 'unclicked' || gameBoard[currentCombination[2]] === 'unclicked') {

    } else {
      if (gameBoard[currentCombination[0]] === gameBoard[currentCombination[1]] && gameBoard[currentCombination[1]] === gameBoard[currentCombination[2]]) console.log(`${gameBoard[currentCombination[0]]} has won!`);
    }
  })


}
