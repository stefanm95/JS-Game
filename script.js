const chances = ['Rock', 'Scissors', 'Paper'];
let scorePlayer = 0;
let scoreComputer = 0;
let i = 0;
const computerPlay = () => chances[Math.floor(Math.random() * chances.length)];
const playerPlay = function () {
  while (true) {
    const playerChoice = prompt(
      'Write your selection [Rock, Paper or Scissors]'
    ).toLowerCase();
    if (
      playerChoice == 'rock' ||
      playerChoice == 'paper' ||
      playerChoice == 'scissors'
    ) {
      return playerChoice;
    } else {
      console.log(`Wrong input. Please type Rock, Paper or Scissors`);
    }
  }
};
function playRound(playerSelection, computerSelection) {
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
      break;
    default:
      console.log(`Wron input!`);
  }
  return scorePlayer, scoreComputer;
}
const winnerCheck = function (scorePlayer, scoreComputer) {
  if (scorePlayer > scoreComputer) {
    console.log(`You won! ${scorePlayer} vs ${scoreComputer} 😊`);
  } else if (scorePlayer < scoreComputer) {
    console.log(`You lost! ${scorePlayer} vs ${scoreComputer} 😒`);
  } else console.log(`It is a draw! ${scorePlayer} vs ${scoreComputer} `);
  return `${scorePlayer} : ${scoreComputer}`;
};
const game = function () {
  for (let i = 0; i < 5; i++) {
    let playerText = playerPlay();
    playRound(playerText, computerPlay());
    {
      console.log(
        `Your score: ${scorePlayer}`,
        `Computer's score: ${scoreComputer}`
      );
    }
  }
  return winnerCheck(scorePlayer, scoreComputer);
};
game();
