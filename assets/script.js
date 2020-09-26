// Assignment Code



 // Global object

var pwOptions = {
  numChars: "0123456789",
  useSpecial: "!#$%&'(*+),-./:;<=>?@[\]^_`{|}`",
  useLowerCase: "abcdefghijklmnopqrstuvwxyz", 
  useUpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}

// Ask user for password length

function generatePassword() {
  var passwordLength = "";
  
  while (true) {

    var length = prompt (" How long do you want your password? Passwords are a minimum of 8 characters and a maximum of 128 characters. ")

    if ( 8 <= length <= 128) break;
    else continue;

  }

  // Create a chracter pool to generate password
  var characterPool = "";

  characterPool = pwOptions.numChars + pwOptions.useSpecial + pwOptions.useLowercase + pwOptions.useUpperCase;

  // Select and add random characters
  var UserPassword = "";
  for (i=0; i , passwordLength; i++) {
  
    // Choose a random character
    var randomIndex = Math.floor(Math.random()* characterPool.length)

    // characters selected by random index numbers from the character pool

    var randomCharacter = characterPool [randomIndex]

    // random characters added to the password

    userPassword = userPassword + randomCharacter;
  }

  // return password

  return userPassword;

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
