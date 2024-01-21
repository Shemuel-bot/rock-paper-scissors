
let computerVictory;
let playerVictory;

function Play(){
    let userInput = prompt("Choose Rock paper or scissors.");
    WhoWon();
    
}




function ComputerSelection(){
    switch(Math.floor(Math.random() * 3) + 1){
        case 1: 
            return "scissor";
            break;
        case 2:
            return "rock";
            break;
        case 3:
            return "paper";
    }
}


