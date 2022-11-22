let playerCountWins = 0;
let computerCountWins = 0;
let btns = document.querySelectorAll('.btns');
let output = document.querySelector('#output');


btns.forEach(button => {
    button.addEventListener('click', getChoose);
})


function getChoose(e){
    if (computerCountWins >= 5 || playerCountWins >= 5){button.removeEventListener('click',getChoose);}
    let div = document.createElement('div');
    div.textContent = playRound(getComptuerChoice(),e.target.textContent);
    div.textContent += ` Player result:${playerCountWins} | Computer result:${computerCountWins}`
    output.appendChild(div);
    getResultMessage();
}


function getResultMessage() {
    if (playerCountWins === 5 && computerCountWins === 5){
      let divResult = document.createElement('div');
      divResult.textContent = `It's a tie ${computerCountWins} to ${playerCountWins}.`;
      output.appendChild(divResult);
    } else if (computerCountWins >= 5) {
        let divResult = document.createElement('div');
        divResult.textContent = `Computer have won ${computerCountWins} to ${playerCountWins}.`;
        output.appendChild(divResult);
    } else if(playerCountWins >= 5){
        let divResult = document.createElement('div');
        divResult.textContent = `Player have won ${playerCountWins} to ${computerCountWins}.`;
        output.appendChild(divResult);
    }}


function playRound(getComptuerChoice, playerSelections) {
    if (getComptuerChoice.toUpperCase() === playerSelections.toUpperCase()){
        playerCountWins++;
        computerCountWins++;
        return `You tied! ${getComptuerChoice} equal ${playerSelections.slice(0,1)+playerSelections.slice(1).toLowerCase()}.`;

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

