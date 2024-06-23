const apiUrls = {
    quiz1: 'https://opentdb.com/api.php?amount=10&category=22&type=multiple',
    quiz2: 'https://opentdb.com/api.php?amount=10&category=23&type=multiple',
    quiz3: 'https://opentdb.com/api.php?amount=10&category=24&type=multiple',
    quiz4: 'https://opentdb.com/api.php?amount=10&category=25&type=multiple',
};

let currentQuestionIndex = 0;
let quizData = [];

async function fetchQuizData(quizId) {
    try {
        const response = await fetch(apiUrls[quizId]);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        quizData = data.results;
        currentQuestionIndex = 0;
        displayQuestion();
    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }
}

function openQuizModal(quizId) {
    document.getElementById('quiz-modal').style.display = 'block';
    fetchQuizData(quizId);
}

function closeQuizModal() {
    document.getElementById('quiz-modal').style.display = 'none';
    quizData = [];
    currentQuestionIndex = 0;
    document.getElementById('quiz-container').innerHTML = '';
}

function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    if (currentQuestionIndex >= 0 && currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
        const shuffledOptions = options.sort(() => Math.random() - 0.5);
        const optionsHtml = shuffledOptions.map((option, index) => 
            `<li>
                <input type="radio" id="option${index}" name="quizOption" value="${option}">
                <label for="option${index}">${option}</label>
            </li>`).join('');
        quizContainer.innerHTML = `
            <div class="question">${currentQuestion.question}</div>
            <ul class="options">${optionsHtml}</ul>
        `;
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    if (!selectedOption) {
        alert('Please select an answer before submitting.');
        return;
    }

    const correctAnswer = quizData[currentQuestionIndex].correct_answer;
    const selectedLabel = selectedOption.nextElementSibling;

    if (selectedOption.value === correctAnswer) {
        selectedLabel.classList.add('correct');
        displayFeedback('Correct!!', 'correct');
    } else {
        selectedLabel.classList.add('incorrect');
        displayFeedback('Incorrect:(', 'incorrect');

        // Highlight the correct answer
        const labels = document.querySelectorAll('.options label');
        labels.forEach(label => {
            if (label.textContent === correctAnswer) {
                label.classList.add('correct');
            }
        });
    }

    // Disable all options after answering
    const options = document.querySelectorAll('.options input[type="radio"]');
    options.forEach(option => {
        option.disabled = true;
    });

    // Disable submit button after answering
    document.getElementById('submit-btn').disabled = true;
}

function displayFeedback(message, className) {
    const feedbackElement = document.createElement('div');
    feedbackElement.className = `feedback ${className}`;
    feedbackElement.textContent = message;
    document.getElementById('quiz-container').appendChild(feedbackElement);
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        resetOptionsStyle();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        resetOptionsStyle();
    }
}

function resetOptionsStyle() {
    const options = document.querySelectorAll('.options input[type="radio"]');
    options.forEach(option => {
        option.checked = false;
        option.disabled = false;
        option.nextElementSibling.classList.remove('correct', 'incorrect');
    });
    const feedbackElement = document.querySelector('.feedback');
    if (feedbackElement) {
        feedbackElement.remove();
    }

    // Enable submit button
    document.getElementById('submit-btn').disabled = false;
}

let currentCardIndex = 0;
const quizCards = document.querySelectorAll('.quiz-card');

function openQuizModal(quizId) {
    document.getElementById('quiz-modal').style.display = 'block';
    fetchQuizData(quizId);
}

function closeQuizModal() {
    document.getElementById('quiz-modal').style.display = 'none';
    quizData = [];
    currentQuestionIndex = 0;
    document.getElementById('quiz-container').innerHTML = '';
}

function nextQuizCard() {
    quizCards[currentCardIndex].classList.remove('active');
    currentCardIndex = (currentCardIndex + 1) % quizCards.length;
    quizCards[currentCardIndex].classList.add('active');
}

function prevQuizCard() {
    quizCards[currentCardIndex].classList.remove('active');
    currentCardIndex = (currentCardIndex - 1 + quizCards.length) % quizCards.length;
    quizCards[currentCardIndex].classList.add('active');
}

