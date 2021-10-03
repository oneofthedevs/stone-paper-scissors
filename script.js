getAMove = (playerMove) => {
    let moves = ['Stone','Paper','Scissor'];
    let currentMove = moves[Math.floor(Math.random() * moves.length)];
    let computerMove = currentMove;
    computeResult(computerMove,playerMove);
}

function computeResult(computerMove,playerMove){
    let playerWinConditions = ['StonePaper','PaperScissor','ScissorStone']
    let computerWinConditions = ['PaperStone','ScissorPaper','StoneScissor']

    let resultDiv = document.getElementById('resultDiv');
    resultDiv.style.display = "flex";

    document.getElementById('playerMove').src = './'+playerMove+'.png';
    document.getElementById('aiMove').src = './'+computerMove+'.png';


    if(playerWinConditions.includes(computerMove.concat(playerMove))){
        console.log('Player Wins!')
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('result').style.backgroundColor = 'green'

    }
    else if(computerWinConditions.includes(computerMove.concat(playerMove))){
        console.log('Computer Wins!')
        document.getElementById('result').innerHTML = 'AI Wins!'
        document.getElementById('result').style.backgroundColor = 'red'
    }
    else{
        console.log('DRAW')
        document.getElementById('result').innerHTML = 'DRAW'
        document.getElementById('result').style.backgroundColor = 'grey'
    }
}