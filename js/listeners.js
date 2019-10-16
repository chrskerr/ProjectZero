// a place for all buttons and event listeners

$('.game-cell').click(function() {
  if (board[$(this).attr('id')] === 0) {
    recordChoice($(this).attr('id'));
  }
});

$('#instructions button').click( function() {
  mode = $(this).attr('id');
  turnPage('#instructions', '#gameModeChooser');
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
    $('.ashChosen').css({'display': 'inline-block'});
    $('img.ashChosen').attr('src', players[0].image);
    $('#lineTwo').text('Gary, now your turn!');
    chooserClickCount++;


    if (mode === 'computer') computerPick(id)

  } else if (chooserClickCount === 1) {
    if (id === players[0].image) return false;
    players[1].image = id;
    $('.garyChosen').css({'display': 'inline-block'});
    $('img.garyChosen').attr('src', players[1].image);
    $('#lineTwo').text('READY TO FIGHT!');
    chooserClickCount++;

  }

  if (chooserClickCount === 2) {
    setTimeout(function() {

      $('img.playerOne').attr('src', players[0].image);
      $('img.playerTwo').attr('src', players[1].image);
      turnPage('#characterPage','#gameScreen');
    }, 600);
  }
}

function computerPick(id) {
  // let pick = Math.floor(Math.random() * 3);
  let choice;
  if (id === 'images/bulbasaur.png') choice = 'images/charmander.png'
  if (id === 'images/charmander.png') choice = 'images/squirtle.png'
  if (id === 'images/squirtle.png') choice = 'images/bulbasaur.png'
    // if (choice === id) {
    //   computerPick(id);
    // }

  setTimeout(function(){chooseCharacter(choice)}, 250)
}
