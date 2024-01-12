// 01. Questions 

// Create a variable to store all the questions 
// each question is a separate object
var questions = [
    {
        // a string that contains the question
        title: "How can you convert a string to an integer in JavaScript?",
        // another object that contains possible choices -> as strings
        choices: {
            a: "toInt()",
            b: "parseInt()",
            c: "convertToInt()",
            d: "parse()"
        },
        // a string 
        correctAnswer: "b",
    },

    {
        title: "What is the purpose of the localStorage property in JavaScript?",
        choices: {
            a: "To store session data on the server",
            b: "To create a new JavaScript file",
            c: "To store client's data across browser sessions",
            d: "To make AJAX requests"
        },
        correctAnswer: "c",
    },

    {
        title: "What is the purpose of the return statement in a JavaScript function?",
        choices: {
            a: "To return a value from the function",
            b: "To print a message to the console",
            c: "To declare a new variable",
            d: "To stop the function's execution"
        },
        correctAnswer: "a",
    },

    {
        title: "Which function is used to add a new element at the end of an array in JavaScript?",
        choices: {
            a: "unshift()",
            b: "shift()",
            c: "pop()",
            d: "push()"
        },
        correctAnswer: "d",
    },

    {
        title:"Which of the following is not a valid JavaScript data type?",
        choices: {
            a: "String",
            b: "Undefined",
            c: "Character",
            d: "Object"
        },
        correctAnswer: "c",
    },
];

// 02. Logic
var startButton = document.querySelector("#start");
var timerElement = document.querySelector("#time");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");

// A start button that when clicked 
// a timer starts and 
// the first question appears.

var timerCount = 0;

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    timer();
    
});

function timer() {
    var timerStart = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
    }, 1000);

}



// Displaying the Questions and Options to User
//
// document.getElementById("question").innerText = question1.question;
// document.getElementById("option1").innerText = question1.options[0];
// document.getElementById("option2").innerText = question1.options[1];
// document.getElementById("option3").innerText = question1.options[2];
// document.getElementById("option4").innerText = question1.options[3];



// 03. Scores


