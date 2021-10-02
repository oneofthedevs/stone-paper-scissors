function getAMove(){
    let moves = ['Stone','Paper','Scissor'];
    let currentMove = moves[Math.floor(Math.random() * moves.length)];

    document.getElementById('move').innerHTML = currentMove;
    let computerMove = currentMove;
    let playerMove = document.getElementById('allMoves').value;
    computeResult(computerMove,playerMove);
}

function computeResult(computerMove,playerMove){
    let playerWinConditions = ['StonePaper','PaperScissor','ScissorStone']
    let computerWinConditions = ['PaperStone','ScissorPaper','StoneScissor']

    let resultString = computerMove.concat(playerMove)
    if(playerWinConditions.includes(computerMove.concat(playerMove))){
        console.log('Player Wins!')
        document.getElementById('result').innerHTML = 'Player Wins!'
    }
    else if(computerWinConditions.includes(computerMove.concat(playerMove))){
        console.log('Computer Wins!')
        document.getElementById('result').innerHTML = 'Computer Wins!'
    }
    else{
        console.log('No Result Possible')
        document.getElementById('result').innerHTML = 'No Result Possible'
    }
}