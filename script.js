// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toLocaleUpperCase
var special = "!@#$%"
var numeric = "123456789"
var passwordoptions = []

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandoItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  var userInput = window.prompt("How many characters would you like?")

  var passwordLength = parseInt(userInput)
  //Check to ensure a number is being entered.
  if (isNaN(passwordLength)) {
    alert("That's not a number!")
    //User returned for NaN.
    return null;
  }

  // then do validations, and making sure its between 8 and 128

  if (size >= 8 && size <= 128) {
    var isLowercase = confirm("include lowercase?")
    console.log(isLowercase)

    var isUppercase = confirm("include uppercase?")
    console.log(isUppercase)

    var isSpecial = confirm("include special character?")
    console.log(isSpecial)

    var isNumeric = confirm("include numeric?")
    console.log(isNumeric)

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Must enter a number between 8 and 128 characters")
      return null;
    }
    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++) {
      var randoList = getRandoItem(passwordOptions)
      var randoChar = getRandoItem(randoList)
      generatedPassword += randoChar
    }

    return generatedPassword
  }


  //Password going to text box
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password")

    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);