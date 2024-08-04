//taking variables
let userScore = 0;
let compScore = 0;
//accessing dom
const choices = document.querySelectorAll(".choice");
const uScore = document.querySelector(".userscore");
const cScore = document.querySelector(".compscore");
const state = document.querySelector(".msg");
const reset = document.querySelector(".reset");
//getting user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
//generating a computer choice
const generateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rnmdIdx = Math.floor(Math.random() * 3);
  return options[rnmdIdx];
};
//show winner function
const showWinner = (win, userChoice, compChoice) => {
  if (win == true) {
    userScore++;
    uScore.innerText = userScore;
    state.style.color = "green";
    state.innerText = `You won!, your ${userChoice} beats ${compChoice}`;
    //   console.log(`You won!`);
  } else {
    compScore++;
    cScore.innerText = compScore;
    state.innerText = `You lose!, your ${userChoice} lost ${compChoice}`;
    state.style.color = "red";
    // console.log("You lose!");
  }
};
//main game function
const playGame = (userChoice) => {
  console.log("your choice is", userChoice);
  const compChoice = generateCompChoice();
  console.log("comp choice is", compChoice);

  if (userChoice == compChoice) {
    console.log(" game draw");
    state.innerText = "DRAW!";
    state.style.color = "#ffd1d9";
  } else {
    let win = true;
    if (userChoice === "rock") {
      win = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      win = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      win = compChoice === "rock" ? false : true;
    }
    showWinner(win, userChoice, compChoice);
  }
};
//Reset function
reset.addEventListener("click", () => {
  console.log("reset is clicked");
  userScore = 0;
  compScore = 0;
  uScore.innerText = userScore;
  cScore.innerText = compScore;
  state.innerText = `Your Turn!`;
  state.style.color = "#ffd1d9";
});
