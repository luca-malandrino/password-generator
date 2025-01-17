const letters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const numbers = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const specialCharacters = [
  "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

const toggle = document.querySelectorAll(".toggle");
const circle = document.querySelectorAll(".circle");
const generateButton = document.getElementById("generate-btn");

let numbersAreAllowed = true;
let specialCharactersAreAllowed = true;

toggle[0].addEventListener("click", event => {
  if(event.target.classList.contains("on")) {
    event.target.classList.replace("on", "off");
    numbersAreAllowed = false;
  } else {
    event.target.classList.replace("off", "on");
    numbersAreAllowed = true;
  }

  console.log(numbersAreAllowed);
});

toggle[1].addEventListener("click", event => {
  if(event.target.classList.contains("on")) {
    event.target.classList.replace("on", "off");
    specialCharactersAreAllowed = false;
  } else {
    event.target.classList.replace("off", "on");
    specialCharactersAreAllowed = true;
  }

  console.log(specialCharactersAreAllowed);
});

circle[0].addEventListener("click", event => {
  if(event.target.parentNode.classList.contains("on")) {
    event.target.parentNode.classList.replace("on", "off");
    numbersAreAllowed = false;
  } else {
    event.target.parentNode.classList.replace("off", "on");
    numbersAreAllowed = true;
  }

  console.log(numbersAreAllowed);
});

circle[1].addEventListener("click", event => {
  if(event.target.parentNode.classList.contains("on")) {
    event.target.parentNode.classList.replace("on", "off");
    numbersAreAllowed = false;
  } else {
    event.target.parentNode.classList.replace("off", "on");
    numbersAreAllowed = true;
  }

  console.log(specialCharactersAreAllowed);
});

