let wordBank = ["finances", "money", "bank", "withdrawal", "deposit", "chores"];
let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer =  wordBank[Math.floor(Math.random() * wordBank.length)];
}

//generate letter buttons
function generateButtons() {
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(letter => `<button class="btn btn-lrg btn-primary m-2" 
id='` + letter + `' 
onClick = "handleGuess('` + letter + `')">
` + letter + `
</button>
`).join("");

document.getElementById("keyboard").innerHTML = buttonsHTML;

    
}
function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if(answer.indexOf(chosenLetter) >= 0){
        guessedWord();
        checkIfGameWon();
    }else if(answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes();
    }
}
//Check if Game Won
function checkIfGameWon() {
    if(wordStatus === answer){
        document.getElementById("keyboard").innerHTML = "You Won!";
    }
}
//Check if Game Lost
function checkIfGameLost() {
    if(mistakes === maxWrong){
        document.getElementById("wordSpotLight").innerHTML = "The answer was: " + answer;
        document.getElementById("keyboard").innerHTML = "You Lost!";
    }
}

//word spotlight area
function guessedWord(){
   wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join("");
   document.getElementById("wordSpotLight").innerHTML = wordStatus;
}

//mistakes
function updateMistakes() {
    document.getElementById("mistakes").innerHTML = mistakes;
}

//Reset Button
function reset(){
    mistakes = 0;
    guessed = [];
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}

//wrong guesses
document.getElementById("maxWrong").innerHTML = maxWrong;


randomWord();
generateButtons();
guessedWord();