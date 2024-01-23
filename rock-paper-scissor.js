let playerVictory = 0;
let computerVictory = 0;


const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('p');


    buttons.addEventListener('click', ()=>{
        console.log('hi')
        WhoWon(element.className);
    })




function WhoWon(playerSelection){
    let result = ComputerSelection();
    if(playerSelection === result){
        resultText.textContent = 'Tie';
    }else{
        switch (playerSelection) {
            case 'rock':
                    if (result === "scissor")  {resultText.textContent = `${playerSelection} beats ${result}`; playerVictory++;}
                    else {resultText.textContent = `${result} beats ${playerSelection}`; computerVictory++;}
                break;
        
            case 'paper':
                if (result === "rock")  {resultText.textContent = `${playerSelection} beats ${result}`; playerVictory++;}
                else {resultText.textContent = `${result} beats ${playerSelection}`; computerVictory++;}
                break;

            case 'scissor':
                if (result === "paper")  {resultText.textContent = `${playerSelection} beats ${result}`; playerVictory++;}
                    else {resultText.textContent = `${result} beats ${playerSelection}`; computerVictory++;}
                    break;
        }
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

