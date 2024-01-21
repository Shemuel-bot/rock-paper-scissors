
let computerVictory = 0;
let playerVictory = 0;
let amountOfLooping = 5;

for (let index = 0; index < amountOfLooping; index++) {
    let userInput = prompt("Choose Rock paper or scissors.");
    Game(userInput.toLocaleLowerCase());
    if(index > 5){
        console.log("Game Score");
        console.log("Computer:" + computerVictory);
        console.log("You:" + playerVictory);
    } 
}
function Game(playerInput){
    const answer = ComputerSelection()
    if(playerInput === answer){
        console.log("Tie");
        amountOfLooping++;

    }else if(playerInput != answer){

        switch(playerInput){
        
        case "scissor":
            if(answer == "paper")
            {console.log(`You Won! ${playerInput} beats ${answer}!`); playerVictory++;}
            else if(answer =="rock"){console.log(`You Lose! ${answer} beats ${playerInput}!`); computerVictory++; }
            break;

        case "rock":
            if(answer == "scissor")
            {console.log(`You Won! ${playerInput} beats ${answer}!`); playerVictory++;}
            else if(answer =="paper"){console.log(`You Lose! ${answer} beats ${playerInput}!`); computerVictory++;}
            break;

        case "paper":
            if(answer == "rock")
            {console.log(`You Won! ${playerInput} beats ${answer}!`); playerVictory++;}
            else if(answer =="scissor"){console.log(`You Lose! ${answer} beats ${playerInput}!`); computerVictory++;}
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