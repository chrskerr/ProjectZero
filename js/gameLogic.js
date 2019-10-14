let gameBoard = ['unclicked','unclicked','unclicked','unclicked','unclicked','unclicked','unclicked','unclicked','unclicked']

$('#playerOne').animate({'font-size': '45px'}, 0)

let whoseTurn = "playerOne";

$('.game-cell').click(function() {
  if (gameBoard[$(this).attr('id')] === 'unclicked') {
    recordChoice($(this).attr('id'));
    //checkForWin();
    swapPlayer();
  }
});

function recordChoice (cellIndex) {
  if (whoseTurn === 'playerOne') {
    $(`#${cellIndex}`).css({'background-image': `url(${chosenCharacters[0]})`});
    gameBoard[cellIndex] = 'playerOne';
  }
  if (whoseTurn === 'playerTwo') {
    $(`#${cellIndex}`).css({'background-image': `url(${chosenCharacters[1]})`});
    gameBoard[cellIndex] = 'playerTwo';
  }

  setTimeout(finishTest, 200);

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
      if (gameBoard[currentCombination[0]] === gameBoard[currentCombination[1]] && gameBoard[currentCombination[1]] === gameBoard[currentCombination[2]])
      gameover(gameBoard[currentCombination[0]]);
    }
  })

  // test for draw
  let emptyCount = 0;
  gameBoard.forEach( function(i) {
    if (i === 'unclicked') {
      emptyCount ++;
    }
  });
  if (emptyCount === 0) {
    alert('Draw');
  }
}


function gameover(i) {
  $('#gameoverScreen').animate({'left': '0'}, 400);
  $('#gameoverScreen p').text(`${i} has won!`);
}

/////////////////////
// CHARACTER SELECTOR
let chosenCharacters = [];
$('.characterchooser').click(function() {
  chosenCharacters.push($(this).attr('id'));
  $('.garyChosen').css({'display': 'inline-block'});
  $('img.garyChosen').attr('src', chosenCharacters[0]);

  if (chosenCharacters.length === 2) {
  $('#lineTwo').text('Ash, now your turn!');
  $('.ashChosen').css({'display': 'inline-block'});
  $('img.ashChosen').attr('src', chosenCharacters[1]);
  }

});

$('.begin').click( function() {
  if (chosenCharacters.length === 2) {
    $('img.playerOne').attr('src',chosenCharacters[0]);
    $('img.playerTwo').attr('src',chosenCharacters[1]);
    $('#characterPage').animate({'left': '-1500'}, 400);

    setTimeout( function() {$('#characterPage').css({'display': 'none'})}, 400);
    setTimeout( function() {$('#gameScreen').removeClass('hidden')}, 400);
}});
