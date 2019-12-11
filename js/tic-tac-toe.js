"use strict";
const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;
    let playerID = 0;

    const cell1El = document.getElementById("cell1");

    let cell1Clicked = function() {
        cell1El.addEventListener("click", function() {
            cell1El.classList.add("zero");
        });
    };

    cell1Clicked();

    const cell2El = document.getElementById("cell2");

    let cell2Clicked = function() {
        cell2El.addEventListener("click", function() {
            // if playerID == 1, do green, else if playerID == 2, do red
            cell2El.classList.add("ex");
        });
    };

    cell2Clicked();


    this.start = function () {
        const config = {childList: true};
        // const observer = new MutationObserver(() = > takeTurn();
        // board.positions.forEach((el) = > observer.observe(el, config)
        // )
        ;
        takeTurn();
    };

    function takeTurn() {
        if (turn % 2 === 0) {
            humanPlayer.takeTurn();
        } else {
            computerPlayer.takeTurn()
        }
    }

    turn++;

}

function Board() {
    this.positions = Array.from(document.querySelectorAll(".col"));

}

function HumanPlayer(board) {
    this.takeTurn = function () {
        // board.positions.forEach(el = > el.addEventListener("click", handleturnTaken)
        // )

    };

    function handleTurnTaken(event) {
        event.target.innerText = "X";
        board.positions.forEach(el => el.removeEventListener("click", handleTurnTaken))

    }

}

function ComputerPlayer(board) {
    this.takeTurn = function () {
        const availablePositions = board.positions.filter((p) => p.innerText === "");
        const move = Math.floor(Math.random() * availablePositions.length);
        // availablePositions[move].innerText = "0";
    }

}