const questions = [
  {
    question:
      "How can experiencing a significant life change impact an individual's identity?",
    answers: [
      { text: "A). It has no effect on identity.", correct: false },
      { text: "B). It can strengthen and redefine identity.", correct: true },
      {
        text: "C). It always leads to a negative impact on identity.",
        correct: false,
      },
      { text: "D). It causes identity to remain static.", correct: false },
    ],
  },
  {
    question:
      "Which of the following is an example of a transitional life event that can influence identity?",
    answers: [
      { text: "A). Winning a lottery ticket.", correct: false },
      { text: "B). Graduating from primary school.", correct: true },
      { text: "C). Eating a healthy diet.", correct: false },
      { text: "D). Regular exercise routine.", correct: false },
    ],
  },
  {
    question:
      "In what ways can cultural and environmental factors shape an individual's identity?",
    answers: [
      { text: "A). They have no impact on identity.", correct: false },
      {
        text: "B). They contribute to the development of values and beliefs.",
        correct: true,
      },
      {
        text: "C). They primarily influence physical appearance.",
        correct: false,
      },
      { text: "D). They cause a complete change in identity.", correct: false },
    ],
  },
  {
    question:
      "When faced with environmental challenges, individuals may adapt by?",
    answers: [
      {
        text: "A). Denying the challenges and resisting change.",
        correct: false,
      },
      {
        text: "B). Embracing change and learning from their experiences.",
        correct: true,
      },
      {
        text: "C). Always seeking external solutions to problems.",
        correct: false,
      },
      {
        text: "D). Ignoring their environment's impact on identity.",
        correct: false,
      },
    ],
  },
  {
    question:
      "How can one develop resilience during times of transition and change?",
    answers: [
      {
        text: "A). By avoiding challenges and staying within their comfort zone.",
        correct: false,
      },
      {
        text: "B). By seeking immediate solutions and avoiding reflection.",
        correct: false,
      },
      {
        text: "C). By learning from adversity and building problem-solving skills.",
        correct: true,
      },
      { text: "D). By isolating themselves from others.", correct: false },
    ],
  },
  {
    question:
      "Which statement is true about the influence of peer relationships on identity during adolescence?",
    answers: [
      {
        text: "A). Peer relationships have no impact on identity.",
        correct: false,
      },
      {
        text: "B). Peer relationships can lead to a loss of individuality.",
        correct: false,
      },
      {
        text: "C). Positive peer relationships can positively impact identity development.",
        correct: true,
      },
      {
        text: "D). Adolescents should avoid peer interactions to protect their identity.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following best illustrates the impact of environmental factors on identity?",
    answers: [
      { text: "A). A person's favorite color", correct: false },
      { text: "B). The food they like to eat", correct: false },
      {
        text: "C). A person's cultural background and upbringing",
        correct: true,
      },
      { text: "D). Their choice of clothing", correct: false },
    ],
  },
  {
    question:
      "Why is self-awareness important in understanding how change and transition shape one's identity?",
    answers: [
      {
        text: "A). Self-awareness helps in avoiding change and transition.",
        correct: false,
      },
      {
        text: "B). It enables individuals to ignore the influence of their environment.",
        correct: false,
      },
      {
        text: "C). It helps individuals recognize how their experiences impact their identity.",
        correct: true,
      },
      {
        text: "D). Self-awareness is only relevant in adulthood.",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
