// a place for all buttons and event listeners

$('.game-cell').click(function() {
  if (board[$(this).attr('id')] === 0) {
    recordChoice($(this).attr('id'));
  }
});


$('.begin').click( function() {
  if (chosenCharacters.length === 2) {
    $('img.playerOne').attr('src',chosenCharacters[0]);
    $('img.playerTwo').attr('src',chosenCharacters[1]);
    turnPage('#characterPage','#gameScreen');
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
