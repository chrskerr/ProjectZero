// a place for all buttons and event listeners

$('.game-cell').click(function() {
  if (gameBoard[$(this).attr('id')] === 'unclicked') {
    recordChoice($(this).attr('id'));
    swapPlayer();
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
