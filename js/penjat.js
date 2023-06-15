    // Game variables
    let selectedWord = '';
    let wordDisplay = '';
    let incorrectGuesses = [];
    let remainingAttempts = 6;

    // Function to initialize a new game
    function newGame() {
      // Select a random word
      selectedWord = 'patateta';

      // Reset game variables
      wordDisplay = '_'.repeat(selectedWord.length);
      incorrectGuesses = [];
      remainingAttempts = 6;

      // Update the HTML elements
      updateWordDisplay();
      updateIncorrectGuesses();
      updateRemainingAttempts();
      generateKeyboard();
    }

    // Function to update the word display on the screen
    function updateWordDisplay() {
      document.getElementById('word-display').textContent = wordDisplay;
    }

    // Function to update the incorrect guesses on the screen
    function updateIncorrectGuesses() {
      document.getElementById('incorrect-guesses').textContent = incorrectGuesses.join(', ');
    }

    // Function to update the remaining attempts on the screen
    function updateRemainingAttempts() {
      document.getElementById('remaining-attempts').textContent = remainingAttempts;
    }

    // Function to handle a user guess
    function guessLetter(letter) {
      if (selectedWord.includes(letter)) {
        // Correct guess
        for (let i = 0; i < selectedWord.length; i++) {
          if (selectedWord[i] === letter) {
            wordDisplay = wordDisplay.substr(0, i) + letter + wordDisplay.substr(i + 1);
          }
        }
        updateWordDisplay();
        if (wordDisplay === selectedWord) {
          // Player wins
          window.location.href = '../html/correcte.html';
        }
      } else {
        // Incorrect guess
        incorrectGuesses.push(letter);
        updateIncorrectGuesses();
        remainingAttempts--;
        updateRemainingAttempts();
        if (remainingAttempts === 0) {
          // Player loses
          alert('Game over!, torna a intentar');
          newGame();
        }
      }
    }

    // Function to generate the keyboard dynamically
    function generateKeyboard() {
      const keyboardContainer = document.getElementById('keyboard-container');
      keyboardContainer.innerHTML = '';

      for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', function() {
          guessLetter(letter.toLowerCase());
          button.disabled = true;
        });
        keyboardContainer.appendChild(button);
      }
    }

    // Start a new game
    newGame();