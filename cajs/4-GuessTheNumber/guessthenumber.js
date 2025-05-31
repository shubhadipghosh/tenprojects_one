const randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector("#subt");
const userInp = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const par1 = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
    submit.addEventListener("click", function(event){
        event.preventDefault();
        const guess = parseInt(userInp.value);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (guess === '' || isNaN(guess)){
        alert("please enter a valid number between 1 to 100");
    }else if(guess < 1){
        alert("please enter a valid number between 1 to 100");
    }else if(guess>100){
        alert("please enter a valid number between 1 to 100");
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessages(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
             displayGuess(guess);
             checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if (guess===randomNumber){
        displayMessages(`You guessed it right`);
        endGame();
    }else if (guess<randomNumber){
        displayMessages(`guessed number is low`);
    }else if(guess>randomNumber){
        displayMessages(`Gussed number is high`);
    }
}

function displayGuess(guess){
    userInp.value='';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML =`${11-numGuess}`;
}

function displayMessages(msg){
    lowOrHi.innerHTML =`<h2>${msg}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(event){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML =`${11-numGuess}`;
        userInp.removeAttribute('disabled');
        startOver.removeChild('par1');
        playGame = true;
    })
}

function endGame(){
    userInp.value='';
    userInp.setAttribute('disabled','')
    par1.classList.add('button');
    par1.innerHTML = `<h2 id='newGame'>Start new game</h2>`;
    startOver.appendChild(par1);
    playGame = false;
    newGame();
}