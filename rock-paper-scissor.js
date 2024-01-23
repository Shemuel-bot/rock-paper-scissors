let playerVictory = 0;
let computerVictory = 0;


const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('p');


   for (let index = 0; index < buttons.length; index++) {
                buttons[index].addEventListener('click', ()=>{
                    WhoWon(buttons[index].className);
                })
   }




function WhoWon(playerSelection){
    let result = ComputerSelection();
    if(playerSelection === result){
        resultText.textContent = 'Tie';
    }else{
        switch (playerSelection) {
            case 'rock':
                    if (result === "scissor")  {resultText.textContent = `You Win! ${playerSelection} beats ${result}`; playerVictory++;}
                    else {resultText.textContent = `You Lose! ${result} beats ${playerSelection}`; computerVictory++;}
                break;
        
            case 'paper':
                if (result === "rock")  {resultText.textContent = `You Win!${playerSelection} beats ${result}`; playerVictory++;}
                else {resultText.textContent = `You Lose! ${result} beats ${playerSelection}`; computerVictory++;}
                break;

            case 'scissor':
                if (result === "paper")  {resultText.textContent = `You Win! ${playerSelection} beats ${result}`; playerVictory++;}
                    else {resultText.textContent = `You Lose! ${result} beats ${playerSelection}`; computerVictory++;}
                    break;
        }
    }
    if(computerVictory >= 3 || playerVictory >= 3){
        resultText.textContent = `computer score: ${computerVictory}, player score: ${playerVictory}`
        computerVictory = 0;
        playerVictory = 0;
    }
}

function ComputerSelection(){
    
    switch (Math.floor(Math.random() * 3)) {
        case 1:return "rock"
            break;
        case 2:return "paper"
            break;
        case 3:return "scissor"
            break;
    }
}

