let greet = "Hi There";
let myName = "Lily";
let linda = document.querySelector("#linda");

function greetLily() {
  let fullName = `${greet}, ${myName}!`;
  lily.textContent = fullName;
}

function imgLily() {
  let lilyOne = document.querySelector("#lily-one");
  lilyOne.classList.toggle("pop");
  let lilyTwo = document.querySelector("#lily-two");
  lilyTwo.classList.toggle("pop");
}
