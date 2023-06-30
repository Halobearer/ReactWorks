// Generate a random number between 0 and 1

// var guess = confirm("Enter a number")
// console.log(guess)

numberOfTries = 0;
maxTries = 3;

function GetRandomNumber() {
    return Math.floor(Math.random() * 1000 + 1)
}


function validateRandomNumber(attempt) {

    while (numberOfTries < maxTries) {
        if (attempt === GetRandomNumber) {
            console.log("Hooray you got it")
        } else {
            console.log("You failed")
            // console.log("the number was7")
        }
        numberOfTries++;
    }
}

validateRandomNumber(3);
// validateRandomNumber(3)
// validateRandomNumber(3)
// validateRandomNumber(3)