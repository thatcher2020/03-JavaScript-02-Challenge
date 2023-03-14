// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  var userInput = window.prompt("please choose a number between 8 and 128 for your password length.")

  var passwordLength = parseInt(userInput)
  //Check to ensure a number is being entered.
  if (isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128")
    return null;
  }

  //making sure they input a number between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128")
    return null;
  }

  //asking what they want in their password
  var userLowerCase = window.confirm("Would you like to include lowercase letters?")
  var userUpperCase = window.confirm("Would you like to include uppercase letters?")
  var userSpecial = window.confirm("Would you like to include special characters?")
  var userNumeric = window.confirm("Would you like to include numbers?")

  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var passwordOptions = []

  for (var i = 0; i < lowerCase.length; i++) {
    upperCase[i] = lowerCase[i].toUpperCase();
}

if (userNumeric === true) {
    passwordOptions.push(numeric);
}

if (userSpecial === true) {
    passwordOptions.push(special);
}

if (userLowerCase === true) {
    passwordOptions.push(lowerCase);
}

if (userUpperCase === true) {
    passwordOptions.push(upperCase);
}

  //if they don't select anything, they are returned to the beginning

  if (passwordOptions === 0) {
        alert("You must select at least one character type!");
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(passwordOptions)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword
}

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);