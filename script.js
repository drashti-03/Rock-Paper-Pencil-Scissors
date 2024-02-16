let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let pencil = document.getElementById('pencil');
let scissors = document.getElementById('scissors');

let result = '';
let computerMove = '';
let playerMove = '';

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScore();


function playGame(playerMove) {
    let computerMove = pickComputerMove();
    if(playerMove ==='rock') {
        if(computerMove === 'rock'){
            result = 'Tie.';
        } 
        else if(computerMove === 'paper') {
            result = 'You Lose.';
        }
        else if(computerMove === 'pencil') {
                result = 'You Win!';
        }
        else if(computerMove === 'scissors') {
            result = 'You Win!';
        }
        
    }

    else if(playerMove ==='paper') {
        if(computerMove === 'rock'){
            result = 'You win!';
        } 
        else if(computerMove === 'paper') {
            result = 'Tie.';
        }
        else if(computerMove === 'pencil') {
                result = 'You Lose.';
        }
        else if(computerMove === 'scissors') {
            result = 'You Lose.';
        }
        
       
    }

    else if(playerMove ==='pencil') {
        if(computerMove === 'rock'){
            result = 'You Lose.';
        } 
        else if(computerMove === 'paper') {
            result = 'You Win!';
        }
        else if(computerMove === 'pencil') {
                result = 'Tie.';
        }
        else if(computerMove === 'scissors') {
            result = 'You Win!';
        }
        
       
    }

    else if(playerMove ==='scissors') {
        if(computerMove === 'rock'){
            result = 'You Lose.';
        } 
        else if(computerMove === 'paper') {
            result = 'You Win!';
        }
        else if(computerMove === 'pencil') {
                result = 'You Win!';
        }
        else if(computerMove === 'scissors') {
            result = 'Tie.';
        }       
       
    }

    if (result === 'You Win!') {
        score.wins += 1;
    }
    else if (result === 'You Lose.'){
        score.losses += 1;
    }
    else if (result === 'Tie.'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.results').innerHTML = result;

    document.querySelector('.moves').innerHTML = `You <img src="./images/${playerMove}.png" alt="" class="btnpencil"> 
    <img src="./images/${computerMove}.png" alt="" class="btnrock"> Computer`;

}

function updateScore() {
    document.querySelector('.scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;

}

function pickComputerMove() {
    const randomNumber = Math.random();
    // console.log(randomNumber);
        
    if(randomNumber>= 0 && randomNumber < 1/4) {
        computerMove = 'rock';
    }
    else if(randomNumber>= 1/4 && randomNumber < 1/2) {
        computerMove = 'paper';
    }
    else if(randomNumber>=1/2 && randomNumber < 3/4) {
        computerMove = 'pencil';
    }
    else if(randomNumber>=3/4 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
};

