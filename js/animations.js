function turnPage (currentDiv, newDiv) {
  $(newDiv).css({'left': $(window).width() + 10}).removeClass('hidden')

  setTimeout(function() {$(currentDiv).animate({'left': (-1) * $(window).width()}, 400);}, 100);

  setTimeout(function() {$(newDiv).animate({'left': `0`}, 400);}, 101);

  setTimeout(function() {$(currentDiv).addClass('hidden')}, 450);
}

function evolve () {

}

let evolutions = {
  charmander: {
    levelOne: '../images/charmander.png',
    levelTwo: '../images/charmeleon.png',
    levelThree: '../images/charizard.png',
  },
  squirtle: {
    levelOne: '../images/squirtle.png',
    levelTwo: '../images/wartortle.png',
    levelThree: '../images/blastoise.png',
  },
  bulbasaur: {
    levelOne: '../images/bulbasaur.png',
    levelTwo: '../images/ivysaur.png',
    levelThree: '../images/venusaur.png',
  }
}
