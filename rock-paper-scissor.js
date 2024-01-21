
let computerVictory;
let playerVictory;

let userInput = prompt("Choose Rock paper or scissors.");


WhoWon(userInput.toLocaleLowerCase());
        
    




function WhoWon(playerInput){
    const answer = ComputerSelection()
    if(playerInput === answer){
        console.log("Tie");

    }else if(playerInput != answer){

        switch(playerInput){
        
        case "scissor":
            if(answer == "paper")
            {console.log(`You Won! ${playerInput} beats ${answer}!`)}
            else if(answer =="rock"){console.log(`You Lose! ${answer} beats ${playerInput}!`)}
            break;

        case "rock":
            if(answer == "scissor")
            {console.log(`You Won! ${playerInput} beats ${answer}!`)}
            else if(answer =="paper"){console.log(`You Lose! ${answer} beats ${playerInput}!`)}
            break;

        case "paper":
            if(answer == "rock")
            {console.log(`You Won! ${playerInput} beats ${answer}!`)}
            else if(answer =="scissor"){console.log(`You Lose! ${answer} beats ${playerInput}!`)}
            break;
    }
}

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


