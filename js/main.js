let button = document.querySelector('.wrapper');
let moveElement = document.querySelector('.move');
let restartElement = document.querySelector('.restart');
let cardElement = document.querySelector('#c');

let move = 0; // total move
let arrayLength = 16, x = 1; // arrayLength and loop value
let cards = []; // Array of cards
let m1, m2, turn = 0; // value of cards and turn
let div1, div2;
let old1, old2;
let started = true;
let totalRight = 0;

button.addEventListener('click', (e) => {
  let element = e.target.getAttribute('data-key');
  let id = document.querySelector("#c" + element);

  if (started) {
    if (id.id != "ok") {
      turn += 1;
      if (turn == 1) {
        m1 = document.querySelector('#i' + element).src;
        old1 = element;
        div1 = document.querySelector('#i' + element);
        div1.id = "ok";
        div1.style.visibility = 'visible';
      }

      if (turn == 2) {
        m2 = document.querySelector('#i' + element).src;
        old2 = element;
        div2 = document.querySelector('#i' + element);
        turn = 0;
        div2.id = "ok";
        div2.style.visibility = 'visible';
        started = false;
        check();
      }
    }
  }
});

check = () => {
  if (m1 == m2) {
    div1.style.visibility = 'visible';
    div2.style.visibility = 'visible';

    totalRight++;
    if (totalRight == 8) {
      moveElement.innerText = "Game finished. Your score is " + move;
      restartElement.style.display = 'block';
    }
    started = true;
  }
  else {
    div1.id = "i" + old1;
    div2.id = "i" + old2;
    move++;
    moveElement.innerText = move;

    setTimeout(() => {
      div1.style.visibility = 'hidden';
      div2.style.visibility = 'hidden';
      started = true;
    }, 1000);
  }
}

initial = () => {
  cards = ["Karo2", "Karo2", "Maca2", "Maca2", "Sinek2", "Sinek2", "KaroA", "KaroA", "MacaA", "MacaA", "SinekA", "SinekA", "KupaA", "KupaA", "Kupa2", "Kupa2"];
  while (true) {
    let random = Math.floor(Math.random() * arrayLength);

    cards = cards.filter((e) => { // Removing undefined objects from array.
      return e !== undefined;
    });

    let card = cards[random]; // Getting a card.

    if (card !== undefined) { // Random can get undefined object
      let define = document.querySelector('#c' + x);
      define.innerHTML = '<img id="i' + x + '" class="img-card" src="src/' + card + '.png" data-key="' + x + '">';

      delete cards[random]; // Delete selected object
      arrayLength -= 1; // Array decrease 1
      x++; // Indis increase 1
    }

    if (arrayLength == 0) return true; // All objects assigned to elements
  }
}

restartElement.addEventListener('click', () => {
  location.reload();
});

moveElement.innerText = move;
initial();