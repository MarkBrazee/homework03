// Assignment Code

 // Global Variable
var pwOptions = {
  numChars: ""
  alphaChars: ""
  specChars: ""
}

function consolepasswd(arr) {


  for (var i=0; i<arr.length; i++) {


  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
