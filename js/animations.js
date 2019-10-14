function turnPage (currentDiv, newDiv) {
  $(newDiv).css({'left': $(window).width() + 10}).removeClass('hidden')

  setTimeout(function() {$(currentDiv).animate({'left': (-1) * $(window).width()}, 400);}, 100);

  setTimeout(function() {$(newDiv).animate({'left': `0`}, 400);}, 101);

  setTimeout(function() {$(currentDiv).addClass('hidden')}, 450);
}

function evolve () {

}
