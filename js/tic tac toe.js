let currentPlayer = 'X';
    let board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    let totalMoves = 0;
    function makeMove(row, col) {
      if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        if (checkWinner()) {
          alert(currentPlayer === 'X' ? 'PERDS' : 'GUANYES');
          resetBoard();
        } else if (checkDraw()) {
          alert('EMPAT');
          resetBoard();
        } else if (currentPlayer === 'O') {
          setTimeout(makeAIMove, 500);
        }
      }
    }

    function makeAIMove() {
      const bestMove = findBestMove();
      makeMove(bestMove.row, bestMove.col);
    }

    function findBestMove() {
      let bestScore = -Infinity;
      let bestMove;

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (board[row][col] === '') {
            board[row][col] = 'O';
            const score = minimax(board, 0, false);
            board[row][col] = '';

            if (score > bestScore) {
              bestScore = score;
              bestMove = { row, col };
            }
          }
        }
      }

      return bestMove;
    }

    function minimax(board, depth, isMaximizing) {
      if (checkWinner()) {
        return isMaximizing ? -1 : 1;
      } else if (checkDraw()) {
        return 0;
      }

      if (isMaximizing) {
        let bestScore = -Infinity;

        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
              board[row][col] = 'O';
              const score = minimax(board, depth + 1, false);
              board[row][col] = '';

              bestScore = Math.max(score, bestScore);
            }
          }
        }

        return bestScore;
      } else {
        let bestScore = Infinity;

        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
              board[row][col] = 'X';
              const score = minimax(board, depth + 1, true);
              board[row][col] = '';

              bestScore = Math.min(score, bestScore);
            }
          }
        }

        return bestScore;
      }
    }

    
    function checkWinner() {
      const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
      ];

      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a[0]][a[1]] !== '' && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
          return true;
        }
      }

      return false;
    }

    function checkDraw() {
      for (let row of board) {
        for (let cell of row) {
          if (cell === '') {
            return false;
          }
        }
      }

      return true;
    }

    function resetBoard() {
        currentPlayer = 'X';
        board = [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ];
        totalMoves = 0;
  
        const cells = document.getElementsByClassName('cell');
        for (let cell of cells) {
          cell.innerText = '';
        }
      }

    function redirectToAnotherPage() {
      window.location.href = 'another-page.html';
    }