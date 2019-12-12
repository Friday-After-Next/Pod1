"use strict";
const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();
function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;



    this.start = function(){
        const config = {childList: true };
        const observer = new MutationObserver(() => takeTurn());
        board.position.forEach((el) => observer.observe(el, config));
        takeTurn();

    };

    function takeTurn() {
        if(board.checkForWinner()){
            return;
        }
        if ( turn % 2 === 0){
            humanPlayer.takeTurn();
        }else {
            computerPlayer.takeTurn();
        }

        turn++;
    }
}

function Board(){
    this.position = Array.from(document.querySelectorAll(".col"));

    //0 1 2
    //3 4 5
    //6 7 8

    this.checkForWinner = function () {
        let winner = false;
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ];
        const positions = this.position
        winningCombinations.forEach((winningCombo) =>{
            const pos0InnerText = positions[winningCombo[0]].innerText;
            const pos1InnerText = positions[winningCombo[1]].innerText;
            const pos2InnerText = positions[winningCombo[2]].innerText;


            const isWinningCombo = pos0InnerText !== "" &&
                pos0InnerText === pos1InnerText &&
                pos1InnerText === pos2InnerText &&
                pos2InnerText;

            if(isWinningCombo){
                winner = true;
                winningCombo.forEach((index) =>{
                    positions[index].className += " winner";
                })
            }
        });
        return winner;

    }
}

function HumanPlayer(board){


    this.takeTurn = function(){
        board.position.forEach(el => el.addEventListener("click", handleTurnTaken));

    };
    function handleTurnTaken(event) {
        event.target.innerText = "X";
        board.position.forEach(el => el.removeEventListener("click", handleTurnTaken));

    }
}

function ComputerPlayer(board) {


    this.takeTurn = function () {
        const availablePositions = board.position.filter((p) => p.innerText === "");
        const move = Math.floor(Math.random() * availablePositions.length);
        availablePositions[move].innerText = "O";
    }
}
//     const cell1El = document.getElementById("cell1");
//
//     let cell1Clicked = function() {
//         cell1El.addEventListener("click", function() {
//             cell1El.classList.add("zero");
//         });
//     };
//
//     cell1Clicked();
//
//     const cell2El = document.getElementById("cell2");
//
//     let cell2Clicked = function() {
//         cell2El.addEventListener("click", function() {
//             // if playerID == 1, do green, else if playerID == 2, do red
//             cell2El.classList.add("ab");
//         });
//     };
//
//     cell2Clicked();
//
// const cell3El = document.getElementById("cell3");
//
// let cell3Clicked = function() {
//     cell3El.addEventListener("click", function() {
//         // if playerID == 1, do green, else if playerID == 2, do red
//         cell3El.classList.add("two");
//     });
// };
//
// cell3Clicked();
//
// const cell4El = document.getElementById("cell4");
//
// let cell4Clicked = function() {
//     cell4El.addEventListener("click", function() {
//         // if playerID == 1, do green, else if playerID == 2, do red
//         cell4El.classList.add("ex");
//     });
// };
//
// cell4Clicked();
//
// const cell5El = document.getElementById("cell5");
//
// let cell5Clicked = function() {
//     cell5El.addEventListener("click", function() {
//         // if playerID == 1, do green, else if playerID == 2, do red
//         cell5El.classList.add("ex");
//     });
// };
//
// cell5Clicked();
//
// const cell6El = document.getElementById("cell6");
//
// let cell6Clicked = function() {
//     cell6El.addEventListener("click", function() {
//         // if playerID == 1, do green, else if playerID == 2, do red
//         cell6El.classList.add("ex");
//     });
// };
//
// cell6Clicked();
//
// const cell7El = document.getElementById("cell7");
//
// let cell7Clicked = function() {
//     cell7El.addEventListener("click", function() {
//         // if playerID == 1, do green, else if playerID == 2, do red
//         cell7El.classList.add("ex");
//     });
// };
//
// cell7Clicked();
//
// const cell8El = document.getElementById("cell8");
//
// let cell8Clicked = function() {
//     cell8El.addEventListener("click", function() {
//         // if playerID == 1, do green, else if playerID == 2, do red
//         cell8El.classList.add("ex");
//     });
// };
//
// cell8Clicked();
//
// const cell9El = document.getElementById("cell9");
//
// let cell9Clicked = function() {
//     cell9El.addEventListener("click", function() {
//         // if playerID == 1, do green, else if playerID == 2, do red
//         cell9El.classList.add("ex");
//     });
// };
//
// cell9Clicked();


