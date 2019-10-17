// code to be called to change pages, ONLY

function turnPage (currentDiv, newDiv) {
  $(newDiv).css({'left': $(window).width() + 10}).removeClass('hidden')

  setTimeout(function() {$(currentDiv).animate({'left': (-1) * $(window).width()}, 700);}, 100);

  setTimeout(function() {$(newDiv).animate({'left': `0`}, 700);}, 101);

  setTimeout(function() {$(currentDiv).addClass('hidden')}, 750);
}


function evolve (playerRef) {
  let loc;

  let playerIndex = playerRef - 1; //return to 0
  let currentTree = players[playerIndex].tree;
  let score = players[playerIndex].score;
  let oldScore = score - 1;

  players[playerIndex].image = trees[currentTree][score];

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][score])
  }, 0);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][oldScore])
  }, 500);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][score])
  }, 1000);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][oldScore])
  }, 1250);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][score])
  }, 1500);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][oldScore])
  }, 1750);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][score])
  }, 2000);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][oldScore])
  }, 2250);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][score])
  }, 2500);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][oldScore])
  }, 2650);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][score])
  }, 2800);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][oldScore])
  }, 2950);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][score])
  }, 3050);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][oldScore])
  }, 3150);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][score])
  }, 3250);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][oldScore])
  }, 3350);

  setTimeout(function(){
    $('#roundOverScreen img').attr('src', trees[currentTree][score])
  }, 3400);

  setTimeout(function(){
    $('img.playerOne').attr('src', players[0].image);
    $('img.playerTwo').attr('src', players[1].image);
  }, 4000);
}




function randomPokeDrop() {
  const x = Math.floor(Math.random() * ($('#pokeBucket').width()-100));
  const y = Math.floor(Math.random() * ($('#pokeBucket').height()-100));

  const keys = Object.keys(trees);

  let newPic = $(`<img src=${trees[keys[Math.floor(Math.random() * 3)]][Math.floor(Math.random() * 3)]}></img>`);

  newPic.css('left', `${x}px`).css('top', `${y}px`);
  $('#pokeBucket').append(newPic);

  // setTimeout(function(){$('#pokeBucket:first-child').fadeOut(1000)},2000);

}

let pokeDropTimer = setInterval(randomPokeDrop, 50);
