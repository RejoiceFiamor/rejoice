function promptName() {
  let name = prompt("What is your name?");
  let Africa = document.querySelector("#Tope");
  if (name) {
    Africa.innerHTML = `👋 Welcome ${name}, To The Rise Wear 😊`;
  } else {
    Africa.innerHTML = `👋Hi lovely, welcome To The Rise Wear 😊`;
  }
  let Goodness = document.getElementById("Wear");
  if (name) {
    Goodness.innerHTML = `👋 Hi ${name}, Browse Through The Rise Wear 😊`;
  } else {
    Goodness.innerHTML = `👋Hi lovely, Browse Through The Rise Wear 😊`;
  }
}

let display = document.getElementById("knew");
display.addEventListener("mouseenter", promptName);
