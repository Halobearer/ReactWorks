// alert("You have a max of 3 Tries\n After that :GET OUT")


const button = document.getElementsByClassName('Button')

button.addEventListener("click", function () {
    guess();


});
function guess() {
    const generatedNumber = Math.floor(Math.random() * 100) + 1;

   const maxTries = 3;

   let attempt = 0;
    while (attempt < maxTries) {
        // const input = document.getElementById("InputBox").value;
        const input = parseInt(prompt(`Guess a number from 1 - 100`));
        if (input === generatedNumber) {
            alert("You've won now leave");
        } else {
            alert("Loser");
        }
        attempt++;
    }
}
// window.reload


//
// function handleInput() {
// }
//
// numberOfTries = 0;
// maxTries = 3;
//
// // return Math.floor(Math.random() * 1000 + 1);
//
//
// //
// // handleInput().addEventListener("change", function () {
// //     console.log("this button was clicked")
// // });
//
// //});
// gue = 22;
//
// function GetRandomNumber() {
//     return Math.floor(Math.random() * 1000 + 1);
// }
//
// let userInput = window.prompt("Guess a number from 1-1000", "my Guy")
//
// function validateRandomNumber(attempt) {
//
//     while (numberOfTries < maxTries) {
//         if (userInput === GetRandomNumber) {
//
//             console.log("Hooray you got it\n NOW LEAVE!!!")
//         } else {
//             console.log("You failed\n GET OUT")
//             // console.log("the number was7")
//         }
//         numberOfTries++;
//     }
// }
//
// button.addEventListener("click", GetRandomNumber);
// button.addEventListener("click", validateRandomNumber);
// button.addEventListener("input", handleInput)


// button.addEventListener("click", function() {
//     const number = Number(input.value);
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// });