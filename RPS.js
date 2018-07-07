var round = 0;
var playerScore = 0;
var computerScore = 0;
var computerSelection;

function computerPlay() {
  var cChoice = Math.random();
  cChoice = parseInt(cChoice * 3);
  if (cChoice === 1) {
    return "rock";
  }
  else if (cChoice === 2) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function choice(pChoice) {
  computerSelection = computerPlay();
  document.getElementById("choosing").innerHTML = "You have chosen " + pChoice + ", computer has chosen " + computerSelection + "." + playRound(pChoice, computerSelection);
}

function cWin() {
  computerScore++;
  document.getElementById("cWin").innerHTML = "Computer Wins: " + computerScore;
  return "Computer wins, point for them!";
}

function pWin() {
  playerScore++;
  document.getElementById("pWin").innerHTML = "PlayerWins: " + playerScore;
  return "Player wins, point for you!";
}

function playRound(playerSelection, computerSelection) {
  upRounds();
  checkRounds();
  if (playerSelection == computerSelection) {
    return "It's a tie! no points won or lost."
  }
  else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return cWin();
    }
    else if (computerSelection == "scissors") {
      return pWin();
    }
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return cWin();
    }
    else if (computerSelection == "rock") {
      return pWin();
    }
  }
  else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return cWin();
    }
    else if (computerSelection == "paper") {
      return pWin();
    }
  }
}

function upRounds() {
  round++;
  document.getElementById("rounds").innerHTML = "Rounds: " + round;
  return round;
}

function checkRounds() {
  if (round === 5) {
    if (playerScore > computerScore) {
      document.getElementById("winner").innerHTML = "You're the winner, wanna play again?";
    } 
    else {
      document.getElementById("winner").innerHTML = "Computer wins, too bad! Wanna play again?";
    }
  } else if (round > 5) {
    clear();
  }
}

function clear() {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  document.getElementById("rounds").innerHTML = "Rounds: " + round;
  document.getElementById("pWin").innerHTML = "PlayerWins: " + playerScore;
  document.getElementById("cWin").innerHTML = "Computer Wins: " + computerScore;
  document.getElementById("winner").innerHTML = "Who will victory go to?";
}