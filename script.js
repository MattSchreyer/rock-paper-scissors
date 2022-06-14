function computerPlay(){
    return Math.floor(Math.random() * 3);
    /* if (num === 0) return 'Rock';
    else if (num === 1) return 'Paper';
    else return 'Scissors'; */
}

function playRound(playerSelection, computerSelection = computerPlay()){
    let result = playerSelection - computerSelection;
    
    switch (result){
        case 2:
        case -1:
            console.log(`You Lose! ${translate(computerSelection)} beats ${translate(playerSelection)}.`);
            return -1;
            break;
        case 1:
        case -2: 
            console.log(`You Win! ${translate(playerSelection)} beats ${translate(computerSelection)}.`);
            return 1;
            break;
        default:
            console.log(`It's a tie! ${translate(playerSelection)} ties with ${translate(computerSelection)}.`);
            return 0;
    }
}

function translate(num){
    if (num == 0) return "Rock";
    else if (num == 1) return "Paper";
    else if (num == 2) return "Scissors";
    else return "NAN";
}

function toNum(s){
    let inS = s.toLowerCase();
    if (inS == "rock") return 0;
    else if (inS == "paper") return 1;
    else if (inS == "scissors") return 2;
    else return -1;
}

function game(){
    let win = 0, loss = 0;
    for (let i = 0; (win === 3 || loss === 3); i++){
        let input = toNum(prompt("Please pick either rock, paper, or scissors."));
        if (input < 0){
            i -= 1;
            alert("Invalid choice, please try again.")
            continue;
        }
        let result = playRound(input);
        if (result < 0) loss +=1;
        else if (result > 0) win +=1;
    }
    if (win > loss) console.log(`You won the match ${win} to ${loss}.`);
    else console.log(`You lost the match ${win} to ${loss}.`);
}