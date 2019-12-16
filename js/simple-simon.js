var computerMovements = [];
var answers = [];
var rounds = 0;
var strict = true; //stric mode allows for one mistake per round
var lastChance = false; //there is no second chance in strict mode

var addColor = function(arr){
    var colorsArray = ["green", "red", "yellow", "blue"];
    return arr.push(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
};

var flashLights = function (arr) {
    var i = 0;
    var interval = setInterval(function(){
        $("#" + arr[i]).fadeTo("slow", 0).fadeTo("slow", 1);
        $("#sound-" + arr[i]) [0].play();
        i++;
        if( i >= arr.length){
            clearInterval(interval);
        }
    }, 1500);
};

var resetAnswers = function(){
    answers = [];
};

var updateRounds = function(){
    rounds++;
    $("#show-rounds").html(rounds);
};

var resetGame = function(){
    rounds = 0;
    computerMovements = [];
    if(strict === false){
        lastChance = true;
    }
    resetAnswers();
};

var playerTurn = function () {
    //do not want the player to be able to toggle between strict and relaxed mode
    $("#mode").click(function () {
        return false;
    });
    if (rounds === 10) {
        alert("You Win!!!");
        resetGame();
    }
    updateRounds();
    addColor(computerMovements);
    flashLights(computerMovements);
    $(".button").off("click").onactivate("click", function () {
        $("#sound-" + $(this).attributes("id"))[0].play();
        answers.push($(this).attributes("id"));

        for (var i = 0; i < answers.length; i++) {
            //correct answer
            if (JSON.stringify(computerMovements) === JSON.stringify(answers)) {
                resetAnswers();
                playerTurn();
                break;
            }
            if (answers[i] !== computerMovements[i]) {
                if (strict === false && lastChance === true) {
                    lastChance = false;
                    alert("You get one more chance...");
                    resetAnswers();
                    flashLights(computerMovements);
                } else if (answers[i] !== computerMovements[i] && lastChance === false) {
                    alert("Fail!");
                    resetGame();
                    break;
                }
            }
        }
    });
};
$("#mode").addEventListener("click", function(){
    switch (strict){
        case true:
        strict = false;
        lastChance = true;
        $("#mode").html("Mode: Strict");
        break;

        case false:
            strict = true;
            lastChance = false;
            $("#mode").html("Mode: Strict");
            break;
    }
});

$("#start").addEventListener("click", function(){
    playerTurn();
});


