let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!!!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
   
    if (guess === "q") {
        break;
    })
   
    if (guess > targetNum) {
        guess = prompt("Your guess was too high. Try again!!")); 
    } else (guess < targetNum) {
        guess = prompt("Your guess was too low. Try again!!"));
    }
}

if (guess === "q") {
    console.log("Okay...you quit!");
} else {
    console.log("Congrats! You win!!!");
    console.log(`YOU GOT IT!!! It only took you ${attempts} tries!`);
}

