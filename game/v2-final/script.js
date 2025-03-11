(function(){
    'use strict';
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', 
               '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['Stewart', 'Caramel'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Quit Game</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the dice</button>';
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        game.innerHTML = `<p>${gameData.players[gameData.index]} rolled:</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;

        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh no! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            switchPlayer();
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            game.innerHTML += `<p>Oops! Rolled a one. Turn over.</p>`;
            switchPlayer();
        } else {
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> <button id="pass">Pass</button>';

            document.querySelector('#rollagain').addEventListener('click', throwDice);
            document.querySelector('#pass').addEventListener('click', function() {
                switchPlayer();
            });
            checkWinningCondition();
        }
    }

    function switchPlayer() {
        gameData.index = gameData.index;
        setTimeout(setUpTurn, 2000);
    }

    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${ gameData.players[gameData.index]} wins with ${ gameData.score[gameData.index]} points!</h2>`;

            actionArea = '';
            document.querySelector('#quit').innerHTML = 'Start a new game?'; 

    } else {
        // show current score...
    
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}:
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: 
        ${gameData.score[1]}</strong></p>`;

        function showCurrentScore() {
            score.innerHTML
        }
    }}
})();