// Assignment Code



 // Global object

var pwOptions = {
  numChars: "0123456789",
  useSpecial: "!#$%&'(*+),-./:;<=>?@[\]^_`{|}`",
  useLowerCase: "abcdefghijklmnopqrstuvwxyz", 
  useUpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}

// Ask user for password options (length and types of characters)

function generatePassword () {
  var passwordLength = "";


  }
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

  // random characters add to the password
  userPassword = userPassword + randomCharacter;

  





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
return result;



// math.floor(math.random()* 129) + 8;