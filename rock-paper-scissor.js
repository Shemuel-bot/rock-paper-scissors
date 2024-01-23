const paper = 






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