// Assignment code here

var arraySplit = "";
var exitApplication = false;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Call function to genereat password
var generatePassword = function() {
  // Alert user for criteria
  window.alert("The criteria for password generator are lowercase, uppercase, numeric, and/or special characters");
  // Split into an array 
  var userInput = window.prompt("Select criteria for password (you can select more than one) (use space): 1=lowercase 2=uppercase 3=numeric 4=special characters ");
  // If user press cancel while trying to split it will fail, hence we need split after the fact.
  // If statement required to split 
  if (!userInput) {
    exitApplication = window.alert("Restarting the application");
    exitApplicationForm();
  } else {
    // Continue with the application
    // User put a valid input to try to split to array
    // We can now continue to slice to show the output to user
    userInput = userInput.split(" ");
    arraySplit = userInput.slice(0,userInput.length);
  }
  
  // Tell the user what they have selected.
  window.alert("You have selected " + arraySplit);
  //console.log(userInput);
  //console.log(userInput[0]);

  // Create a for loop to iterate the user input to determine if valid criteria input
  for (var i = 0; i < userInput.length; i++) {
    // Take one item/index from the user input
    var inputCriteria = userInput[i];
    // Convert this output into integer for further validation
    var inputCriteriaInteger = parseInt(inputCriteria);
    // Save output in variable at the end of the loop to generate a password of randomness.
    // Switch case with fall through logic to arrive at conclusions
    switch(inputCriteriaInteger) {
      case 1:
      case 2:
      case 3:
      case 4:
        console.log("We are in the loop and case good numbers passed achieve");
        break;
      default:
        if (!inputCriteriaInteger) {
          window.alert(" Do you wish to exit the application?");
          generatePassword();  
        }
        // Iterate internall until valid input.
        else { 
          window.alert(" Please select a criteria using numbers. " + "User input: " + inputCriteria + " is invalid");
          generatePassword();  
        }
        
    }
  }

  // Call Function to validate length
  passLengght();

  function passLengght () {

    // Ask user for lenght of password.
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
  window.alert(" Lets check our password criteria options");
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

// Verify if we should start the application or not.
function exitApplicationForm () {
   if (exitApplication) {
     // Exit the application by doing nothing.

   } else {
     // Start the application
     writePassword();
    }
}

