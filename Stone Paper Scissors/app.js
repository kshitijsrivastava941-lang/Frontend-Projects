let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw! Play again."
    msg.style.backgroundColor = "#081B31"
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beat ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore
        console.log("You lose!");
        msg.innerText = ("You Lose! " + computerChoice + " beat your " + userChoice);
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("User choice:", userChoice);

    const computerChoice = generateComputerChoice();
    // console.log("Computer choice:", computerChoice);

    if (userChoice === computerChoice) {          // Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock" && computerChoice === "paper") {
            userWin = false;
        }
        else if (userChoice === "paper" && computerChoice === "scissors") {
            userWin = false;
        }
        else if (userChoice === "scissors" && computerChoice === "rock") {
            userWin = false;
        }
        else {
            userWin = true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});