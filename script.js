// Updated quiz data containing new questions, options, and correct answers
const quizData = [
    {
        question: "HTML stands for?",
        options: ["Hyper Text Making Links", "Hyper Text Markup Language", "Hyper Text Mixer of Links", "Higher Textual Marking of Links"],
        answer: 1
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Earth", "Mars", "Saturn", "Jupiter"],
        answer: 2
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Pablo Picasso"],
        answer: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Graphite"],
        answer: 2
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: 1
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: 2
    },
    {
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        answer: 1
    }
];
let currentQuestion = 0;
let score = 0;

// Display the first question
displayQuestion();

// Event listener for the submit button
document.getElementById("submit-btn").addEventListener("click", checkAnswer);

// Event listener for the next button
document.getElementById("next-btn").addEventListener("click", nextQuestion);

// Function to display the current question and options
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = quizData[currentQuestion].question;

    optionsElement.innerHTML = "";
    quizData[currentQuestion].options.forEach((option, index) => {
        const liElement = document.createElement("li");
        const inputElement = document.createElement("input");
        const labelElement = document.createElement("label");

        inputElement.type = "radio";
        inputElement.name = "option";
        inputElement.value = index;

        labelElement.textContent = option;

        liElement.appendChild(inputElement);
        liElement.appendChild(labelElement);

        optionsElement.appendChild(liElement);
    });
}

// Function to check the selected answer
function checkAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === quizData[currentQuestion].answer) {
            score++;
        }
        document.getElementById("result").textContent = `Correct answers: ${score} out of ${currentQuestion + 1}`;
    } else {
        alert("Please select an option");
    }
}


// Function to go to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
        // Display the final score
        const finalScore = `Final score: ${score} out of ${quizData.length}`;
        document.getElementById("result").textContent = finalScore;
        // Hide the next button and submit button
        document.getElementById("submit-btn").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        // Display a play again button
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again";
        playAgainButton.onclick = function() {
            location.reload();
        };
        document.body.appendChild(playAgainButton);
    } else {
        displayQuestion();
    }
}