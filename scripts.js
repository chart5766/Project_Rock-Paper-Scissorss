let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    let result = Math.random() * 3;

    if (result < 1) {

        return "rock";
    }

    if (result >= 1 && result < 2) {

        return "paper";
    }

    if (result >= 2) {

        return "scissors"
    }



}


function getHumanChoice() {

    let result = prompt("Rock, Paper, Scissors")

    result = result.toLowerCase();



    return result

}


function playRound(getHumanChoice, getComputerChoice) {

    if (getHumanChoice === getComputerChoice) {

        
        console.log("Draw");
    
}



    else if (getHumanChoice == "rock" && getHumanChoice == "paper"){

        

            console.log("Paper beats rock");
            computerScore++;
            return computerScore
        }

    else if (getHumanChoice == "rock" && getComputerChoice == "scissors") {

            console.log("Rock beats scissors");
            humanScore++;
            return humanScore
        }
       
    


    else if (getHumanChoice == "paper" &&  getComputerChoice == "rock"){

        
            console.log("Paper beats rock");
            humanScore++;
            return humanScore;
        }

    else if (getHumanChoice == "paper" && getComputerChoice == "scissors") {

            console.log("Scissors beat paper");
            computerScore++;
            return computerScore
        }
    
    

    else if (getHumanChoice == "scissors" && getComputerChoice == "rock") {

        

            console.log("Rock beats scissors");
            computerScore++;
            return computerScore;
        }

    else if (getHumanChoice == "scissors" && getComputerChoice == "paper") {

            console.log("Scissors beat paper");
            humanScore++;
            return humanScore;
        }
    
    }

function playGame(playRound) {

    let i = 0;

    while (i < 6) {

        playRound(getHumanChoice(), getComputerChoice())
        i++
        console.log(humanScore)
        console.log(computerScore)
    }


}





playGame(playRound);