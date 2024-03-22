// Function:
// 1. Logical Grouping of lines of code i.e. actions
// 2. Reusability
// 3. separate of concerns

// startGame();

const startGameBtn = document.getElementById('start-game-btn');
/* ----------------------------------------------------------
 /*                            Function Declaration                           */
/* ------------------------------------------------------------------------- */
// Method 1 :  function declaration / statement
// function startGame() {
//   console.log(`game is starting......`);
// }

// Method 2:  function Expression
// const startGame = function () {
//   console.log(`game is starting......`);
// };

// just to nullify the memory referrence of startGame variable for making it elligible for garbage collection
// startGame = null;

// Direct call on page load time
// startGame();

//  indirect call by browser
// ( when call happens ?
// ans> once you click on start game button)
// startGameBtn.addEventListener('click',`startGame`);

// anonymous Function
startGameBtn.addEventListener('click', function () {
  console.log(`game is starting......`);
});

// it's invoked directly not registered
// startGameBtn.addEventListener('click',startGame());

// const person =
// {
//     name: 'Raha Technologies',
//     greet: function (){
//         console.log(`Hello There!`);
//     }

// };

// // console.log(person.name);
// person.greet();

// console.dir(startGame);
