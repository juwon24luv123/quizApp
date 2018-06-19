    // currentQuestion is set to zero
var currentQuestion = 0;
    // the starting score is zero
var score = 0;
    // the totQuestion is variable that store the total length of the question array 
var totQuestions = questions.length;

    // declearing variables to getElement by there id names  
var container = document.getElementById("quizContainer");
var questionElement = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");
var selectedOption = document.querySelectorAll('input[type=radio]');


    // this is a function that load the question from the question.js files been define earlier on. 
    // this function only has one parameter which is the questionIndex
function loadQuestion (questionIndex) {
    // creating a variable q to store the questions index
    // questionindex will load the next question will have on the array of object
    var q = questions[questionIndex];
    // questionElement.textcontext is populating the question to the view from the question.js file 
    questionElement.textContent =` ${questionIndex + 1}  ${'. '} ${q.question}`;
    // opt.textContent is going to return the option we have on the question.js file
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
    // making the button disable if the user didnt pick any option
nextButton.setAttribute("disabled", true);

function checkRadio() {
    return selectedOption.forEach(function(radio) {
        radio.addEventListener('click', function(e) {
            console.log(e);
            if(e.target.checked) {
                nextButton.removeAttribute("disabled");
            }
        })
    });
}
checkRadio(); 

function loadNextQuestion() {
    // the option is a new var to get the input on the html ui
    var option = document.querySelector("input[type=radio]:checked");
    // the if statement is to check if the any option is been selected or not 
    // the var answer is going the store the total questions the user answer correctly by inreament it by 5
    var answer = option.value;
    
    if (questions[currentQuestion].answer == answer){
        score += 5;
    }
    
    selectedOption.forEach(function(option) {
        option.checked = false;
        nextButton.disabled = true;
    });
    

    // currentQuestion++ is going to increament the question by one 
    currentQuestion++;
    
    // if the currentQuestion is equal to totQuestions before the last question,  it will show you just finish the quiz on the submit button
    if (currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Last question';
    }
    if (currentQuestion == totQuestions){
        // this is going to hide the container of the quiz and show the result container
        container.style.display = 'none';
        // this is going to display the result of the quiz 
        resultCont.style.display = '';
        // this will populate the toatal score of the user up.
        resultCont.textContent = 'Your score is: ' + score;
        return;
    }
    loadQuestion(currentQuestion);   
}
loadQuestion(currentQuestion);

