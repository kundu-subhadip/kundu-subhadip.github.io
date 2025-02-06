// Game Constants
const GAME_CONFIG = {
    CANVAS: {
        WIDTH: 300,
        HEIGHT: 600,
        BLOCK_SIZE: 30,
    },
    GRID: {
        WIDTH: 10,  // 300/30
        HEIGHT: 20, // 600/30
    },
    SPEEDS: {
        INITIAL: 1000,    // Initial speed (ms)
        MIN: 100,         // Maximum speed (minimum ms)
        DECREASE_RATE: 50 // Ms to decrease per level
    },
    POINTS: {
        SINGLE: 100,
        DOUBLE: 300,
        TRIPLE: 500,
        TETRIS: 800,
        SOFT_DROP: 1,
        HARD_DROP: 2
    }
};

// Complete Letter Shapes Data Structure (5x5 grid for each letter)
const LETTER_SHAPES = {
    A: [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,0,0,1]
    ],
    B: [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0]
    ],
    C: [
        [0,1,1,1,1],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [0,1,1,1,1]
    ],
    D: [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,0]
    ],
    E: [
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,1,1,1,1]
    ],
    F: [
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,0,0,0,0]
    ],
    G: [
        [0,1,1,1,1],
        [1,0,0,0,0],
        [1,0,1,1,1],
        [1,0,0,0,1],
        [0,1,1,1,0]
    ],
    H: [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,0,0,1]
    ],
    I: [
        [1,1,1,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [1,1,1,1,1]
    ],
    J: [
        [1,1,1,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [1,0,1,0,0],
        [0,1,0,0,0]
    ],
    K: [
        [1,0,0,0,1],
        [1,0,0,1,0],
        [1,1,1,0,0],
        [1,0,0,1,0],
        [1,0,0,0,1]
    ],
    L: [
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,1,1,1,1]
    ],
    M: [
        [1,0,0,0,1],
        [1,1,0,1,1],
        [1,0,1,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1]
    ],
    N: [
        [1,0,0,0,1],
        [1,1,0,0,1],
        [1,0,1,0,1],
        [1,0,0,1,1],
        [1,0,0,0,1]
    ],
    O: [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]
    ],
    P: [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,0,0,0,0]
    ],
    Q: [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,0,0,1,0],
        [0,1,1,0,1]
    ],
    R: [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0],
        [1,0,0,1,0],
        [1,0,0,0,1]
    ],
    S: [
        [0,1,1,1,1],
        [1,0,0,0,0],
        [0,1,1,1,0],
        [0,0,0,0,1],
        [1,1,1,1,0]
    ],
    T: [
        [1,1,1,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
    ],
    U: [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0]
    ],
    V: [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,0,1,0,0]
    ],
    W: [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,1,0,1,1],
        [1,0,0,0,1]
    ],
    X: [
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,0,1,0,0],
        [0,1,0,1,0],
        [1,0,0,0,1]
    ],
    Y: [
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
    ],
    Z: [
        [1,1,1,1,1],
        [0,0,0,1,0],
        [0,0,1,0,0],
        [0,1,0,0,0],
        [1,1,1,1,1]
    ]
};

// Tetromino Shapes (using standard Tetris pieces)
const TETROMINO_SHAPES = {
    I: {
        shape: [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
        ],
        width: 4,
        height: 4
    },
    O: {
        shape: [
            [1,1],
            [1,1]
        ],
        width: 2,
        height: 2
    },
    T: {
        shape: [
            [0,1,0],
            [1,1,1],
            [0,0,0]
        ],
        width: 3,
        height: 3
    },
    L: {
        shape: [
            [0,0,1],
            [1,1,1],
            [0,0,0]
        ],
        width: 3,
        height: 3
    },
    J: {
        shape: [
            [1,0,0],
            [1,1,1],
            [0,0,0]
        ],
        width: 3,
        height: 3
    },
    S: {
        shape: [
            [0,1,1],
            [1,1,0],
            [0,0,0]
        ],
        width: 3,
        height: 3
    },
    Z: {
        shape: [
            [1,1,0],
            [0,1,1],
            [0,0,0]
        ],
        width: 3,
        height: 3
    }
};

// Color scheme for the game
const COLORS = {
    BACKGROUND: '#FFFFFF',
    GRID: '#EEEEEE',
    BORDER: '#333333',
    LETTERS: {
        A: '#FF0000', // Red
        B: '#00FF00', // Green
        C: '#0000FF', // Blue
        D: '#FFFF00', // Yellow
        E: '#FF00FF', // Magenta
        F: '#00FFFF', // Cyan
        G: '#FFA500', // Orange
        H: '#800080', // Purple
        I: '#008000', // Dark Green
        J: '#FF4500', // Orange Red
        K: '#4B0082', // Indigo
        L: '#FF1493', // Deep Pink
        M: '#00CED1', // Dark Turquoise
        N: '#8B4513', // Saddle Brown
        O: '#483D8B', // Dark Slate Blue
        P: '#2E8B57', // Sea Green
        Q: '#DAA520', // Goldenrod
        R: '#9400D3', // Dark Violet
        S: '#FF6347', // Tomato
        T: '#20B2AA', // Light Sea Green
        U: '#CD853F', // Peru
        V: '#8FBC8F', // Dark Sea Green
        W: '#BA55D3', // Medium Orchid
        X: '#4682B4', // Steel Blue
        Y: '#D2691E', // Chocolate
        Z: '#778899'  // Light Slate Gray
    }
};

// Game States
const GAME_STATES = {
    IDLE: 'idle',
    PLAYING: 'playing',
    PAUSED: 'paused',
    GAME_OVER: 'gameOver'
};

// Game State
const gameState = {
    board: [],
    currentPiece: null,
    nextPiece: null,
    score: 0,
    level: 1,
    lines: 0,
    gameOver: false,
    isPaused: false,
    dropCounter: 0,
    lastTime: 0,
    dropInterval: GAME_CONFIG.SPEEDS.INITIAL,
    state: GAME_STATES.IDLE
};

// Add to the top of the file with other constants
const DEBUG_MODE = {
    enabled: false,
    showGrid: false,
    slowMotion: false,
    invincible: false
};

// Initialize game board
function initBoard() {
    gameState.board = Array(GAME_CONFIG.GRID.HEIGHT).fill()
        .map(() => Array(GAME_CONFIG.GRID.WIDTH).fill(0));
}

// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const previewCanvas = document.getElementById('previewCanvas');
const previewCtx = previewCanvas.getContext('2d');

// Set canvas dimensions
canvas.width = GAME_CONFIG.CANVAS.WIDTH;
canvas.height = GAME_CONFIG.CANVAS.HEIGHT;
previewCanvas.width = GAME_CONFIG.CANVAS.BLOCK_SIZE * 6;
previewCanvas.height = GAME_CONFIG.CANVAS.BLOCK_SIZE * 6;

// DOM Elements
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const linesElement = document.getElementById('lines');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const restartBtn = document.getElementById('restartBtn');
const gameOverModal = document.getElementById('gameOverModal');
const finalScoreElement = document.getElementById('finalScore');
const playAgainBtn = document.getElementById('playAgainBtn');

// Event Listeners
document.addEventListener('keydown', handleKeyPress);
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', togglePause);
restartBtn.addEventListener('click', restartGame);
playAgainBtn.addEventListener('click', restartGame);

// Add debug controls
document.addEventListener('keydown', (event) => {
    if (event.key === '`') { // Toggle debug mode with backtick key
        DEBUG_MODE.enabled = !DEBUG_MODE.enabled;
        console.log('Debug mode:', DEBUG_MODE.enabled ? 'enabled' : 'disabled');
    }
    
    if (DEBUG_MODE.enabled) {
        switch(event.key) {
            case '1': // Toggle grid
                DEBUG_MODE.showGrid = !DEBUG_MODE.showGrid;
                break;
            case '2': // Toggle slow motion
                DEBUG_MODE.slowMotion = !DEBUG_MODE.slowMotion;
                gameState.dropInterval = DEBUG_MODE.slowMotion ? 2000 : 
                    GAME_CONFIG.SPEEDS.INITIAL - (gameState.level - 1) * GAME_CONFIG.SPEEDS.DECREASE_RATE;
                break;
            case '3': // Toggle invincibility
                DEBUG_MODE.invincible = !DEBUG_MODE.invincible;
                break;
        }
    }
});

// Letter Drawing System
class LetterDrawer {
    constructor(ctx) {
        this.ctx = ctx;
        this.blockSize = GAME_CONFIG.CANVAS.BLOCK_SIZE;
    }

    // Draw a letter at specific coordinates
    drawLetter(letter, x, y, color = '#000000', scale = 1) {
        const shape = LETTER_SHAPES[letter];
        if (!shape) return;

        const cellSize = this.blockSize * scale;
        
        this.ctx.save();
        this.ctx.fillStyle = color;
        
        for (let row = 0; row < shape.length; row++) {
            for (let col = 0; col < shape[row].length; col++) {
                if (shape[row][col]) {
                    this.ctx.fillRect(
                        x + (col * cellSize / 5),
                        y + (row * cellSize / 5),
                        cellSize / 5,
                        cellSize / 5
                    );
                }
            }
        }
        
        this.ctx.restore();
    }

    // Draw a letter block (letter in a square)
    drawLetterBlock(letter, x, y, color = '#000000', borderColor = '#333333') {
        // Draw block background
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, this.blockSize, this.blockSize);
        
        // Draw border
        this.ctx.strokeStyle = borderColor;
        this.ctx.strokeRect(x, y, this.blockSize, this.blockSize);
        
        // Draw letter in white
        this.drawLetter(
            letter,
            x + (this.blockSize * 0.1),  // 10% padding
            y + (this.blockSize * 0.1),   // 10% padding
            '#FFFFFF',
            0.8  // 80% of block size
        );
    }

    // Draw a preview letter block (for next piece display)
    drawPreviewBlock(letter, x, y, color) {
        const previewScale = 0.8;
        const scaledSize = this.blockSize * previewScale;
        
        // Draw block background
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, scaledSize, scaledSize);
        
        // Draw border
        this.ctx.strokeStyle = '#333333';
        this.ctx.strokeRect(x, y, scaledSize, scaledSize);
        
        // Draw letter
        this.drawLetter(
            letter,
            x + (scaledSize * 0.1),
            y + (scaledSize * 0.1),
            '#FFFFFF',
            previewScale * 0.8
        );
    }
}

// Test function to demonstrate letter drawing
function testLetterDrawing() {
    const letterDrawer = new LetterDrawer(ctx);
    
    // Clear canvas
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    drawGrid();
    
    // Test different letters
    const testLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const colors = Object.values(COLORS.LETTERS);
    
    testLetters.forEach((letter, index) => {
        letterDrawer.drawLetterBlock(
            letter,
            30 + (index % 3) * GAME_CONFIG.CANVAS.BLOCK_SIZE * 1.5,
            30 + Math.floor(index / 3) * GAME_CONFIG.CANVAS.BLOCK_SIZE * 1.5,
            colors[index % colors.length]
        );
    });
}

// Piece class to handle individual Tetromino pieces
class Piece {
    constructor(type, letter) {
        this.type = type;
        this.letter = letter;
        this.shape = TETROMINO_SHAPES[type].shape;
        this.color = COLORS.LETTERS[letter];
        this.x = Math.floor(GAME_CONFIG.GRID.WIDTH / 2) - Math.floor(TETROMINO_SHAPES[type].width / 2);
        this.y = 0;
        this.rotation = 0;
    }

    rotate() {
        const newShape = [];
        for (let i = 0; i < this.shape[0].length; i++) {
            newShape.push([]);
            for (let j = this.shape.length - 1; j >= 0; j--) {
                newShape[i].push(this.shape[j][i]);
            }
        }
        
        // Check if rotation is valid
        const originalShape = this.shape;
        this.shape = newShape;
        
        if (this.hasCollision()) {
            this.shape = originalShape;
            return false;
        }
        return true;
    }

    hasCollision() {
        for (let y = 0; y < this.shape.length; y++) {
            for (let x = 0; x < this.shape[y].length; x++) {
                if (this.shape[y][x]) {
                    const boardX = this.x + x;
                    const boardY = this.y + y;

                    // Check boundaries and collision with existing pieces
                    if (
                        boardX < 0 || 
                        boardX >= GAME_CONFIG.GRID.WIDTH ||
                        boardY >= GAME_CONFIG.GRID.HEIGHT ||
                        (boardY >= 0 && gameState.board[boardY] && gameState.board[boardY][boardX])
                    ) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;

        if (this.hasCollision()) {
            this.x -= dx;
            this.y -= dy;
            return false;
        }
        return true;
    }
}

// Game Board Management
class GameBoard {
    constructor() {
        this.letterDrawer = new LetterDrawer(ctx);
        this.previewDrawer = new LetterDrawer(previewCtx);
        this.reset();
    }

    reset() {
        gameState.board = Array(GAME_CONFIG.GRID.HEIGHT).fill()
            .map(() => Array(GAME_CONFIG.GRID.WIDTH).fill(0));
        gameState.score = 0;
        gameState.level = 1;
        gameState.lines = 0;
        gameState.gameOver = false;
        this.updateScore();
    }

    generateNewPiece() {
        const types = Object.keys(TETROMINO_SHAPES);
        const letters = Object.keys(LETTER_SHAPES);
        const randomType = types[Math.floor(Math.random() * types.length)];
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        return new Piece(randomType, randomLetter);
    }

    mergePiece() {
        const piece = gameState.currentPiece;
        
        // Check if piece is at the top
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    const boardY = piece.y + y;
                    if (boardY <= 0) {
                        this.triggerGameOver();
                        return;
                    }
                }
            }
        }

        // Merge the piece into the board
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    const boardY = piece.y + y;
                    const boardX = piece.x + x;
                    gameState.board[boardY][boardX] = {
                        letter: piece.letter,
                        color: piece.color
                    };
                }
            }
        }

        this.checkLines();
        
        // Generate new piece
        gameState.currentPiece = gameState.nextPiece;
        gameState.nextPiece = this.generateNewPiece();

        // Check if new piece can be placed
        if (gameState.currentPiece.hasCollision()) {
            this.triggerGameOver();
            return;
        }
    }

    triggerGameOver() {
        gameState.gameOver = true;
        
        // Stop the game loop
        if (gameState.animationId) {
            cancelAnimationFrame(gameState.animationId);
            gameState.animationId = null;
        }

        // Show game over modal
        const modal = document.getElementById('gameOverModal');
        const finalScoreElement = document.getElementById('finalScore');
        
        // Update score
        finalScoreElement.textContent = gameState.score;
        
        // Show modal
        modal.classList.remove('hidden');
        modal.classList.add('visible');
        
        // Update UI state
        updateGameUI(GAME_STATES.GAME_OVER);
    }

    checkLines() {
        let linesCleared = 0;
        
        for (let y = GAME_CONFIG.GRID.HEIGHT - 1; y >= 0; y--) {
            if (gameState.board[y].every(cell => cell !== 0)) {
                linesCleared++;
                gameState.board.splice(y, 1);
                gameState.board.unshift(Array(GAME_CONFIG.GRID.WIDTH).fill(0));
                y++; // Recheck the same row
            }
        }

        if (linesCleared > 0) {
            gameState.lines += linesCleared;
            gameState.score += this.calculateScore(linesCleared);
            gameState.level = Math.floor(gameState.lines / 10) + 1;
            this.updateScore();
            this.updateSpeed();
        }
    }

    calculateScore(lines) {
        const scores = {
            1: GAME_CONFIG.POINTS.SINGLE,
            2: GAME_CONFIG.POINTS.DOUBLE,
            3: GAME_CONFIG.POINTS.TRIPLE,
            4: GAME_CONFIG.POINTS.TETRIS
        };
        return (scores[lines] || 0) * gameState.level;
    }

    updateScore() {
        scoreElement.textContent = gameState.score;
        levelElement.textContent = gameState.level;
        linesElement.textContent = gameState.lines;
    }

    updateSpeed() {
        gameState.dropInterval = Math.max(
            GAME_CONFIG.SPEEDS.MIN,
            GAME_CONFIG.SPEEDS.INITIAL - (gameState.level - 1) * GAME_CONFIG.SPEEDS.DECREASE_RATE
        );
    }

    draw() {
        // Clear canvas
        ctx.fillStyle = COLORS.BACKGROUND;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        drawGrid();

        // Draw board
        for (let y = 0; y < GAME_CONFIG.GRID.HEIGHT; y++) {
            for (let x = 0; x < GAME_CONFIG.GRID.WIDTH; x++) {
                const cell = gameState.board[y][x];
                if (cell) {
                    this.letterDrawer.drawLetterBlock(
                        cell.letter,
                        x * GAME_CONFIG.CANVAS.BLOCK_SIZE,
                        y * GAME_CONFIG.CANVAS.BLOCK_SIZE,
                        cell.color
                    );
                }
            }
        }

        // Draw current piece
        if (gameState.currentPiece) {
            this.drawPiece(gameState.currentPiece);
        }

        // Draw preview piece
        this.drawPreview();
    }

    drawPiece(piece) {
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    this.letterDrawer.drawLetterBlock(
                        piece.letter,
                        (piece.x + x) * GAME_CONFIG.CANVAS.BLOCK_SIZE,
                        (piece.y + y) * GAME_CONFIG.CANVAS.BLOCK_SIZE,
                        piece.color
                    );
                }
            }
        }
    }

    drawPreview() {
        if (!gameState.nextPiece) return;
        
        // Clear preview canvas
        previewCtx.fillStyle = COLORS.BACKGROUND;
        previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
        
        const piece = gameState.nextPiece;
        const blockSize = GAME_CONFIG.CANVAS.BLOCK_SIZE * 0.8; // Slightly smaller blocks
        
        // Calculate centering offsets
        const offsetX = (previewCanvas.width - (piece.shape[0].length * blockSize)) / 2;
        const offsetY = (previewCanvas.height - (piece.shape.length * blockSize)) / 2;
        
        // Draw the preview piece
        for (let y = 0; y < piece.shape.length; y++) {
            for (let x = 0; x < piece.shape[y].length; x++) {
                if (piece.shape[y][x]) {
                    this.previewDrawer.drawLetterBlock(
                        piece.letter,
                        offsetX + x * blockSize,
                        offsetY + y * blockSize,
                        piece.color,
                        blockSize
                    );
                }
            }
        }
    }
}

// Initialize game board
const gameBoard = new GameBoard();

// Update game loop
function update(time = 0) {
    if (gameState.gameOver) {
        return;
    }

    const deltaTime = time - gameState.lastTime;
    gameState.lastTime = time;
    
    if (!gameState.isPaused) {
        gameState.dropCounter += deltaTime;
        if (gameState.dropCounter > gameState.dropInterval) {
            if (gameState.currentPiece.move(0, 1)) {
                gameState.dropCounter = 0;
            } else {
                gameBoard.mergePiece();
                if (gameState.gameOver) {
                    return;
                }
                gameState.dropCounter = 0;
            }
        }
        gameBoard.draw();
    }
    
    if (!gameState.gameOver) {
        gameState.animationId = requestAnimationFrame(update);
    }
}

// Enhanced Game Control Functions
function startGame() {
    hideGameOverModal();
    if (gameState.state === GAME_STATES.IDLE || gameState.state === GAME_STATES.GAME_OVER) {
        // Reset game
        gameBoard.reset();
        gameState.currentPiece = gameBoard.generateNewPiece();
        gameState.nextPiece = gameBoard.generateNewPiece();
        gameState.lastTime = 0;
        gameState.dropCounter = 0;
        
        // Update UI
        updateGameUI(GAME_STATES.PLAYING);
        
        // Start game loop
        if (!gameState.animationId) {
            gameState.animationId = requestAnimationFrame(update);
        }
    } else if (gameState.state === GAME_STATES.PAUSED) {
        resumeGame();
    }
}

function pauseGame() {
    if (gameState.state === GAME_STATES.PLAYING) {
        gameState.state = GAME_STATES.PAUSED;
        updateGameUI(GAME_STATES.PAUSED);
        
        // Stop animation
        if (gameState.animationId) {
            cancelAnimationFrame(gameState.animationId);
            gameState.animationId = null;
        }
    }
}

function resumeGame() {
    if (gameState.state === GAME_STATES.PAUSED) {
        gameState.state = GAME_STATES.PLAYING;
        gameState.lastTime = 0; // Reset time to prevent large jumps
        updateGameUI(GAME_STATES.PLAYING);
        
        // Resume animation
        if (!gameState.animationId) {
            gameState.animationId = requestAnimationFrame(update);
        }
    }
}

function togglePause() {
    if (gameState.state === GAME_STATES.PLAYING) {
        pauseGame();
    } else if (gameState.state === GAME_STATES.PAUSED) {
        resumeGame();
    }
}

function restartGame() {
    hideGameOverModal();
    // Cancel current animation frame
    if (gameState.animationId) {
        cancelAnimationFrame(gameState.animationId);
        gameState.animationId = null;
    }
    
    // Reset game state
    gameBoard.reset();
    gameState.currentPiece = gameBoard.generateNewPiece();
    gameState.nextPiece = gameBoard.generateNewPiece();
    gameState.lastTime = 0;
    gameState.dropCounter = 0;
    
    // Update UI
    updateGameUI(GAME_STATES.PLAYING);
    
    // Start new game loop
    gameState.animationId = requestAnimationFrame(update);
}

function gameOver() {
    gameState.state = GAME_STATES.GAME_OVER;
    
    // Stop animation
    if (gameState.animationId) {
        cancelAnimationFrame(gameState.animationId);
        gameState.animationId = null;
    }
    
    // Update final score
    const finalScoreElement = document.getElementById('finalScore');
    finalScoreElement.textContent = gameState.score;
    
    // Show modal with animation
    const modal = document.getElementById('gameOverModal');
    modal.classList.add('visible');
    
    // Update button states
    updateGameUI(GAME_STATES.GAME_OVER);
    
    // Add shake animation to modal content
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'shake 0.5s ease-in-out';
    
    // Remove animation after it completes
    setTimeout(() => {
        modalContent.style.animation = '';
    }, 500);
}

function updateGameUI(state) {
    gameState.state = state;
    
    // Update button states
    switch (state) {
        case GAME_STATES.IDLE:
            startBtn.disabled = false;
            pauseBtn.disabled = true;
            restartBtn.disabled = true;
            startBtn.textContent = 'Start Game';
            pauseBtn.textContent = 'Pause';
            break;
            
        case GAME_STATES.PLAYING:
            startBtn.disabled = true;
            pauseBtn.disabled = false;
            restartBtn.disabled = false;
            pauseBtn.textContent = 'Pause';
            gameOverModal.classList.add('hidden');
            break;
            
        case GAME_STATES.PAUSED:
            startBtn.disabled = false;
            pauseBtn.disabled = false;
            restartBtn.disabled = false;
            startBtn.textContent = 'Resume';
            pauseBtn.textContent = 'Resume';
            break;
            
        case GAME_STATES.GAME_OVER:
            startBtn.disabled = false;
            pauseBtn.disabled = true;
            restartBtn.disabled = false;
            startBtn.textContent = 'Start Game';
            break;
    }
    
    // Update canvas overlay text
    if (state === GAME_STATES.PAUSED) {
        drawPauseOverlay();
    } else {
        gameBoard.draw();
    }
}

// Helper function to draw pause overlay
function drawPauseOverlay() {
    // Draw current game state
    gameBoard.draw();
    
    // Add semi-transparent overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw pause text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '30px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PAUSED', canvas.width / 2, canvas.height / 2);
}

// Keyboard Controls
const KEYS = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    DOWN: 'ArrowDown',
    UP: 'ArrowUp',
    SPACE: ' ',
    P: 'p',
    ESCAPE: 'Escape'
};

function handleKeyPress(event) {
    if (gameState.gameOver || gameState.isPaused) return;
    
    // Pause handling
    if (event.key.toLowerCase() === KEYS.P.toLowerCase() || event.key === KEYS.ESCAPE) {
        togglePause();
        return;
    }
    
    if (gameState.isPaused) return;
    
    switch (event.key) {
        case KEYS.LEFT:
            event.preventDefault();
            if (gameState.currentPiece) {
                gameState.currentPiece.move(-1, 0);
            }
            break;
            
        case KEYS.RIGHT:
            event.preventDefault();
            if (gameState.currentPiece) {
                gameState.currentPiece.move(1, 0);
            }
            break;
            
        case KEYS.DOWN:
            event.preventDefault();
            if (gameState.currentPiece) {
                if (!gameState.currentPiece.move(0, 1)) {
                    gameBoard.mergePiece();
                }
            }
            break;
            
        case KEYS.UP:
            event.preventDefault();
            if (gameState.currentPiece) {
                gameState.currentPiece.rotate();
            }
            break;
            
        case KEYS.SPACE:
            event.preventDefault();
            if (gameState.currentPiece) {
                let dropCount = 0;
                while (gameState.currentPiece.move(0, 1)) {
                    dropCount++;
                }
                if (dropCount > 0) {
                    gameState.score += GAME_CONFIG.POINTS.HARD_DROP * dropCount;
                    gameBoard.updateScore();
                }
                gameBoard.mergePiece();
            }
            break;
    }
    
    gameBoard.draw();
}

// Touch Controls (for mobile devices)
let touchStartX = null;
let touchStartY = null;
const SWIPE_THRESHOLD = 30;

function handleTouchStart(event) {
    if (gameState.gameOver || gameState.isPaused) return;
    
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Reset touch start coordinates
    touchStartX = touchEndX;
    touchStartY = touchEndY;
    
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) {
            gameState.currentPiece.move(1, 0);
        } else {
            gameState.currentPiece.move(-1, 0);
        }
    }
    
    if (deltaY > SWIPE_THRESHOLD) {
        if (gameState.currentPiece.move(0, 1)) {
            gameState.score += GAME_CONFIG.POINTS.SOFT_DROP;
            gameBoard.updateScore();
        }
    }
    
    gameBoard.draw();
}

function handleTouchEnd() {
    touchStartX = null;
    touchStartY = null;
}

// Add touch event listeners
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchmove', handleTouchMove);
canvas.addEventListener('touchend', handleTouchEnd);

// Update existing event listeners
document.addEventListener('keydown', handleKeyPress);
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', togglePause);
restartBtn.addEventListener('click', restartGame);
playAgainBtn.addEventListener('click', restartGame);

// Initialize button states
pauseBtn.disabled = true;

// Update the init function to include proper game start state
function init() {
    gameBoard.reset();
    gameBoard.draw();
    updateGameUI(GAME_STATES.IDLE);
}

// Initialize the game
init();

// Draw grid helper function
function drawGrid() {
    ctx.strokeStyle = COLORS.GRID;
    ctx.lineWidth = 0.5;

    // Draw vertical lines
    for (let x = 0; x <= GAME_CONFIG.CANVAS.WIDTH; x += GAME_CONFIG.CANVAS.BLOCK_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, GAME_CONFIG.CANVAS.HEIGHT);
        ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= GAME_CONFIG.CANVAS.HEIGHT; y += GAME_CONFIG.CANVAS.BLOCK_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(GAME_CONFIG.CANVAS.WIDTH, y);
        ctx.stroke();
    }
}

// Test Suite
const TestSuite = {
    runAllTests() {
        console.log('Starting game tests...');
        
        this.testInitialization();
        this.testPieceMovement();
        this.testCollisions();
        this.testRotation();
        this.testScoring();
        this.testLevelProgression();
        this.testGameStates();
        
        console.log('All tests completed!');
    },
    
    testInitialization() {
        console.log('Testing initialization...');
        
        // Test board creation
        console.assert(gameState.board.length === GAME_CONFIG.GRID.HEIGHT, 
            'Board height should match configuration');
        console.assert(gameState.board[0].length === GAME_CONFIG.GRID.WIDTH,
            'Board width should match configuration');
            
        // Test piece generation
        const piece = gameBoard.generateNewPiece();
        console.assert(piece !== null, 'Piece should be generated');
        console.assert(piece.letter && piece.color, 'Piece should have letter and color');
    },
    
    testPieceMovement() {
        console.log('Testing piece movement...');
        
        const piece = gameBoard.generateNewPiece();
        const originalX = piece.x;
        
        // Test left movement
        piece.move(-1, 0);
        console.assert(piece.x === originalX - 1, 'Piece should move left');
        
        // Test right movement
        piece.move(1, 0);
        console.assert(piece.x === originalX, 'Piece should move right');
        
        // Test down movement
        const originalY = piece.y;
        piece.move(0, 1);
        console.assert(piece.y === originalY + 1, 'Piece should move down');
    },
    
    testCollisions() {
        console.log('Testing collisions...');
        
        const piece = gameBoard.generateNewPiece();
        
        // Test wall collision
        while (piece.move(-1, 0)) {} // Move left until collision
        console.assert(piece.x >= 0, 'Piece should not move beyond left wall');
        
        while (piece.move(1, 0)) {} // Move right until collision
        console.assert(piece.x + piece.shape[0].length <= GAME_CONFIG.GRID.WIDTH,
            'Piece should not move beyond right wall');
    },
    
    testRotation() {
        console.log('Testing rotation...');
        
        const piece = gameBoard.generateNewPiece();
        const originalShape = JSON.stringify(piece.shape);
        
        piece.rotate();
        console.assert(JSON.stringify(piece.shape) !== originalShape,
            'Piece shape should change after rotation');
        
        // Test rotation at boundaries
        piece.x = 0;
        const canRotateAtBoundary = piece.rotate();
        console.assert(piece.x >= 0, 'Rotation should not move piece beyond left boundary');
    },
    
    testScoring() {
        console.log('Testing scoring...');
        
        const originalScore = gameState.score;
        
        // Test line clear scoring
        gameBoard.calculateScore(1);
        console.assert(gameState.score > originalScore,
            'Score should increase after line clear');
    },
    
    testLevelProgression() {
        console.log('Testing level progression...');
        
        const originalLevel = gameState.level;
        gameState.lines = 10; // Should trigger level up
        gameBoard.checkLines();
        
        console.assert(gameState.level > originalLevel,
            'Level should increase after clearing lines');
    },
    
    testGameStates() {
        console.log('Testing game states...');
        
        // Test pause
        togglePause();
        console.assert(gameState.state === GAME_STATES.PAUSED,
            'Game should enter paused state');
        
        // Test resume
        togglePause();
        console.assert(gameState.state === GAME_STATES.PLAYING,
            'Game should resume from paused state');
        
        // Test game over
        gameOver();
        console.assert(gameState.state === GAME_STATES.GAME_OVER,
            'Game should enter game over state');
    }
};

// Add test runner to debug mode
if (DEBUG_MODE.enabled) {
    TestSuite.runAllTests();
}

// Add shake animation keyframes to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: scale(1); }
        10%, 30%, 50%, 70%, 90% { transform: scale(1.02) rotate(1deg); }
        20%, 40%, 60%, 80% { transform: scale(1.02) rotate(-1deg); }
    }
`;
document.head.appendChild(style);

// Update the playAgainBtn click handler
document.getElementById('playAgainBtn').addEventListener('click', () => {
    const modal = document.getElementById('gameOverModal');
    modal.classList.remove('visible');
    restartGame();
});

// Update modal hiding in startGame and restartGame functions
function hideGameOverModal() {
    const modal = document.getElementById('gameOverModal');
    modal.classList.remove('visible');
}

// Make sure modal is properly initialized
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('gameOverModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}); 