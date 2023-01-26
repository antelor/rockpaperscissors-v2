let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let choice = Math.floor(Math.random () * 3);

    return choices[choice];
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice()

    if (playerSelection === computerSelection){
        return 'Empate';
    }

    if (playerSelection === 'rock'){
        switch (computerSelection){
            case 'paper':
            computerScore++;
            return 'pc';
            break;

            case 'scissors':
            playerScore++;
            return 'user';
            break;
        }
    }
    if (playerSelection === 'paper'){
        switch (computerSelection){
            case 'rock':
            playerScore++;
            return 'user';
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
            return 'user';
            break;

            case 'rock':
            computerScore++;
            return 'pc';
            break;
        }
    }
}

//button listeners
let buttons = document.querySelectorAll(".selection");
let results = document.querySelector(".results");
let computerScoreElement = document.querySelector("#computerScore");
let playerScoreElement = document.querySelector("#playerScore");

buttons.forEach((button) => {  
  button.addEventListener('click', () => {
      let p = document.createElement('p');
      p.textContent = playRound(button.id);
      results.appendChild(p);

      computerScoreElement.textContent = computerScore;
      playerScoreElement.textContent = playerScore;

      if (computerScore === 5) {
        let p2 = document.createElement('h1');
        p2.textContent = "gana pc";
        results.appendChild(p2);
      }


      if (playerScore === 5) {
        let p2 = document.createElement('h1');
        p2.textContent = "gana player";
        results.appendChild(p2);
      }
  });
});