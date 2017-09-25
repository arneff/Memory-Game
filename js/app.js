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
/* clears existing cards to prepare for new round */
function clearCards(){
  $('.card').find('i').remove();
}


// shuffle the list of cards using the provided "shuffle" method below
shuffle(cards);

 /*
  *    - loop through each card and create its HTML
  *   - Display the cards on the page
  *   - add each card's HTML to the page
  */

 function dealCards(){
   clearCards();
   $.each(cards, function(index, value){
     let liNode = document.createElement('li'); //create new li element since clearCards() removed it
     liNode.className = 'fa ' + value; //assign class name to li
     $('.card')[index].append(liNode); // assign li to each card
   });
 }
 dealCards();

//show card when clicked

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


/*
 * set up the event listener for a card. If a card is clicked:
 */

 $('.deck').find('.card').click(function(){
   showCard($(this));
   open($(this));
   match(openCards);
 });
 /*
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 */
 function showCard(card){
   card.toggleClass("show open");
 }
/*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 */
function open(card){
  if (card.hasClass('open')){
    openCards.push(card.children());
  }
}
/*
 *  - if the list already has another card, check to see if the two cards match
 */
function match(array){
  console.log(openCards);
}
/*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
