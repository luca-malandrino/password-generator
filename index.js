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
const passwordLengthEl = document.getElementById("password-length");
const passwordEl = document.getElementById("password");

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
});

toggle[1].addEventListener("click", event => {
  if(event.target.classList.contains("on")) {
    event.target.classList.replace("on", "off");
    specialCharactersAreAllowed = false;
  } else {
    event.target.classList.replace("off", "on");
    specialCharactersAreAllowed = true;
  }
});

circle[0].addEventListener("click", event => {
  if(event.target.parentNode.classList.contains("on")) {
    event.target.parentNode.classList.replace("on", "off");
    numbersAreAllowed = false;
  } else {
    event.target.parentNode.classList.replace("off", "on");
    numbersAreAllowed = true;
  }
});

circle[1].addEventListener("click", event => {
  if(event.target.parentNode.classList.contains("on")) {
    event.target.parentNode.classList.replace("on", "off");
    specialCharactersAreAllowed = false;
  } else {
    event.target.parentNode.classList.replace("off", "on");
    specialCharactersAreAllowed = true;
  }
});

let allowedChars = [];

generateButton.addEventListener("click", () => {
  if(passwordLengthEl.value === "") {
    window.alert("Choose a length for your password");
  } else {
    
    if(numbersAreAllowed && specialCharactersAreAllowed) {
      allowedChars = letters.concat(numbers).concat(specialCharacters);
    } else if(numbersAreAllowed && !specialCharactersAreAllowed) {
      allowedChars = letters.concat(numbers);
    } else if(!numbersAreAllowed && specialCharactersAreAllowed) {
      allowedChars = letters.concat(specialCharacters);
    } else {
      allowedChars = letters;
    }

    let passwordLength = passwordLengthEl.value;
    let password = "";

    for(let i = 0; i < Number(passwordLength); i++) {

      let randomIndex = Math.floor(Math.random() * allowedChars.length);

      password += allowedChars[randomIndex];

    }

    passwordEl.textContent = password;

  }
})

passwordEl.addEventListener("click", () => {

  navigator.clipboard.writeText(passwordEl.textContent);
  window.alert(`Copied ${passwordEl.textContent} to clipboard`);
})