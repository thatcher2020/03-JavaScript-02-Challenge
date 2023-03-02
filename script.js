// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toLocaleUpperCase
var special = "!@#$%"
var numeric = "123456789"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// only works if add return
function generatePassword() {
  var finalpwd = ""
  var size = prompt("enter 8 to 128 characters")
  


  // then do validations, if i am doing checking

  if (size >= 8 && size <= 128) {
    var isLowercase = confirm("include lowercase?")
    console.log(isLowercase)

    var isUppercase = confirm("include uppercase?")
    console.log(isUppercase)

    var isSpecial = confirm("include special character?")
    console.log(isSpecial)

    var isNumeric = confirm("include numeric?")
    console.log(isNumeric)

    if (lowercase === true) {
      var PositionString = Math.floor(math.random(35) * 26)
      console.log(PositionString)
      finalpwd = finalpdw + lowercase[PositionString]
      console.log(finalpwd)
    }
// use a let to define display?
    function display(display) {
      var passwordText = document.querySelector("#password");
      passwordText.value = display;
      return display;
    }
  } 
  else {
    alert("invalid entry")
  }

  return finalpwd
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);