"use strict";
const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;
    let playerTurn = true;


    this.start = function () {
        const config = {childList: true};
        const observer = new MutationObserver(() => takeTurn());
        board.position.forEach((el) => observer.observe(el, config));
        takeTurn();

    };

    function takeTurn() {
        if (board.checkForWinner()) {
            return;
        }
        if (turn % 2 === 0) {
            humanPlayer.takeTurn();
            playerTurn = false;
        } else {
            computerPlayer.takeTurn();
            playerTurn = true;
        }

        turn++;
    }


    function Board() {
        this.position = Array.from(document.querySelectorAll(".col"));
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
            const positions = this.position;
            winningCombinations.forEach((winningCombo) => {
                const pos0InnerText = positions[winningCombo[0]].innerText;
                const pos1InnerText = positions[winningCombo[1]].innerText;
                const pos2InnerText = positions[winningCombo[2]].innerText;


                const isWinningCombo = pos0InnerText !== "" &&
                    pos0InnerText === pos1InnerText &&
                    pos1InnerText === pos2InnerText &&
                    pos2InnerText;

                if (isWinningCombo) {
                    winner = true;
                    turn = 0;
                    // alert("Winner!");
                    var delay = 1000;
                    winningCombo.forEach((index) => {
                            positions[index].className += " winner";
                    });
                    var timeoutID = setTimeout(function(){

                        if (playerTurn === false) {
                            alert("Winner!");
                        } else {
                            alert("You lost!");
                        }

                        resetBoard();

                    },delay);
                }
            });
            return winner;

        }
    }

    function HumanPlayer(board) {


        this.takeTurn = function () {
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
            //blocker needs to be implemented in this function
            availablePositions[move].innerText = "O";
        }
    }

    function resetBoard() {
        location.reload();

        // const cellsList = document.getElementsByClassName("col");
        // console.log(cellsList);
        // for (let i = 0; i < cellsList.length; i++) {
        //     cellsList[i].innerHTML = "";
        //     cellsList[i].style.color = "black";
        // }

    }
    var backButton = document.getElementById("back-button");
    backButton.addEventListener("click", function(){
        alert("button was clicked")

    });
    var homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", function(){
        alert("button was clicked")

    });
}

