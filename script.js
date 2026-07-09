const guideBtn = document.getElementById("guideBtn");
const quizBtn = document.getElementById("quizBtn");
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

const appleResults = {
    granny: {
        name: "Granny Smith",
        image: "apple-images/granny-smith.webp",
        desc: "You have a kind, granny soul at heart. The Granny Smith apple appreciates your energy."
    },
    honey: {
        name: "Honeycrisp",
        image: "apple-images/honeycrisp.jpeg",
        desc: "People think they know you, but deep down they don't. Because at heart, you're a sweet and crunchy Honeycrisp apple. Yum!"
    },
    pineapple: {
        name: "Pineapple",
        image: "apple-images/pineapple.jpg.webp",
        desc: "67 you don't follow directions and instead of receiving an apple you got a pineapple. You're very chill tho"
    }
}

let scores ={
    granny: 0,
    honey: 0,
    pineapple: 0,
};

$(document).ready(function(){
    var appleQuizPopUp = new bootstrap.Modal($('#appleQuizPopUp')[0]);
    $('#truthBtn').click(() => appleQuizPopUp.show());
});

$("#startBtn").click(function (){
    $("#intro").hide();
    $("#q1").show();
});

$("#q1 button").click(function (){
    let chosenApple = $(this).data("apple");
    scores[chosenApple]++;
    
    $("#q1").hide();
    $("#q2").show();
});

$("#q2 button").click(function (){
    let chosenApple = $(this).data("apple");
    scores[chosenApple]++;
    
    $("#q2").hide();
    $("#q3").show();
});

$("#q3 button").click(function (){
    let chosenApple = $(this).data("apple");
    scores[chosenApple]++;
    
    $("#q3").hide();
    $("#result").show();

    showSpiritApple();
});

function showSpiritApple(){
    let winner = "granny";
    
    for(let apple in scores){
        if(scores[apple] > scores[winner]){
            winner = apple;
        }
    }
    
    $("#spiritAppleName").text(appleResults[winner].name);
    $("#spiritAppleImg").attr("src", appleResults[winner].image);
    $("#spiritAppleDesc").text(appleResults[winner].desc);
}






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
