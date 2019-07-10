let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const socreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function main(){
    rock_div.addEventListener('click', function() {
        game('r');
    })
    
    paper_div.addEventListener('click', function() {
        game('p');

    })
    
    scissors_div.addEventListener('click', function() {
        game('s');
    })
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'sp':
        case 'pr':
        case 'rs':
            win(userChoice, computerChoice);
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            draw();
            break;
        default:
            lose(userChoice, computerChoice)
            break;
    }
}

function getComputerChoice(){
    const choices = ['r','p','s'];
    const rndNum = Math.floor(Math.random()*3);
    return choices[rndNum];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();

    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 
                                beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 1500);
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();

    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 
                                loses ${convertToWord(computerChoice)}${smallCompWord}. You Lose...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 1500);
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();

    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 
                                equals ${convertToWord(computerChoice)}${smallCompWord}. AGAIN~~`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')}, 1500);
}

function convertToWord(letter){
    switch (letter) {
        case 'r':
            return 'Rock';
        case 'p':
            return 'Paper';
        default:
            return 'Scissors';
    }
}