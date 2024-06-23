var quizQuestions = [
  {
      question: "What is the capital city of Pakistan?",
      options: ["Islamabad", "Karachi", "Lahore", "Rawalpindi"],
      correctAnswerIndex: 0,
      explanation: "Islamabad became the capital of Pakistan in 1963."
  },
  {
      question: "Which river flows through the city of Lahore?",
      options: ["Sutlej", "Indus", "Jhelum", "Ravi"],
      correctAnswerIndex: 3,
      explanation: "The Ravi River flows through Lahore."
  },
  {
      question: "Who is the founder of Pakistan?",
      options: ["Allama Iqbal", "Muhammad Ali Jinnah", "Liaquat Ali Khan", "Zulfikar Ali Bhutto"],
      correctAnswerIndex: 1,
      explanation: "Muhammad Ali Jinnah is known as the founder of Pakistan."
  }
  // Add more questions as needed
];

var questionContainer = document.getElementById('question-container');
var optionsContainer = document.getElementById('options-container');
var submitButton = document.getElementById('submit-answer');
var feedbackText = document.getElementById('feedback');

var currentQuestionIndex = 0;
var score = 0;

function loadQuestion(questionIndex) {
  var currentQuestion = quizQuestions[questionIndex];
  questionContainer.textContent = currentQuestion.question;

  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach(function(option, index) {
      var optionElement = document.createElement('input');
      optionElement.type = 'radio';
      optionElement.name = 'option';
      optionElement.value = index;
      optionsContainer.appendChild(optionElement);

      var optionLabel = document.createElement('label');
      optionLabel.textContent = option;
      optionsContainer.appendChild(optionLabel);

      optionsContainer.appendChild(document.createElement('br'));
  });
}

function submitAnswer() {
  var selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
      feedbackText.textContent = "Please select an option.";
      return;
  }

  var selectedAnswer = Number(selectedOption.value);
  var currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswerIndex) {
      feedbackText.textContent = "Correct! " + currentQuestion.explanation;
      score++;
  } else {
      feedbackText.textContent = "Incorrect. " + currentQuestion.explanation;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion(currentQuestionIndex);
  } else {
      showFinalScore();
  }
}

function showFinalScore() {
  questionContainer.textContent = '';
  optionsContainer.textContent = '';
  submitButton.style.display = 'none';
  feedbackText.textContent = "Quiz completed. Your score: " + score + " out of " + quizQuestions.length;
}

submitButton.addEventListener('click', submitAnswer);

loadQuestion(currentQuestionIndex);
