(function() {
    'use strict';
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const player1 = document.querySelector('#player1');
    const player2 = document.querySelector('#player2');
    const closeRules = document.querySelector('#close-rules');
    const rulesContainer = document.querySelector('#rules');


    const rollSound = new Audio('sounds/mouse.mp3');
    const winSound = new Audio('sounds/cheese.mp3');

    const gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', 
               '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['Stewart', 'Caramel'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 30
    };

    startGame.addEventListener('click', function() {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Quit Game</button>';

        document.querySelector('#quit').addEventListener('click', function() {
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn() {
        rollSound.play(); // Play rolling sound

        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll</button>';
        document.querySelector('#roll').addEventListener('click', function() {
            // rollSound.play(); // Play rolling sound
            console.log('Roll!');
            throwDice();

            document.querySelector('#pass').addEventListener('click', function() {
                console.log(`${gameData.players[gameData.index]} passed their turn.`);
                switchPlayer();
                setTimeout(setUpTurn, 1000);  
            });
        });
    }

    function throwDice() {
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>${gameData.players[gameData.index]} rolled:</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}" alt="Die 1"> <img src="images/${gameData.dice[gameData.roll2-1]}" alt="Die 2">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData.rollSum);

        // If two ones are rolled
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh no! Swiss eyes!!</p>';
            gameData.score[gameData.index] = 0;
            switchPlayer();
            setTimeout(setUpTurn, 3000);
        }

        // If either die is a one
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            game.innerHTML += `<p>NO THE CHEESE!! One of the rolls was a 1. Switching to ${gameData.players[gameData.index === 0 ? 1 : 0]}</p>`;
            switchPlayer();
            setTimeout(setUpTurn, 2000);
        } else {
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button>';

            document.querySelector('#rollagain').addEventListener('click', throwDice);

            checkWinningCondition();
        }
    }

    function switchPlayer() {
        gameData.index = (gameData.index + 1) % 2; 
    }

    function checkWinningCondition() {
        winSound.play(); // Play winning sound

        if (gameData.score[gameData.index] >= gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} cheeses!</h2>`;
            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'Start a new one?';

            const rollAgainButton = document.querySelector('#rollagain');
            if (rollAgainButton) {
                rollAgainButton.style.display = 'none';
            }

            const rollButton = document.querySelector('#roll');
            if (rollButton) {
                rollButton.style.display = 'none';
            }

            const quitButton = document.querySelector('#quit');
            if (quitButton) {
                quitButton.style.display = 'none';
            }

            const passButton = document.querySelector('#pass');
            if (passButton) {
                passButton.style.display = 'none';
            }

            const gameStartedText = document.querySelector('#gamecontrol h2');
            if (gameStartedText) {
                gameStartedText.style.display = 'none';
            }
        } else {
            // Update the score display for both players
            player1.querySelector('.cheese-count').textContent = `${gameData.score[0]} Cheese${gameData.score[0] !== 1 ? 's' : ''}`;
            player2.querySelector('.cheese-count').textContent = `${gameData.score[1]} Cheese${gameData.score[1] !== 1 ? 's' : ''}`;
        }
    }

    // Close rules overlay
    closeRules.addEventListener('click', function() {
        rulesContainer.style.display = 'none';
    });

})();

