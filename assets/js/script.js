// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  window.alert(" About to generate password");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  //passwordText.value = password;
  document.getElementById("password").readOnly = false;
  document.getElementById("password").value = "Fifth Avenue, New York City";
  document.getElementById("password").readOnly = true;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

