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

$(document).ready(function(){
    var appleQuizPopUp = new bootstrap.Modal($('#appleQuizPopUp')[0]);
    $('#truthBtn').click(() => appleQuizPopUp.show());
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

$(".choice").click(function(){
    let playerChoice = $(this).data("choice");
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    $("#playerChoice").text(playerChoice);
    $("#compChoice").text(computerChoice);
});

