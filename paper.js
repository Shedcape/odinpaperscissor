const computerPlay = () => {
    let computer = Math.floor(Math.random()* 3 +1);
    switch (computer) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
        }
   };
let compWins = 0;
let playerWins = 0;
const playGame = (playerselection) => {
    const result = document.querySelector('#result p');
    result.textContent = compare(playerselection, computerPlay());
    document.querySelector('#playerresult').textContent = playerWins;
    document.querySelector('#compresult').textContent = compWins;
    if (compWins == 5 || playerWins == 5) {
        if (playerWins == 5) {
            document.querySelector('#winner').textContent = "You've won. Click the button below if you want to challenge the computer for a new round";
        } else {
            document.querySelector('#winner').textContent = "Game over, the computer won. Click the button below if you want to challenge the computer for a new round";
        }
        document.querySelector('.buttonholder').setAttribute('style', 'display: none');
        document.querySelector('#tryagain').setAttribute('style', 'display: block');
    }
}
const compare = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
            return `It's a tie as ${computerSelection} is the same as ${playerSelection}`
        } else if (playerSelection === "rock" && computerSelection === "scissor") {
            playerWins = playerWins +1;
            return "Player wins because rock beats scissor"
        } else if (playerSelection === "scissor" && computerSelection === "paper") {
            playerWins = playerWins +1;
            return "Player wins because scissor beats paper"
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerWins = playerWins +1;
            return "Player wins because paper beats rock"
        } else {
            compWins = compWins + 1;
            return `Computer wins because ${computerSelection} beats ${playerSelection}`
        }

}

const rock = document.getElementById("rock");
rock.addEventListener('click', () => {
    playGame('rock');
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playGame('paper')});
const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    playGame('scissor')});

document.querySelector('#tryagain').addEventListener('click', () => {
    document.querySelector('.buttonholder').setAttribute('style', 'display: flex');
    document.querySelector('#tryagain').setAttribute('style', 'display: none');
    document.querySelector('#playerresult').textContent = '0';
    document.querySelector('#compresult').textContent = '0';
    document.querySelector('#result p').textContent = '';
    counter = 0;
    compWins = 0;
    playerWins = 0;
    document.querySelector('#winner').textContent = '';
})