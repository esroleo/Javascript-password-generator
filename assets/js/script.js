
// Global Variables
var arraySplit = ""; // Use to provide outputs to the user
var exitApplication = false; // on/off switch for running the app
var userInput = ""; // Important - will be used to generate password based on criteria
var finalPassword = ""; 


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
  //debugger;
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

  debugger;

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
    var valueRandom = 0;
    //var indexRandom = [];
    

    //for ( var i=0; i < 4; i++) {

    //valueRandom = Math.floor(Math.random() * 4);
    //valueRandom = Math.floor(Math.random() * 4);
  
    //indexRandom.push(valueRandom);
    //console.log("Index is now : " + indexRandom);
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
   // }
    // Create a for loop to generate the final password based on lenght selected by user.
    // Use the the object pCriteria with the multi dimensional array of indexNumber and criteria
  

    // loop throught the userInput and apply randomness
    // Initliaze while password lenght requested is smaller than the lenght
  
   
   
      //debugger;
      
      
      //var counter = 1; // Counter for the while loop
      // E.g 8 lengh - first round of user input e.g 1 2, lengh of 2 array. 8-2 = 6 (random after round)
      var counter = userInput.length
      var UserCounter = userInput.length // Counter to say in line with the user input index
      var finalPassword = "";  // To be return by the function at the end of the while/switch statements.
      //

      debugger;

              // We need to guarantee one round of purely criteria with random

              for (var i = 0; i < userInput.length; i++) {

                var guaranteedCriteria = userInput[i];
      
                if (guaranteedCriteria === "1") {
                  // As I added counter +=1 at the top of the while loop.
                  valueRandom = Math.floor(Math.random() * 26);
                  // call the pCritera uppercase object
                  finalPassword += pCriteria.lowercase.criteria[valueRandom];
      
                } else if (guaranteedCriteria === "2") {
      
                  // As I added counter +=1 at the top of the while loop.
                  valueRandom = Math.floor(Math.random() * 26);
                  // call the pCritera uppercase object
                  finalPassword += pCriteria.uppercase.criteria[valueRandom];
      
                } else if (guaranteedCriteria === "3") {
      
                  // As I added counter +=1 at the top of the while loop.
                  valueRandom = Math.floor(Math.random() * 10);
                  // call the pCritera uppercase object
                  finalPassword += pCriteria.numeric.criteria[valueRandom];
      
                } else if (guaranteedCriteria === "4") {
      
      
                  // As I added counter +=1 at the top of the while loop.
                  valueRandom = Math.floor(Math.random() * 31);
                  // call the pCritera uppercase object
                  finalPassword += pCriteria.symbols.criteria[valueRandom];
      
                } 
              }
       

      while ( counter < pLenght )  {


       

        // Take one item/index from the user input
        // Lenght is 4 but the index is 3. Hence -1
        // Catch any weird error coming lastly from the user input.
        if (!userInput[(UserCounter - 1)]) {
          // means that we passed the array of options provided by the user.
          // Hence we need to subsctract on in order to get back in the avaiale array.
          // randomize given the lenght - where we are at the counter and user input array
  
         // window.alert("we are done");
          // Randomize the UserCounter to decrease in index to get back to the undefined array.
          // E.g 3 options selected - once we get to iteration #4 for the user input it will be undefinec.
          // To fix this we got back a random number between 0 and lengh of the userInput array +1 to be in range.
          // E.g (without the +1) 0 3 but will not include 3, therefore we need +1. That will be 0-4 round down to 3.
          // We are now at position undefined, therefore we need to remove one to be inside the userInput array.
          UserCounter -= Math.floor( ( (Math.random() * userInput.length) + 1) );
          counter += 1;
      
        } else {
          // Generate randomness for first round of random password
          // Guarante that at least 1 of each criteria is selected.
          UserCounter = Math.floor( ( (Math.random() * userInput.length) + 1) );
          counter += 1;
        }

        // Use a random number to get the criteria to use.
        // Lenght is 4 but the index is 3. Hence -1
        var inputCriteria = userInput[(UserCounter - 1)];
        

        // Make sure the input is an integer (it was validated in other)
        var inputCriteriaInteger = parseInt(inputCriteria);

        switch(inputCriteriaInteger) {
          case 1:
            //finalPassword += "a";
            // As I added counter +=1 at the top of the while loop.
            valueRandom = Math.floor(Math.random() * 26);
            finalPassword += pCriteria.lowercase.criteria[valueRandom];
            //to check if the user had any other options to do.
            //UserCounter += 1;
            console.log(finalPassword);
            break;
          case 2:
            //uppercase
            //finalPassword += "a";
            // As I added counter +=1 at the top of the while loop.
            valueRandom = Math.floor(Math.random() * 26);
            // call the pCritera uppercase object
            finalPassword += pCriteria.uppercase.criteria[valueRandom];
            //to check if the user had any other criteria options.
            //UserCounter += 1;
            break;
          case 3:
            //numeruic
            //uppercase
            //finalPassword += "a";
            // As I added counter +=1 at the top of the while loop.
            valueRandom = Math.floor(Math.random() * 10);
            // call the pCritera uppercase object
            finalPassword += pCriteria.numeric.criteria[valueRandom];
            //to check if the user had any other criteria options.
            //UserCounter += 1;
            break;
          case 4:
            //symbols
            //numeruic
            //uppercase
            //finalPassword += "a";
            // As I added counter +=1 at the top of the while loop.
            valueRandom = Math.floor(Math.random() * 31);
            // call the pCritera uppercase object
            finalPassword += pCriteria.symbols.criteria[valueRandom];
            //to check if the user had any other criteria options.
            //UserCounter += 1;
            break;
        }

      }
    
    //return finalpassword

    console.log("Final password is: " + finalPassword);

 
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

