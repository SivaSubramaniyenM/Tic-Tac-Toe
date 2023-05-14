// Game variables
let currentPlayer = 'X';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Function to handle a move
function makeMove(row, col) {
    if (gameBoard[row][col] === '') {
        gameBoard[row][col] = currentPlayer;
        document.getElementById('game-board').children[row].children[col].innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Function to check for a winner
function checkWinner() {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (gameBoard[row][0] !== '' && gameBoard[row][0] === gameBoard[row][1] && gameBoard[row][0] === gameBoard[row][2]) {
            setTimeout(() => {
                alert('Player ' + gameBoard[row][0] + ' wins!');
                resetGame();
            }, 100);
            return;
        }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
        if (gameBoard[0][col] !== '' && gameBoard[0][col] === gameBoard[1][col] && gameBoard[0][col] === gameBoard[2][col]) {
            setTimeout(() => {
                alert('Player ' + gameBoard[0][col] + ' wins!');
                resetGame();
            }, 100);
            return;
        }
    }

    // Check diagonals
    if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
        setTimeout(() => {
            alert('Player ' + gameBoard[0][0] + ' wins!');
            resetGame();
        }, 100);
        return;
    }

    if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
        setTimeout(() => {
            alert('Player ' + gameBoard[0][2] + ' wins!');
            resetGame();
        }, 100);
        return;
    }

    // Check for a draw
    if (isBoardFull()) {
        setTimeout(() => {
            alert('It\'s a draw!');
            resetGame();
        }, 100);
    }
}

// Function to check if the game board is full
function isBoardFull() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (gameBoard[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}
