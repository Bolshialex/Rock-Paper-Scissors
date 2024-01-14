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
    const plySelection = playerSelection.toLowerCase();
    computerSelection.toLowerCase();

    if(plySelection === 'rock' && computerSelection === 'scissors'){
        return 'You Win! Rock beats Scissors!';
    }
    else if(plySelection === 'scissors' && computerSelection === 'paper'){
        return 'You Win! Scissors beats Paper!';
    }
    else if(plySelection === 'paper' && computerSelection === 'rock'){
        return 'You Win! Paper beats Rock!';
    }
    else if(plySelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper beats Rock!';
    }
    else if(plySelection === 'scissors' && computerSelection === 'rock'){
        return 'You Lose! Rock beats Scissors';
    }
    else if(plySelection === 'paper' && computerSelection === 'scissors'){
        return 'You lose! Scissors beats Paper';
    }
    else{
        return 'It was a Tie!'
    }
}
function game(){
    let playerWinCount = 0;
    let comWinCount = 0;

    for(let i = 0; i < 9; i++){
        const playerEntry = prompt('Please enter a choice between Rock, Paper, or Scissors');
        const compEntry = getComputerChoice();

        const result = playRound(playerEntry,compEntry);

        if(result === 'You Win! Paper beats Rock!' || result === 'You Win! Rock beats Scissors!' || result === 'You Win! Scissors beats Paper!'){
            playerWinCount++;
            console.log(result + '\nThe score is: Player: '+playerWinCount+' Computer: '+comWinCount+'');
            if(playerWinCount === 5){
                console.log('You Won the best of 5 series!');
                break;
            }
        }
        else if(result === 'You Lose! Paper beats Rock!' || result === 'You Lose! Rock beats Scissors' || result === 'You lose! Scissors beats Paper'){
            comWinCount++;
            console.log(result + '\nThe score is: Player: '+playerWinCount+' Computer: '+comWinCount+'');
            if(comWinCount === 5){
                console.log('You Lost the best of 5 series!');
                break;
            }
        }
        else if(result === 'It was a Tie!'){
            console.log('It was a Tie!');
            i--;
        }
        
    }
}