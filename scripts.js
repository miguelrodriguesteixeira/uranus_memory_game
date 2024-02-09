const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var audio1 = new Audio('Click.wav');
var audio2 = new Audio('Match.mp3');
var matches = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
   audio1.play();    
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
   
  secondCard = this;
  lockBoard = true;
     checkForMatch();    
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
   audio2.play();
  resetBoard();
   matches = matches + 1;
    if (matches == 15){
          window.location.href = "Vitoria.html";
    }
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.ceil(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));