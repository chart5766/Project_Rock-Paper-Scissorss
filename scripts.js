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
            computerScore ++;
            return computerScore
        }

    else if (getHumanChoice == "rock" && getComputerChoice == "scissors") {

            console.log("Rock beats scissors");
            humanScore ++;
            return humanScore
        }
       
    


    else if (getHumanChoice == "paper" &&  getComputerChoice == "rock"){

        
            console.log("Paper beats rock");
            humanScore ++;
            return humanScore;
        }

    else if (getHumanChoice == "paper" && getComputerChoice == "scissors") {

            console.log("Scissors beat paper");
            computerScore ++;
            return computerScore
        }
    
    }

//     if (getHumanChoice == "scissors") {

//         if (getComputerChoice == "rock") {

//             console.log("Rock beats scissors");
//             computerScore += 1;
//         }

//         if (getComputerChoice == "paper") {

//             console.log("Scissors beat paper");
//             humanScore += 1;
//         }
//     return computerScore, humanScore;
//     }

//     console.log(humanScore);
//     console.log(computerScore)

// }



getHumanChoice();
getComputerChoice();
playRound(getHumanChoice(), getComputerChoice());