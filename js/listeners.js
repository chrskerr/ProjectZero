// a place for all buttons and event listeners

$('.game-cell').click(function() {
  if (board[$(this).attr('id')] === 0) {
    recordChoice($(this).attr('id'));
  }
});


let chooserClickCount = 0;
$('.begin').click( function() {
  if (chooserClickCount === 2) {
    $('img.playerOne').attr('src', players[0].image);
    $('img.playerTwo').attr('src', players[1].image);
    turnPage('#characterPage','#gameModeChooser');
}});

$('.modeChooserButton').click( function() {
  mode = $(this).attr('id');
  turnPage('#gameModeChooser', '#gameScreen');
});

$('.characterchooser').click(function() {
  if (chooserClickCount === 0) {
    players[0].image = $(this).attr('id');
    $('.garyChosen').css({'display': 'inline-block'});
    $('img.garyChosen').attr('src', players[0].image);
    $('#lineTwo').text('Ash, now your turn!');
  }
  if (chooserClickCount === 1) {
    players[1].image = $(this).attr('id');
    $('.ashChosen').css({'display': 'inline-block'});
    $('img.ashChosen').attr('src', players[1].image);
    $('#lineTwo').text('READY TO FIGHT!');
  }
  chooserClickCount++;
});
