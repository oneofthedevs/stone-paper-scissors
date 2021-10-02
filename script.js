function getAMove(){
    let moves = ['Stone','Paper','Scissor'];
    let currentMove = moves[Math.floor(Math.random() * moves.length)];

    document.getElementById('move').innerHTML = currentMove;
    let computerMove = currentMove;
    let playerMove = document.getElementById('allMoves').value;
    computeResult(computerMove,playerMove);
}

function computeResult(computerMove,playerMove){

    if(computerMove == 'Sccissor' && playerMove == 'Stone'){
        console.log("Computer Wins!")
    }
    
    else if(computerMove == 'Stone' && playerMove == 'Paper'){
        console.log("Computer Wins!")
    }

    else if(computerMove == 'Paper' && playerMove == 'Scissor'){
        console.log("Computer Wins!")
    }

    else if(computerMove == 'Sccissor' && playerMove == 'Paper'){
        console.log("Player Wins!")
    }
    else if(computerMove == 'Stone' && playerMove == 'Sccissor'){
        console.log("Player Wins!")
    }

    else if(computerMove == 'Paper' && playerMove == 'Stone'){
        console.log("Player Wins!")
    }
    else{
        console.log("No results possible")
    }
   
}