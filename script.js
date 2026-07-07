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

