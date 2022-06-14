function computerPlay(){
    return Math.floor(Math.random() * 3) + 1;
    /* if (num === 0) return 'Rock';
    else if (num === 1) return 'Paper';
    else return 'Scissors'; */
}

function playRound(playerSelection, computerSelection = computerPlay()){
    let result = false;
    if (playerSelection == 0 && computerSelection == 2) result = true;
    else if (playerSelection > computerSelection) result = true;
}