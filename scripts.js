let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    let result = Math.random() * 3;

    if (result < 1) {

        console.log("Rock");
    }

    if (result >= 1 && result < 2) {

        console.log("Paper");
    }

    if (result >= 2) {

        console.log("Scissors")
    }

}


function getHumanChoice() {

    let result = prompt("Rock, Paper, Scissors")

    result = result.toLowerCase();


    console.log(result)

}


function playRound(getHumanChoice, getComputerChoice) {

    if (getHumanChoice === getComputerChoice) {

        
        console.log("Draw");

    }


    if (getHumanChoice === "rock"){

        if (getComputerChoice === "paper") {

            console.log("Paper beats rock");
            computerScore += 1;
        }

        if (getComputerChoice === "scissors") {

            console.log("Rock beats scissors");
            humanScore += 1;
        }
    }


    if (getHumanChoice === "paper"){

        if (getComputerChoice === "rock") {

            console.log("Paper beats rock");
            humanScore += 1;
        }

        if (getComputerChoice === "scissors") {

            console.log("Scissors beat paper");
            computerScore += 1;
        }
    }

    if (getHumanChoice === "scissors") {

        if (getComputerChoice === "rock") {

            console.log("Rock beats scissors");
            computerScore += 1;
        }

        if (getComputerChoice === "paper") {

            console.log("Scissors beat paper");
            humanScore += 1;
        }
    }

    console.log(humanScore);
    console.log(computerScore)

}



getHumanChoice();
getComputerChoice();