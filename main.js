//  declare my inputs

let numbers = document.getElementById("number");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let symbols = document.getElementById("symbols");
let password = document.getElementById("pass-generated");
let button = document.getElementById("btn");
let copt_btn = document.getElementById("copy");
let pass_len = document.getElementById("pass_len");
let error = document.querySelector("#error");

// we will make the password lenght to be 20 words.
let numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let lowercaseArr = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
let upperCaseArr = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
let symbolsArr = ["!", "@", "#", "$", "%", "^", "&", "*"];

button.onclick = () => {
  generate();
};

// this is the main function
function generate() {
  let x = "";
  let finallPass = [];
  for (let i = 0; i < pass_len.value; i++) {
    let randomNumb = numberArr[Math.floor(numberArr.length * Math.random())];
    let randomLowerCase =
      lowercaseArr[Math.floor(lowercaseArr.length * Math.random())];
    let randomUpperCase =
      upperCaseArr[Math.floor(upperCaseArr.length * Math.random())];
    let randomSymbol =
      symbolsArr[Math.floor(symbolsArr.length * Math.random())];
    let passGenerated = [];

    if (numbers.checked) {
      passGenerated.push(randomNumb);
    }
    if (lowerCase.checked) {
      passGenerated.push(randomLowerCase);
    }
    if (upperCase.checked) {
      passGenerated.push(randomUpperCase);
    }
    if (symbols.checked) {
      passGenerated.push(randomSymbol);
    }

    x = passGenerated[Math.floor(passGenerated.length * Math.random())];
    finallPass.push(x);
  }
  if (finallPass.length <= 30 && finallPass.length >= 10) {
    password.innerHTML = finallPass.join("");
    error.style.display = "none";

    copt_btn.onclick = () => {
      navigator.clipboard.writeText(finallPass.join(""));
      alert("Copied the password");
    };
  } else {
    error.style.display = "block";
    password.innerHTML = "";
  }
}
