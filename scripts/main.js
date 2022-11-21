let playerCountWins = 0;
let computerCountWins = 0;

game();

function game() {
    const playerRoundCount = 5;
    for (let i = 0; i < playerRoundCount; i++){
        let round = playRound(getComptuerChoice(),playerSelections());
        console.log(round);  
    }
    console.log("Game of 5 rounds has ended");
    if (playerCountWins > computerCountWins){
        console.log(`Player have won ${playerCountWins} to ${computerCountWins}.`);
    } else console.log(`Computer have won ${computerCountWins} to ${playerCountWins}.`);
}


function playRound(getComptuerChoice, playerSelections) {
    if (getComptuerChoice.toUpperCase() === playerSelections.toUpperCase()){
        playerCountWins++;
        computerCountWins++;
        return  `You tied! ${getComptuerChoice} equal ${playerSelections.slice(0,1)+playerSelections.slice(1).toLowerCase()}.`;

    } else if (getComptuerChoice === 'Rock'){
        if (playerSelections.toUpperCase() === 'PAPER'){
            playerCountWins++;
            return `You won! ${playerSelections.slice(0,1)+playerSelections.slice(1).toLowerCase()} beats ${getComptuerChoice}.`;
        } else {
            computerCountWins++;
            return `You lose! ${playerSelections.slice(0,1)+playerSelections.slice(1).toLowerCase()} loses to ${getComptuerChoice}.`;
        }

    } else if (getComptuerChoice === 'Paper'){
        if (playerSelections.toUpperCase() === 'SCISSORS'){
            playerCountWins++;
            return `You won! ${playerSelections.slice(0,1)+playerSelections.slice(1).toLowerCase()} beats ${getComptuerChoice}.`;
        } else {
            computerCountWins++;
            return `You lose! ${playerSelections.slice(0,1)+playerSelections.slice(1).toLowerCase()} loses to ${getComptuerChoice}.`;
        }

    } else if (getComptuerChoice === 'Scissors'){
        if (playerSelections.toUpperCase() === 'ROCK'){
            playerCountWins++;
            return `You won! ${playerSelections.slice(0,1)+playerSelections.slice(1).toLowerCase()} beats ${getComptuerChoice}.`;
        } else {
            computerCountWins++;
            return `You lose! ${playerSelections.slice(0,1)+playerSelections.slice(1).toLowerCase()} loses to ${getComptuerChoice}.`;
        }
    }
}

function getComptuerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1 ){
        return 'Rock';
    } else if (computerChoice === 2){
        return 'Paper';
    } else return 'Scissors';
}

function playerSelections() {
    let playerChoice = prompt('Select from Rock, Paper, Scissors (game of 5 rounds)','');
    return playerChoice;
}

