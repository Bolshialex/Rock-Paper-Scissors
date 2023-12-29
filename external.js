function getComputerChoice(){
    const rdmChoice = Math.floor(Math.random() * 3 + 1);

    if(rdmChoice === 1){
        return 'rock';
    }
    else if(rdmChoice === 2){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}
function playRound(playerSelection, computerSelection){
    
}