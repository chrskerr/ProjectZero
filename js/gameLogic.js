// a place for all declarations and variables
let whoseTurn = 1;
let mode;
let roundCount = 1;
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let players = [
  {
  ref: 1,
  name: 'Gary',
  image: '',
  score: 0,
},
{
  ref: 2,
  name: 'Ash',
  image: '',
  score: 0,
},
];

$('#playerOne').animate({'font-size': '45px'}, 0)
$('p#playerOne').text(players[0].name);
$('p#playerTwo').text(players[1].name);

function recordChoice (cellIndex) {
  if (whoseTurn === 1) {
    $(`#${cellIndex}`).css({'background-image': `url(${players[0].image})`});
    board[cellIndex] = 1;
    swapPlayer();

  } else if (whoseTurn === 2) {
    $(`#${cellIndex}`).css({'background-image': `url(${players[1].image})`});
    board[cellIndex] = 2;
    swapPlayer();
  }

  setTimeout(function() {
    let outcome = '';
    if (drawTest()) outcome = drawTest();
    if (threeTest()) outcome = threeTest();

    if (outcome) {
      roundOver(outcome);
    } else {
      if (whoseTurn === 2 && mode === 'computer') idealMove();
    }
  }, 200);
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

function drawTest () {
    let emptyCount = 0;
    board.forEach(function(i) {if (i === 0) emptyCount++;});
    if (emptyCount === 0) {
    return 'draw';
  }
  return '';
}

function threeTest() {
  let testList = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
  let outcome = '';
  testList.forEach( function(test) {
    if (board[test[0]] === 0 || board[test[1]] === 0 || board[test[2]] === 0) {
    } else if (board[test[0]] === board[test[1]] && board[test[1]] === board[test[2]]) {
      outcome = board[test[0]];
    }
});
  return outcome;
}

function roundOver(i) {
  turnPage('#gameScreen', '#roundOverScreen');

  let finished = false;

  if (i === 'draw') {
    $('#gameResults').text(`The game was a draw`);
  } else {
    $('#gameResults').text(`${players[i-1].name} has won!`);
    $('#roundOverScreen img').attr('src',`${players[i-1].image}`)
    players[i-1].score ++;
    if (evolve(i) === 'top') finished = true;
  }

  if (!finished) {
    $('#playerOneScore').text(players[0].score);
    $('#playerTwoScore').text(players[1].score);
    roundCount++;
    $('#roundNumber p').text(`Round ${roundCount}!`)

    setTimeout(function(){
      //reset board;
      board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      $('.game-cell').css({'background-image': ''});
      whoseTurn = 1;
      $('#playerOne').animate({'font-size': '45px'}, 200)
      $('#playerTwo').animate({'font-size': '15px'}, 200)

      turnPage('#roundOverScreen', '#roundNumber')

      setTimeout(function() {turnPage('#roundNumber', '#fight')}, 1200);

      setTimeout(function() {turnPage('#fight', '#gameScreen')}, 2400);

    }, 4000);
  }
}
