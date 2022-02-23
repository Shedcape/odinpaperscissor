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
let counter = 0;
let compWins = 0;
let playerWins = 0;
const playGame = (playerselection) => {
    const result = document.createElement('p');
    const section = document.querySelector('#result');
    result.textContent = compare(playerselection, computerPlay());
    section.appendChild(result);
    counter = counter + 1;
    document.querySelector('#counter').textContent = counter;
    if (counter == 5) {
        const announceWinner = document.querySelector('#winner');
        if (playerWins == compWins) {
            announceWinner.textContent = "It's a tie";
        } else if (playerWins > compWins) {
            announceWinner.textContent = `Player wins with ${playerWins} over the computer's ${compWins}`;
        } else {
            announceWinner.textContent = `Computer wins with ${compWins} over the player's ${playerWins}`
        }
        document.querySelector('.buttonholder').setAttribute('style', 'display: none');
        document.querySelector('#tryagain').setAttribute('style', 'display: block');
        document.querySelector('#counter').textContent = '';
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
    const myNode = document.getElementById('result');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    counter = 0;
    compWins = 0;
    playerWins = 0;
    document.querySelector('#winner').textContent = '';
})