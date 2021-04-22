let greetingTitle = document.getElementById("title");
greetingTitle.innerHTML = "Click to get an answer.";

let displayAnswer = document.getElementById("displayAnswer");
displayAnswer.innerHTML = "Your asnwer will appear here.";

let questionOne = document.getElementById("questionOne");
questionOne = addEventListener("click", answerQuestion);

let questionTwo = document.getElementById("questionTwo");
questionTwo = addEventListener("click", answerQuestion);

let questionThree = document.getElementById("questionThree");
questionThree = addEventListener("click", answerQuestion);


function answerQuestion(event){
    let answer = event.target.getAttribute("data-answer");

    displayAnswer.innerHTML = answer;

}