const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const socreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

let userScore = 0;
let computerScore = 0;
let _userChoice = null;
let _computerChoice = null;

initializeEvent();

function initializeEvent(){
    rock_div.addEventListener('click', function() {
        _userChoice = 'r'
        game();
    })
    
    paper_div.addEventListener('click', function() {
        _userChoice = 'p'
        game();
    })
    
    scissors_div.addEventListener('click', function() {
        _userChoice = 's'
        game();
    })
}

function game(){
    _computerChoice = getComputerChoice();
    switch (_userChoice + _computerChoice) {
        case 'sp':
        case 'pr':
        case 'rs':
            win();
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            draw();
            break;
        default:
            lose()
            break;
    }
}

function getComputerChoice(){
    let choices = ['r','p','s'];
    let rndNum = Math.floor(Math.random()*3);
    return choices[rndNum];
}

function win(){
    userScore++;
    UpdateIndication('green-glow', 'You Win!');
}

function lose(){
    computerScore++;
    UpdateIndication('red-glow', 'You Lose...');
}

function draw(){
    UpdateIndication('gray-glow', 'AGAIN~~');
}

function UpdateIndication(effect, result){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    let smallUserWord = 'user'.fontsize(3).sub();
    let smallCompWord = 'comp'.fontsize(3).sub();
    let vs = 'v.s.'.fontsize(20).fontcolor('red');
    
    result_div.innerHTML = `${convertToWord(_userChoice)}${smallUserWord} 
                            ${vs} ${convertToWord(_computerChoice)}${smallCompWord}. ${result}`;
    
    let userChoice_div = document.getElementById(_userChoice);
    userChoice_div.classList.add(effect);
    setTimeout(()=>userChoice_div.classList.remove(effect), 1500);
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