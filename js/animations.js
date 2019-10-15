function turnPage (currentDiv, newDiv) {
  $(newDiv).css({'left': $(window).width() + 10}).removeClass('hidden')

  setTimeout(function() {$(currentDiv).animate({'left': (-1) * $(window).width()}, 400);}, 100);

  setTimeout(function() {$(newDiv).animate({'left': `0`}, 400);}, 101);

  setTimeout(function() {$(currentDiv).addClass('hidden')}, 450);
}

let loc;


function evolve (playerRef) {
  //find current evolution
  evolutions.forEach(function(i,k){
    i.forEach(function(j,l) {
      if (j === players[playerRef - 1].image) loc = [k,l];
    })
  });

  // getKeyFrames

  if (evolutions[loc[0]][loc[1]+1]) players[playerRef - 1].image = evolutions[loc[0]][loc[1]+1];
  $('img.playerOne').attr('src', players[0].image);
  $('img.playerTwo').attr('src', players[1].image);
}

let evolutions = [['images/charmander.png', 'images/charmeleon.png', 'images/charizard.png'],['images/squirtle.png','images/wartortle.png','images/blastoise.png'],['images/bulbasaur.png','images/ivysaur.png','images/venusaur.png']];
