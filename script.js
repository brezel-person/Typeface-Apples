const guideBtn = document.getElementById("guideBtn");
const quizBtn = document.getElementById("quizBtn");
const memBtn = document.getElementById("memBtn");
const paperBtn = document.getElementById("paperBtn");
const homeBtn = document.getElementById("homeBtn");



/* Switching between pages buttons */
if(guideBtn){
    guideBtn.addEventListener("click", function(){
        window.location.href="guide.html";
    });
    quizBtn.addEventListener("click", function(){
        window.location.href="quiz.html";
    });
    memBtn.addEventListener("click", function(){
        window.location.href="memory-game.html";
    });
    paperBtn.addEventListener("click", function(){
        window.location.href="apple-paper-scissors.html";
    });
}
if(homeBtn){
    homeBtn.addEventListener("click", function(){
        window.location.href="index.html";
    });
}

/* Quiz Page Functionality */
const intro = document.getElementById("intro");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const result = document.getElementById("result");


$(document).ready(function(){
    var appleQuizPopUp = new bootstrap.Modal($('#appleQuizPopUp')[0]);
    $('#truthBtn').click(() => appleQuizPopUp.show());
});

$("#startBtn").click(function (){
    $("#intro").hide();
    $("#q1").show();
});

$("#q1 button").click(function (){
    $("#q1").hide();
    $("#q2").show();
});

$("#q2 button").click(function (){
    $("#q2").hide();
    $("#q3").show();
});

$("#q3 button").click(function (){
    $("#q3").hide();
    $("#result").show();
});




/* Memory Game Functionality */

let symbols = [
    "game-images/apple.jpg", "game-images/apple.jpg",
    "game-images/basket.jpg", "game-images/basket.jpg",
    "game-images/blossom.jpg", "game-images/blossom.jpg",
    "game-images/harvest.jpg", "game-images/harvest.jpg",
    "game-images/juice.jpg", "game-images/juice.jpg",
    "game-images/pie.jpg", "game-images/pie.jpg"
];


/* Apple Paper Scissors Functionality! */
const choices = ["apple", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;

$(".choice").click(function(){
    let playerChoice = $(this).data("choice");
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    $("#playerChoice").text(playerChoice);
    $("#compChoice").text(computerChoice);
    let winner = whoWon(playerChoice, computerChoice);

    if(winner=="player"){
        playerScore++;
    }
    if(winner=="comp"){
        compScore++;
    }
    $("#playerScore").text(playerScore);
    $("#compScore").text(compScore);
});



function whoWon(player, comp){
    if(player==comp){
        return "nobody";
    }
    if((player=="apple"&&comp=="scissors")||(player=="scissors"&&comp=="paper")||(player=="paper"&&comp=="apple")){
        return "player";
    }
    return "comp";
}

if(resetBtn){
    resetBtn.addEventListener("click", function(){
        playerScore = 0;
        compScore = 0;
        $("#playerScore").text(playerScore);
        $("#compScore").text(compScore);
    });
}
