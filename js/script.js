let playerScore = 0;
let computerScore = 0;
let round = 0

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let choice = Math.floor(Math.random () * 3);

    return choices[choice];
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice()

    if (playerSelection === computerSelection){
        return 'tie';
    }

    if (playerSelection === 'rock'){
        switch (computerSelection){
            case 'paper':
            computerScore++;
            return 'pc';
            break;

            case 'scissors':
            playerScore++;
            return 'player';
            break;
        }
    }
    if (playerSelection === 'paper'){
        switch (computerSelection){
            case 'rock':
            playerScore++;
            return 'player';
            break;

            case 'scissors':
            computerScore++;
            return 'pc';
            break;
        }
    }
    if (playerSelection === 'scissors'){
        switch (computerSelection){
            case 'paper':
            playerScore++;
            return 'player';
            break;

            case 'rock':
            computerScore++;
            return 'pc';
            break;
        }
    }
}

function endGame() {
    buttons.forEach((button) => {
        button.removeEventListener("click", clickCallback);
        button.innerText = "🔁";

        if (playerScore > computerScore) {
            document.querySelector('body').setAttribute('style', 'background-color: #00b20b;')
        }
        else {
            document.querySelector('body').setAttribute('style', 'background-color: #b20000;')
        }

        button.addEventListener('click', () => {
            reset();
        });
    })
}

function reset() {

}

//player score selector
let playerScoreDOM = document.querySelectorAll(".playerGrid");

//computer score selector
let computerScoreDOM = document.querySelectorAll(".computerGrid");

//button listeners
let buttons = document.querySelectorAll(".selection");

function clickCallback(e) {
    let roundResult = playRound(e.target.id);
    console.log(roundResult)

    if (roundResult === 'player') {
        playerScoreDOM[round].textContent = "✅";
        computerScoreDOM[round].textContent = "❌";
    }

    if (roundResult === 'pc') {
        computerScoreDOM[round].textContent = "✅";
        playerScoreDOM[round].textContent = "❌";
    }

    if (roundResult === 'tie') {
        computerScoreDOM[round].textContent = "🙏";
        playerScoreDOM[round].textContent = "🙏";
    }
    
    round++;

    if (round === 5) {
        endGame();
    }
}

buttons.forEach((button) => {
  button.addEventListener('click', clickCallback);
});