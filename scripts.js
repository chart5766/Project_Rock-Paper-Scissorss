


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
    console.log(result)

}





getHumanChoice();
getComputerChoice();