function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];

    let choice = Math.floor(Math.random () * 3);

    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return 'Empate';
    }

    if (playerSelection === 'rock'){
        switch (computerSelection){
            case 'paper':
            return 'pc';
            break;

            case 'scissors':
            return 'user';
            break;
        }
    }
    if (playerSelection === 'paper'){
        switch (computerSelection){
            case 'rock':
            return 'user';
            break;

            case 'scissors':
            return 'pc';
            break;
        }
    }
    if (playerSelection === 'scissors'){
        switch (computerSelection){
            case 'paper':
            return 'user';
            break;

            case 'rock':
            return 'pc';
            break;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i < 5; i++){
        let ronda = playRound(getComputerChoice(), getComputerChoice());
        (ronda === 'user' ? playerScore++ : computerScore++);  
    }

    return (playerScore>computerScore ? 'Gana usuario' : 'Gana PC');
}

console.log(game());