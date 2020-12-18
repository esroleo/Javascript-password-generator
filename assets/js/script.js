// Assignment code here

var arraySplit = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  //Alert user for criteria
  window.alert("The criteria for password generator are lowercase, uppercase, numeric, and/or special characters");
  var userInput = window.prompt("Select criteria for password (you can select more than one) (use space): 1=lowercase 2=uppercase 3=numeric 4=special characters ").split(" ");
  //Split the user input
  arraySplit = userInput.slice(0,userInput.length);
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
      case 2:
      case 3:
      case 4:
        console.log("We are in the loop and case good numbers passed achieve");
        break;
      default:
        //if (!inputCriteriaInteger)
        console.log(" Please select a criteria using numbers. " + "User input: " + inputCriteria + " is invalid");
        generatePassword();
    }
  }

  // Call Function to validate length
  passLengght();

  function passLengght () {

    //Ask user for lenght of password.
    window.alert("How long do you want your password to be from 8-128 characters.\n E.g 20");
    var pLenght = parseInt(window.prompt("Please enter lenght"));
    if (pLenght < 8 || pLenght > 128) {
      window.alert("Please enter a valid number between 8-128");
      passLengght();

    } else if (!pLenght) {
      window.alert("Please enter a valid number between 8-128")
      passLengght();
    } else {
      window.alert("You have entered a valid lenght of: " + pLenght + "\n Password will now be generated");
    }
  }



  

}

// Write password to the #password input
function writePassword() {
  window.alert(" About to generate password");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  //passwordText.value = password;
  document.getElementById("password").readOnly = false;
  //document.getElementById("password").value = "Fifth Avenue, New York City";
  document.getElementById("password").value = arraySplit;
  
  document.getElementById("password").readOnly = true;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

