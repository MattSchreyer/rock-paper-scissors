const resultDiv = document.querySelector('.winner');
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
            resultDiv.textContent = `You Lose! ${translate(computerSelection)} beats ${translate(playerSelection)}.`;
            return -1;
            break;
        case 1:
        case -2: 
            resultDiv.textContent = `You Win! ${translate(playerSelection)} beats ${translate(computerSelection)}.`;
            return 1;
            break;
        default:
            resultDiv.textContent = `It's a tie! ${translate(playerSelection)} ties with ${translate(computerSelection)}.`;
            return 0;
    }
}

function result(num){
    if (num < 0) loss += 1;
    else if (num > 0) win += 1;
    const running = document.querySelector('.results')
    running.textContent = `${win} - ${loss}`
    if (win == 3 || loss == 3){
        if (win > loss){
            let temp = resultDiv.textContent;
            resultDiv.textContent = `${temp}   You won the match ${win} to ${loss}!`;
        }
        else{
            let temp = resultDiv.textContent;
            resultDiv.textContent = `${temp}   You lost the match ${win} to ${loss}!`;
        };
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
// DEPRECATED
// function game(){
//     let win = 0, loss = 0;
//     for (let i = 0; (win != 3 && loss != 3); i++){
//         let answer = prompt("Please pick either rock, paper, or scissors.");
//         let input = toNum(answer);
//         if (input < 0){
//             i -= 1;
//             alert("Invalid choice, please try again.")
//             continue;
//         }
//         let result = playRound(input);
//         let comp = translate((input + 2) % 3);
//         if (result < 0) {
//             loss +=1;
//             alert(`Round ${i}: You lost, ${comp} beats ${translate(input)}.`);
//         }
//         else if (result > 0) {
//             win +=1;
//             alert(`Round ${i}: You won, ${translate(input)} beats ${comp}.`);
//         }
//         else alert(`It's a tie! Both players picked ${translate(input)}`);
//     }
//     const resultDiv =document.querySelector('.winner')
//     if (win > loss){
//         let temp = resultDiv.textContent;
//         resultDiv.textContent = `${temp}   You won the match ${win} to ${loss}.`;
//     }
//     else{
//         let temp = resultDiv.textContent;
//         resultDiv.textContent = `${temp}   You lost the match ${win} to ${loss}.`;
//     }
// }

//game();

const rockB = document.querySelector('#rock');
const papB = document.querySelector('#paper');
const sciB = document.querySelector('#scissors');
let win = 0,
    loss = 0;

rockB.addEventListener('click', () => {result(playRound(0));});
papB.addEventListener('click', () => {result(playRound(1))});
sciB.addEventListener('click', () => {result(playRound(2))});