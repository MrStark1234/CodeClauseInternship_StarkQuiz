const quizData = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 0,
  },
  {
    question:
      "Which programming language is used to add functionality to web pages?",
    options: ["HTML", "JavaScript", "CSS", "Python"],
    correct: 1,
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Sequential Query Language",
      "Standard Query Language",
      "Structured Query Language",
      "Stylish Query Language",
    ],
    correct: 2,
  },
  {
    question: "Which tag is used to define an unordered list?",
    options: ["<list>", "<ol>", "<li>", "<ul>"],
    correct: 3,
  },
  {
    question: "What does PHP stand for?",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Processor",
      "Hypertext Preprogramming",
    ],
    correct: 0,
  },
  {
    question: "Which symbol is used to comment in JavaScript?",
    options: ["//", "/* */", "#", "--"],
    correct: 0,
  },
  {
    question: "What does API stand for?",
    options: [
      "Advanced Programming Interface",
      "Application Programming Interface",
      "Automated Programming Interface",
      "Advanced Processor Interface",
    ],
    correct: 1,
  },
  {
    question: "Which HTML tag is used to display a picture?",
    options: ["<image>", "<picture>", "<img>", "<photo>"],
    correct: 2,
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["text-style", "text-color", "font-color", "color"],
    correct: 3,
  },
  {
    question: "Who developed the Python programming language?",
    options: ["Guido van Rossum", "Brendan Eich", "John Resig", "Larry Page"],
    correct: 0,
  },
];
const quiz = document.querySelector("#quiz");
const answerElem = document.getElementsByName("answer");
const [questionElem, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question , #option_1, #option_2, #option_3, #option_4"
  );
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  questionElem.innerText = `${currentQuiz + 1}: ${question}`;
  options.forEach(
    (currElem, indx) => (window[`option_${indx + 1}`].innerText = currElem)
  );
};

loadQuiz();

const getSelectedOption = () => {
  let answerElement = Array.from(answerElem);
  return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectedAnswer = () => {
  answerElem.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score += 1;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class = "result">
    <h2>😊 Your Score: ${score}/${quizData.length} Correct Answer </h2>
    <p>Thanks for completing the quiz! 🎉</p>
    <button class="reload-button" onclick="location.reload()">Play Again</button>
    </div>
    `;
  }
});
