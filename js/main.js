let button = document.querySelector('.wrapper');
let arrayLength = 16, x = 1;
let cards = ["Karo2", "Karo2", "Maca2", "Maca2", "Sinek2", "Sinek2", "KaroA", "KaroA", "MacaA", "MacaA", "SinekA", "SinekA", "KupaA", "KupaA", "Kupa2", "Kupa2"];
let n1, n2, turn = 0;
let cardElement = document.querySelector('#c');
let div1, div2;
let old1, old2;
let started = true;

button.addEventListener('click', (e) => {
  let selected = e.target.getAttribute('data-key'); // could be null!
  let element = e.target.getAttribute('data-key');
  let id = document.querySelector("#c" + element);
  console.log(id);
  console.log(selected);
  if (id.id != "ok" && started) {
    turn += 1;
    if (turn == 1) {
      n1 = document.querySelector('#i' + element).src;
      old1 = element;
      div1 = document.querySelector('#i' + element);
      console.log(n1);
      div1.id = "ok";
      div1.style.visibility = 'visible';
    }

    if (turn == 2) {
      n2 = document.querySelector('#i' + element).src;
      old2 = element;
      div2 = document.querySelector('#i' + element);
      turn = 0;
      div2.id = "ok";
      div2.style.visibility = 'visible';
      started = false;
      found();
    }
  }
});

found = () => {
  if (n1 == n2) {
    div1.style.visibility = 'visible';
    div2.style.visibility = 'visible';
    console.log("buldun");
    started = true;
  } else {
    div1.id = "i" + old1;
    div2.id = "i" + old2;
    setTimeout(() => {
      div1.style.visibility = 'hidden';
      div2.style.visibility = 'hidden';
      started = true;
    }, 1000);
  }
}

initial = () => {
  while (true) {
    let random = Math.floor(Math.random() * arrayLength);
    cards = cards.filter((e) => {
      return e !== undefined;
    });
    let card = cards[random];

    if (card !== undefined) {
      let define = document.querySelector('#c' + x);
      define.innerText = card;
      define.innerHTML = '<img id="i' + x + '" class="img-card" src="src/' + card + '.png" data-key="' + x + '">';
      delete cards[random];
      arrayLength -= 1;
      x++;
    }

    if (arrayLength == 0) return true;
  }
}

initial();