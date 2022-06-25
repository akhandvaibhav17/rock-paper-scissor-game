const message = document.querySelector('.round-result');
const finalMessage = document.querySelector('.final-result')
const score = document.querySelectorAll('.score-number');
const buttons = document.querySelectorAll('button');
const winnerScores = [0, 0];
var computerImage;
var playerImage;

//add event listeners to buttons
for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener('click', function() {
        let playerSelectionHTML = this.innerHTML;
        if (playerSelectionHTML === buttons[0].innerHTML) {
            playerSelection = "Rock";
            playerImage = "images\\rock.png";
        } else if (playerSelectionHTML === buttons[1].innerHTML) {
            playerSelection = "Paper";
            playerImage = "images\\paper.png";
        } else {
            playerSelection = "Scissors";
            playerImage = "images\\scissors.png";
        }

        //setup a random number to select for computer
        //selects a number between 0 and 1 (1 not-inclusive)
        let computerSelection = Math.random();

        //if computerSelection is less than .34, computer selects Rock
        if (computerSelection < .34) {
            computerSelection = 'Rock';
            computerImage = "images\\rock.png";
        } else if (computerSelection <= .67) {
            computerSelection = 'Paper';
            computerImage = "images\\paper.png";
        } else {
            computerSelection = 'Scissors';
            computerImage = "images\\scissors.png";
        }

        //setup a function to compare winners and return result
        let result = checkWinner(playerSelection, computerSelection);

        //output scores to the DOM
        if (result === 'Player') {
            result += ' wins the round';
            //update score
            winnerScores[0]++;
            document.querySelector('.player-choice-image').setAttribute("src", playerImage);
            document.querySelector('.computer-choice-image').setAttribute("src", computerImage);

        }

        if (result === 'Computer') {
            result += ' wins the round';
            winnerScores[1]++;
            document.querySelector('.player-choice-image').setAttribute("src", playerImage);
            document.querySelector('.computer-choice-image').setAttribute("src", computerImage);
        }

        if (result === 'Draw') {
            result += ' It\'s a tie round!'
            document.querySelector('.player-choice-image').setAttribute("src", playerImage);
            document.querySelector('.computer-choice-image').setAttribute("src", computerImage);

        }

        //output score into Score DIV
        score[0].innerText = ' [ ' + winnerScores[0] + ' ]';
        score[1].innerText = ' [ ' + winnerScores[1] + ' ]';

        //output player and computer's selections
        messenger('<br><br><Br>Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);

        if (winnerScores[0] === 5) {
            finalMessage.innerHTML = 'You Win!!!';
            message.innerHTML = '';
            buttons[0].disabled = true;
            buttons[1].disabled = true;
            buttons[2].disabled = true;
            buttons[3].style.display = "inline";
            buttons[4].style.display = "inline";
            document.querySelector('.player-choice-image').setAttribute("src", '');
            document.querySelector('.computer-choice-image').setAttribute("src", '');

        }
        if (winnerScores[1] === 5) {
            finalMessage.innerHTML = 'Computer Wins!!!';
            message.innerHTML = '';
            buttons[0].disabled = true;
            buttons[1].disabled = true;
            buttons[2].disabled = true;
            buttons[3].style.display = "inline";
            buttons[4].style.display = "inline";
            document.querySelector('.player-choice-image').setAttribute("src", '');
            document.querySelector('.computer-choice-image').setAttribute("src", '');
        }

    });
}

buttons[3].addEventListener('click', reset);

function reset() {
    winnerScores[0] = 0;
    winnerScores[1] = 0;
    buttons[3].style.display = "none";
    buttons[4].style.display = "none";
    message.innerHTML = '';
    finalMessage.innerHTML = '';
    score[0].innerText = '';
    score[1].innerText = '';
    buttons[0].disabled = false;
    buttons[1].disabled = false;
    buttons[2].disabled = false;


}


function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    }

    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        } else {
            return 'Player';
        }
        playerImage = 'rock.png';
    }

    if (player === 'Paper') {
        if (computer === 'Scissors') {
            return 'Computer';
        } else {
            return 'Player';
        }
        playerImage = 'paper.png';
    }

    if (player === 'Scissors') {
        if (computer === 'Rock') {
            return 'Computer';
        } else {
            return 'Player';
        }
        playerImage = 'scissors.png';
    }
}