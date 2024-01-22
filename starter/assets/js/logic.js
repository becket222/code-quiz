// 02. Logic
var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var quizQuestions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");





// Create buttons for number of choices and append them to choices <div>

Object.keys(choices).forEach(key) {


}


var choiceA = document.createElement('button');
questionChoices.appendChild(choiceA);
var choiceB = document.createElement('button');
questionChoices.appendChild(choiceB);
var choiceC = document.createElement('button');
questionChoices.appendChild(choiceC);
var choiceD = document.createElement('button');
questionChoices.appendChild(choiceD);


// A start button that when clicked 
// a timer starts and 
// the first question appears.
function startQuiz () {

    startButton.addEventListener("click", function(event) {
        event.preventDefault();
        startTimer();
        
    });
   

}
var timerCount = 0;

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startTimer();
    
});

function startTimer() {
    var timerStart = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
    }, 1000);

}



function displayQuestions() {

}
// Displaying the Questions and Options to User
//
// document.getElementById("question").innerText = question1.question;
// document.getElementById("option1").innerText = question1.options[0];
// document.getElementById("option2").innerText = question1.options[1];
// document.getElementById("option3").innerText = question1.options[2];
// document.getElementById("option4").innerText = question1.options[3];
