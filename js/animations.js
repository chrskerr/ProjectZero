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


  if (evolutions[loc[0]][loc[1]+1]) players[playerRef - 1].image = evolutions[loc[0]][loc[1]+1];

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]+1])
  }, 0);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]])
  }, 500);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]+1])
  }, 1000);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]])
  }, 1250);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]+1])
  }, 1500);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]])
  }, 1750);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]+1])
  }, 2000);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]])
  }, 2250);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]+1])
  }, 2500);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]])
  }, 2650);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]+1])
  }, 2800);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]])
  }, 2950);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]+1])
  }, 3050);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]])
  }, 3150);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]+1])
  }, 3250);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]])
  }, 3350);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', evolutions[loc[0]][loc[1]+1])
  }, 3400);

  $('img.playerOne').attr('src', players[0].image);
  $('img.playerTwo').attr('src', players[1].image);
}

let evolutions = [['images/charmander.png', 'images/charmeleon.png', 'images/charizard.png'],['images/squirtle.png','images/wartortle.png','images/blastoise.png'],['images/bulbasaur.png','images/ivysaur.png','images/venusaur.png']];
