let UppercaseLetters = [
  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"
];

let LowercaseLetters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];

let Numbers = [
  "0","1","2","3","4","5","6","7","8","9"
];

let Symbols = [
  "!","@","#","$","%","^","&","*","(",")",
  "-","_","=","+","[","]","{","}",";",":",
  "'","\"",",",".","<",">","/","?","\\","|"
];

function generatepass(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let arr;
    if (i % 4 === 0) arr = UppercaseLetters;
    else if (i % 4 === 1) arr = LowercaseLetters;
    else if (i % 4 === 2) arr = Numbers;
    else arr = Symbols;
    
    password += arr[Math.floor(Math.random() * arr.length)];
  }
  return password;
}

console.log(generatepass(20));
