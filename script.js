'use strict';

let chances = ['Rock', 'Scissors', 'Paper'];
let computerPlay = () => chances[Math.floor(Math.random() * chances.length)];
let scorePlayer = 0;
let scoreComputer = 0;
// const playerPlay = function () => ;

let playRound = function (playerSelection, computerSelection) {
  switch ((playerSelection + computerSelection).toLowerCase()) {
    case 'ScissorsPaper'.toLowerCase():
    case 'RockScissors'.toLowerCase():
    case 'PaperRock'.toLowerCase():
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      scorePlayer += 1;
      break;
    case 'PaperScissors'.toLowerCase():
    case 'ScissorsRock'.toLowerCase():
    case 'RockPaper'.toLowerCase():
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
      scoreComputer += 1;
      break;
    case 'PaperPaper'.toLowerCase():
    case 'RockRock'.toLowerCase():
    case 'ScissorsScissors'.toLowerCase():
      console.log(`Draw`);
      scoreComputer += 1;
      scorePlayer += 1;
  }
  return scorePlayer, scoreComputer;
};

const playerSelection = 'Rock';
let computerSelection = computerPlay();

const winnerCheck = function (scorePlayer, scoreComputer) {
  if (scorePlayer > scoreComputer) {
    console.log(`You won! 😊`);
  } else if (scorePlayer < scoreComputer) {
    console.log(`You lost! 😒`);
  } else console.log(`Draw!`);
  return `${scorePlayer} : ${scoreComputer}`;
};
let game = function (args) {
  for (let i = 0; i < args; i++) {
    playRound(prompt(chances), computerPlay());
    console.log(
      `Your score: ${scorePlayer}`,
      `Computer's score: ${scoreComputer}`
    );
  }
  return winnerCheck(scorePlayer, scoreComputer);
};

const fiveRepsGame = game(5);
console.log(fiveRepsGame);
