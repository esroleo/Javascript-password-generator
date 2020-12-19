
// Global Variables
var arraySplit = ""; // Use to provide outputs to the user
var exitApplication = false; // on/off switch for running the app
var userInput = ""; // Important - will be used to generate password based on criteria

// Criteria Object for password

var pCriteria = {
  lowercase: { indexNumber: 0 , criteria: "abcdefghijklmnopqrstuvwxyz"
  },
  uppercase: { indexNumber: 1, criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  numeric: { indexNumber: 2, criteria: "0123456789"
  },
    symbols: { indexNumber: 3, criteria: " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Call function to genereat password
var generatePassword = function() {
  // Alert user for criteria
  window.alert("The criteria for password generator are lowercase, uppercase, numeric, and/or special characters");
  // Split into an array 
  userInput = window.prompt("Select criteria for password (you can select more than one) (use space): 1=lowercase 2=uppercase 3=numeric 4=special characters ");
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
    // Take the userInput array and slice it from positon 0 to the lenght of the array.
    arraySplit = userInput.slice(0,userInput.length);
  }
  
  // Tell the user what they have selected.
  window.alert("You have selected: " + arraySplit);
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
    switch(inputCriteriaInteger) { // fall through takes care of at least one option is selected.
      case 1:
      case 2:
      case 3:
      case 4:
        console.log("We are in the loop and case good numbers passed achieve");
        break;
      default:
        if (!inputCriteriaInteger) {
          window.alert("Please select a criteria using numbers and only from 1-4 seprated by space.\n Restarting application");
          generatePassword();  
        }
        // Iterate internall until valid input.
        else { 
          window.alert(" Please select a criteria using numbers and only from 1-4 seprated by space.\n\n" + "User input: " + inputCriteria + " is invalid");
          generatePassword();  
        }
        
    }
  }

  // Call Function to validate length
  var pLenght = passLenght();

  // If we pass the userInput for loop and the passLenght function we are good to generate a password.

  generatePasswordRandomness(userInput,pLenght);

  function generatePasswordRandomness(userInput, pLenght) {
    // Sample will be 8 characters
    // Number to use on my randomness to be used for the criteria types
    // My number has to be from 0 to given number to select
    // I need it to be from e.g 8--> 0 - 7 for my indexing array to be checking and printed later.
    var indexRandom = [];

    for ( var i =0; i < 4; i++) {

    var valueRandom = Math.floor(Math.random() * 4);
    indexRandom.push(valueRandom);
    console.log("Index is now : " + indexRandom);
    //console.log(value);
    //window.alert("Your random number is: " + value);
    
    /*
    //console.log("Criteria is: lowercase" + " " + pCriteria.lowercase.indexNumber + " " + pCriteria.lowercase.criteria[i]);/*
    console.log("Criteria is: uppercase" + " " + pCriteria.uppercase.indexNumber + " " + pCriteria.uppercase.criteria[i]);
    console.log("Criteria is: numeric" + " " + pCriteria.numeric.indexNumber + " " + pCriteria.numeric.criteria[i]);
    console.log("Criteria is: symbols" + " " + pCriteria.symbols.indexNumber + " " + pCriteria.symbols.criteria[i]);
    console.log("Criteria is: symbols" + " " + pCriteria.symbols.indexNumber + " " + pCriteria.symbols.criteria[6]);
    console.log("Criteria is: symbols" + " " + pCriteria.symbols.indexNumber + " " + pCriteria.symbols.criteria[7]);
    console.log("Criteria is: symbols" + " " + pCriteria.symbols.indexNumber + " " + pCriteria.symbols.criteria[20]);
    console.log("Criteria is: symbols" + " " + pCriteria.symbols.indexNumber + " " + pCriteria.symbols.criteria[21]);
    console.log("Criteria is: symbols" + " " + pCriteria.symbols.indexNumber + " " + pCriteria.symbols.criteria[22]);
    console.log("Criteria is: symbols" + " " + pCriteria.symbols.indexNumber + " " + pCriteria.symbols.criteria[23]);
    console.log("Criteria is: symbols" + " " + pCriteria.symbols.indexNumber + " " + pCriteria.symbols.criteria[24]);
    */
   }
 
  }


  function passLenght () {

    // Ask user for lenght of password.
    window.alert("How long do you want your password to be from 8-128 characters.\n E.g 20");
    var pLenght = parseInt(window.prompt("Please enter lenght"));
    if (pLenght < 8 || pLenght > 128) {
      window.alert("Please enter a valid number between 8-128");
      passLenght();

    } else if (!pLenght) {
      window.alert("Please enter a valid number between 8-128")
      passLenght();
    } else {
      window.alert("You have entered a valid lenght of: " + pLenght + "\n Password will now be generated");
      return pLenght;
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

