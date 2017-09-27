/*
 * Create a list that holds all of your cards
 */
 let cards = ['fa-diamond', 'fa-paper-plane-o',
              'fa-anchor', 'fa-bolt',
              'fa-cube', 'fa-anchor',
              'fa-leaf', 'fa-bicycle',
              'fa-diamond', 'fa-bomb',
              'fa-leaf', 'fa-bomb',
              'fa-bolt', 'fa-bicycle',
              'fa-paper-plane-o', 'fa-cube'];

let openCards = [];
let move = 0;
let pairs = 0;
let stars = 0;
let seconds = document.getElementById('sec');
let minutes = document.getElementById('min');
let elapsedTime = 0;
let timer = null;
/* clears existing cards to prepare for new round */
function clearCards() {
  $('.card').find('i').remove();
}


// shuffle the list of cards using the provided "shuffle" method below
shuffle(cards);

 /*
  *    - loop through each card and create its HTML
  *   - Display the cards on the page
  *   - add each card's HTML to the page
  */

 function dealCards() {
   clearCards();
   $.each(cards, function(index, value) {
     let liNode = document.createElement('i'); //create new li element since clearCards() removed it
     liNode.className = 'fa ' + value; //assign class name to li
     $('.card')[index].append(liNode); // assign li to each card
    });
 }
 dealCards();



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//start game time
$('.deck').one("click", function() {
     timer = setInterval(time, 1000);
});

//set up the event listener for a card. If a card is clicked:
 $('.deck').find('.card').click(function() {
   showCard($(this));
   open($(this));
   match(openCards);
   gameOver();
 });

 //if player wants to startgame over - refresh page by clicking restart button

 $('.restart').click(function() {
   location.reload();
 });

//display the card's symbol

 function showCard(card){
   card.addClass("show open");
 }

//add the card to a *list* of "open" cards
function open(card) {
  if (card.hasClass('show open')) {
      openCards.push(card.children());
  }
}



//if the list already has another card, check to see if the two cards match
function match(array) {
  if (array.length > 1){
    if ((array[0].parent().attr('id') != array[1].parent().attr('id')) && (openCards[0][0].className  === openCards[1][0].className) ) {
      matchLock();
      moves();
      pairs++;
    }
    else {
      setTimeout(notMatch, 800);
      moves();
      return false;
    }
  }
}

//if the cards do match, lock the cards in the open position
function matchLock() {
  $.each(openCards, function(index, value) {
    $(this).parent().addClass('match');
    openCards = [];
  });

}


//if the cards do not match, remove the cards from the list and hide the card's symbol
 function notMatch() {
   $.each(openCards, function(index, value) {
     $(this).parent().removeClass('open show');
     openCards = [];
   });
}
// display move counter on the page
function moves() {
    move++;
    let moveTotal =+ move;
    $('.moves').text(moveTotal);

    if (moveTotal > 10){
      $('.stars li:last-child').empty();
    }
    if (moveTotal > 20){
      $('.stars li:nth-child(2)').empty();
    }
    starCount(moveTotal);
}

function starCount(num) {
  if (num < 10) {
    stars = 3;
  }
  else if (num < 20) {
    stars = 2;
  }
  else {
    stars = 1;
  }
}
//if all cards have matched, display a message with the final score

function gameOver() {
  if (pairs === 8) {
    clearInterval(timer);
    let over = confirm('Congratulations, Game Over!\n\n' +
      'You have a star rating of: ' + stars + '. \n\n' +
      'It took you ' + Math.round(elapsedTime) + ' seconds and ' + move + ' moves! \n\n Would you like to play again?');

    if(over === true) {
      location.reload();
    }
    else {
      alert('Thanks for playing!');
    }
  }
}

function time() {
  elapsedTime++;
  seconds.innerHTML = pad(elapsedTime%60);
  minutes.innerHTML = pad(parseInt(elapsedTime/60));
}

function pad(num) {
  let timeOutput = num + "";
  if(timeOutput.length < 2) {
    return "0" + timeOutput;
  }
  else {
    return timeOutput;
  }
}
