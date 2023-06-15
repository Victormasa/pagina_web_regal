const quizData = [
    {
      question: "Quan vam començar a sortir?",
      options: ["totes són correctes", "14/08", "08/14", "14 d'agost"],
      answer: "totes són correctes"
    },
    {
      question: "Es possiblement aquest el millor regal que t'he fet?",
      options: ["SI", "si pero en minuscula", "sever al orep IS", "totes són correctes"],
      answer: "totes són correctes"
    },
    {
      question: "Grup de musica preferit",
      options: ["Extremoduro", "Depresion Sonora", "Robe", "Marea"],
      answer: "Extremoduro"
    },
    {
      question: "Millor saga de pelis",
      options: ["Jurassic Park", "Regreso al futuro", "Shrek", "The kissing booth"],
      answer: "Shrek"
    },
    {
      question: "Plan perfecte",
      options: ["peli i manta un dia de pluja", "Anar de visita als museus", "tarda de guitarreo", "Totes les anteriors"],
      answer: "Totes les anteriors"
    },
    {
      question: "ULTIM RESTAURANT AL QUE HEM ANAT",
      options: ["Los panas", "Lara grill", "könig", "Pocaxsolta"],
      answer: "pocaxsolta"
    }
    // Add more questions here
  ];

  const questionText = document.getElementById('question-text');
  const optionsList = document.getElementById('options-list');
  const submitBtn = document.getElementById('submit-btn');

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const question = quizData[currentQuestion];
    questionText.textContent = question.question;

    optionsList.innerHTML = '';

    for (let i = 0; i < question.options.length; i++) {
      const option = question.options[i];

      const li = document.createElement('li');
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'option';
      input.value = option;

      label.appendChild(input);
      label.append(option);
      li.appendChild(label);
      optionsList.appendChild(li);
    }
  }

  function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      }

      currentQuestion++;
      selectedOption.checked = false;

      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }
  }

  function showResult() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
      <h1>Quiz Completed</h1>
      <p>Your score: ${score}/${quizData.length}</p>
      <div class="btn-container">
        <button class="btn" onclick="restartQuiz()">Restart</button>
      </div>
    `;
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  }

  submitBtn.addEventListener('click', submitAnswer);

  // Load the first question
  loadQuestion();