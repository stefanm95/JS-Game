const chances = ['Rock', 'Scissors', 'Paper'];
let scorePlayer = 0;
let scoreComputer = 0;
const computerPlay = () => chances[Math.floor(Math.random() * chances.length)];
const playRound = function (playerSelection, computerSelection) {
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
      console.log(`Wrong input! Try Rock, Paper or Scissorsroc`);
  }
  return scorePlayer, scoreComputer;
};
const winnerCheck = function (scorePlayer, scoreComputer) {
  if (scorePlayer > scoreComputer) {
    console.log(`You won! ${scorePlayer} vs ${scoreComputer} 😊`);
  } else if (scorePlayer < scoreComputer) {
    console.log(`You lost! ${scoreComputer} vs ${scorePlayer} 😒`);
  } else console.log(`It is a draw! ${scorePlayer} vs ${scoreComputer} `);
  return `${scorePlayer} : ${scoreComputer}`;
};
const game = function (args) {
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
