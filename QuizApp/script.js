//Classe quiz
class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    scoreCount(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex >= this.questions.length;
    }
}

//Classe de questões
class Question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}

//Mostrar as questões
function displayQuestion(){
    if(quiz.isEnded()){
        showScores();
    } else{
        //mostra a questão
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;
        //mostra as opções
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++){
            let choiceElement = document.getElementById("choice"+i);
            choiceElement.innerHTML = choices[i];
            guess("btn"+i, choices[i]);
        }

        showProgress();
    }
};

//Função de tentativa
function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.scoreCount(guess);
        displayQuestion();
    }
}

//mostra o progresso do quiz
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex +1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Questão ${currentQuestionNumber} de ${quiz.questions.length}`;
}

//mostra o score final
function showScores(){
    let quizEndHTML = 
    `
        <h1>Quiz finalizado</h1>
        <h2 id="score">Você marcou ${quiz.score} de ${quiz.questions.length} pontos</h2>
        <div class="quiz-repeat">
            <a href="index.html">Fazer o Quiz novamente</a>
        </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

//criar as questões
let questions = [
    new Question(
        "Hyper Text Markup Language é nome para?", ["XHTML", "CSS", "HTML", "JQuery"], "HTML"
    ),
    new Question(
        "Cascading Style Sheet é nome para?", ["XML", "CSS", "SCSS", "SASS"], "CSS"
    ),
    new Question(
        "Qual desses é um framework JavaScript?", ["Laravel", "Tailwind", "React", "Django"], "React"
    ),
    new Question(
        "Qual desses é uma linguagem usada para desenvolvimento backend?", ["C", "Ruby", "Python", "Todas as opções"], "Todas as opções"
    ),
    new Question(
        "Qual linguagem é melhor para o estudo de Inteligência Artificial?", ["Python", "C++", "Java", "Lua"], "Python"
    )
];

let quiz = new Quiz(questions);

displayQuestion();

//Adicionar o timer
let time = 1;
let quizTimeMinutes = time * 60 * 60;
let quizTime = quizTimeMinutes/60;

let counting = document.getElementById("countdown");

function startCountdown(){
    let quizTimer = setInterval(function(){ 
        if(quizTime <= 0){
            clearInterval(quizTimer);
            showScores();
            alert("Seu tempo acabou");
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60 ) % 60;
            counting.innerHTML = `${min}:${sec}`
        }
    }, 1000)
}

startCountdown();