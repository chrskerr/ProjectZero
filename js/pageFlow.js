// a place for all buttons and event listeners
// also for all page turns and pageflow logic

$('.game-cell').click(function() {
  recordChoice($(this).attr('id'));
});

$('#instructions button').click( function() {
  turnPage('#instructions', '#gameModeChooser');
  clearInterval(pokeDropTimer);
  $('#pokeBucket img').fadeOut(700);
  setTimeout(function() {$('#pokeBucket img').addClass('hidden')},1000);
})


let chooserClickCount = 0;
$('.modeChooserButton').click( function() {
  mode = $(this).attr('id');
  turnPage('#gameModeChooser', '#characterPage');
})

$('.characterchooser').click(function() {
  chooseCharacter($(this).attr('id'))
})

function chooseCharacter(id) {
  if (chooserClickCount === 0) {
    players[0].image = id;
    players[0].tree = id.slice(id.indexOf('/')+1,id.indexOf('.'));
    $('.ashChosen').css({'display': 'inline-block'});
    $('img.ashChosen').attr('src', players[0].image);
    $('#lineTwo').text('Gary, now your turn!');
    chooserClickCount++;


    if (mode === 'computer') computerPick(id)

  } else if (chooserClickCount === 1) {
    if (id === players[0].image) return false;
    players[1].image = id;
    players[1].tree = id.slice(id.indexOf('/')+1,id.indexOf('.'));
    $('.garyChosen').css({'display': 'inline-block'});
    $('img.garyChosen').attr('src', players[1].image);
    $('#lineTwo').text('READY TO FIGHT!');
    chooserClickCount++;

  }

  if (chooserClickCount === 2) {

    // themeSong.play();

    setTimeout(function() {
      // $('img.playerOne').attr('src', players[0].image);
      // $('img.playerTwo').attr('src', players[1].image);

      updateTrees();

      turnPage('#characterPage','#gameScreen');
    }, 600);
  }
}

function computerPick(id) {
  let choice;
  if (id === 'images/bulbasaur.png') choice = 'images/charmander.png'
  if (id === 'images/charmander.png') choice = 'images/squirtle.png'
  if (id === 'images/squirtle.png') choice = 'images/bulbasaur.png'

  setTimeout(function(){chooseCharacter(choice)}, 400)
}




function draw() {
  turnPage('#gameScreen', '#drawScreen');
  setTimeout(function(){newRound('#drawScreen')}, 1200);
}

function someoneWon(i) {
  players[i-1].score ++;
  if (players[i-1].score === 3) {
    // final screen function
  } else {
    turnPage('#gameScreen', '#roundOverScreen');
    $('#gameResults').text(`${players[i-1].name} has won!`);
    $('#roundOverScreen img').attr('src',`${players[i-1].image}`)
    evolve(i);
    roundCount++;
    $('#roundNumber p').text(`Round ${roundCount}!`)
    setTimeout(function(){newRound('#roundOverScreen')}, 4000);
  }
}

function newRound (currentPage) {
  //reset board;
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  $('.game-cell').css({'background-image': ''});

  turnPage(currentPage, '#roundNumber')
  setTimeout(function() {turnPage('#roundNumber', '#fight')}, 1200);
  setTimeout(function() {turnPage('#fight', '#gameScreen')}, 2400);
  whoseTurn = 2;

  setTimeout(function() {
    if (mode === 'computer') idealMove();
  }, 3400);

  //flipPlayer
  if (whoStarted === 1) {
    whoStarted = 2;
    if (whoseTurn = 1) {
      swapPlayer();
    }
  } else if (whoStarted === 2) {
    whoStarted = 1;
    if (whoseTurn = 2) {
      swapPlayer();
    }
  }

  updateTrees();

}

function updateTrees() {
  //
  $('#left0').attr('src',trees[players[0].tree][0]);
  $('#left1').attr('src',trees[players[0].tree][1]);
  $('#left2').attr('src',trees[players[0].tree][2]);
  $('#right0').attr('src',trees[players[1].tree][0]);
  $('#right1').attr('src',trees[players[1].tree][1]);
  $('#right2').attr('src',trees[players[1].tree][2]);

  $('.treeImg').addClass('grey');

  $(`#left${players[0].score}`).removeClass('grey');
  $(`#right${players[1].score}`).removeClass('grey');



}
