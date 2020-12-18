// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  //Alert user for criteria
  window.alert("The criteria for password generator are lowercase, uppercase, numeric, and/or special characters");
  var userInput = window.prompt("Select criteria for password (you can select more than one) (use space): 1=lowercase 2=uppercase 3=numeric 4=special characters ").split(" ");
  //Split the user input
  var arraySplit = userInput.slice(0,userInput.length);
  // Tell the user what they have selected.
  window.alert("You have selected " + arraySplit);
  console.log(userInput);
  //console.log(userInput[0]);


  for (var i = 0; i < userInput.length; i++) {
    // Tell the user what they have selected
    var inputCriteria = userInput[i];
    var inputCriteriaInteger = parseInt(inputCriteria);
    //Save output in variable at the end of the loop to generate a password of randomness.
    switch(inputCriteriaInteger) {
      case 1:
        console.log("We are in the loop and case 1 achieve");
      case 2:
        console.log("We are in the loop and case 2 achieve");
      case 3:
        console.log("We are in the loop and case 3 achieve");
      case 4:
        console.log("We are in the loop and case 4 achieve");
      default:
        if (!inputCriteriaInteger)
        console.log(" Please select a criteria using numbers. " + "User input: " + inputCriteria + " is invalid");
    }
  }
  

  switch(userInput) {
    case "1":
      console.log(" I am in switch case 0 input" + userInput[0] );

  }
}

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

