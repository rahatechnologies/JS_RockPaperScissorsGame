const startGameBtn = document.getElementById('start-game-btn');
 
const ROCK ='ROCK' 
const PAPER ='PAPER'
const SCISSORS ='SCISSORS'

const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WIN = 'PLAYER_WIN';
const RESULT_PLAYER_LOSS = 'PLAYER_LOSS';

const DEFAULT_USER_CHOICE =  ROCK;
let isGameStarted = false;
const getPlayerChoice =  function(){

    // const selection 
  const selection = prompt( `${ROCK}, ${PAPER}, ${SCISSORS}?`, `` ).trim().toUpperCase();

    if(selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS){
        alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE} for you!`);

        // Method 1: handling of Default value
        // return DEFAULT_USER_CHOICE;
        return ;
    }

    return selection;
}



const getComputerChoice = function(){
    const randomValue  = Math.random();
    console.log('randomValue', randomValue);
    if(randomValue < 0.34){
       return ROCK;
    }else if(randomValue <0.67){
       return PAPER;

    }else{
       return SCISSORS;
    }
}

//  function Statement ( Hoisting)
// function getWinner(cChoice, pChoice){
// }

//  function Expression
// const getWinner  = function (cChoice, pChoice){
// }

// //  arrow function
// // more than one parameters
// const getWinner  =  (cChoice, pChoice) => {
// }

// const getWinner  =  (cChoice) => {
// }


// const getWinner  =  () => {
// }


// const getWinner  =  (a, b) => {
//      a + b;
//     //a * b
//     //
//     return a*b;

// }


// Method 3: handling of Default value
const getWinner = (cChoice, pChoice = cChoice === ROCK ? PAPER : DEFAULT_USER_CHOICE) => {

    console.log('pChoice', pChoice)
    console.log('cChoice', cChoice)

  return cChoice === pChoice
    ? RESULT_DRAW
    : (pChoice === PAPER && cChoice === ROCK) ||
      (pChoice === SCISSORS && cChoice === PAPER) ||
      (pChoice === ROCK && cChoice === SCISSORS)
    ? RESULT_PLAYER_WIN
    : RESULT_PLAYER_LOSS;

  //    if(cChoice === pChoice){
  //        return RESULT_DRAW;
  //    }else if (
  //      (pChoice === PAPER && cChoice === ROCK) ||
  //      (pChoice === SCISSORS && cChoice === PAPER) ||
  //      (pChoice === ROCK && cChoice === SCISSORS)
  //    ) {
  //      return RESULT_PLAYER_WIN;
  //    }else{
  //      return RESULT_PLAYER_LOSS;
  //    }
};

startGameBtn.addEventListener('click', function(){

    if(isGameStarted){
        return;
    }
    isGameStarted =true;
    console.log(`Game is Starting....`);
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    //  debug purpose only
    console.log('playerSelection', playerSelection);
    console.log('computerSelection', computerSelection);
    
    let winner ; 
     winner = getWinner(computerSelection, playerSelection);
    

    // if(playerSelection){
    //     // playerSelection has value out of 3 (i.e. rock, paper , scissors)
    //     winner = getWinner(computerSelection, playerSelection);
    // }else{
    //   // playerSelection has other value than 3 (i.e. rock, paper , scissors)
    //   // Method 2: handling of Default value
    //   // playerSelection =DEFAULT_USER_CHOICE;
    //   winner = getWinner(computerSelection, playerSelection);
    // }
    console.log('result', winner);

 let message = `You picked ${playerSelection ? playerSelection : DEFAULT_USER_CHOICE} and Computer Picked ${computerSelection}, threfore you had a `;

 if(winner === RESULT_DRAW){
     message += `draw!`;
 }else if (winner === RESULT_PLAYER_WIN){
      message += `win!`;
 }else if (winner === RESULT_PLAYER_LOSS) {
      message += `loss!`;
 }

alert(message);
isGameStarted = false;

})