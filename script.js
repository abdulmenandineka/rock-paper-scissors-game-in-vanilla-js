computerMove =()=>{
    let randomNumber = Math.floor(Math.random() * 3 + 1 ),
        computerMove = '';
    // console.log(randomNumber);

    return randomNumber == 1 ? computerMove = 'rock': randomNumber == 2 ? computerMove = 'paper': randomNumber == 3 ? computerMove = 'scissors' : '';
    
}


let rockBtn = document.querySelector('.rock'),
    paperBtn = document.querySelector('.paper'),
    scissorsBtn = document.querySelector('.scissors'),
    score = {win:0, tie:0, lose:0},
    move = document.querySelector('.move'),
    resultHtml = document.querySelector('.result'),
    scoreP = document.querySelector('.score');


    playGame = (playerMOve) =>{
        let compMove = computerMove(),
        result = '';
        playerMOve === compMove ? result = 'tie' :
        
        playerMOve === 'rock' && compMove === 'scissors' ||
        playerMOve === 'paper' && compMove === 'rock' ||
        playerMOve === 'scissors' && compMove === 'paper' ? result = 'you win' :

        playerMOve === 'rock' && compMove === 'paper' ||
        playerMOve === 'paper' && compMove === 'scissors' ||
        playerMOve === 'scissors' && compMove === 'rock' ? result = 'you lose' : '';
        
        // console.log(`you pick ${playerMOve} computer pick ${compMove}`);
        // console.log(`result :  ${result}`);

        result === 'you win' ? score.win++ :
            result === 'tie' ? score.tie++ :
            result === 'you lose' ? score.lose++ : ''; 

        let moveHtml = `you pick <span style = 'color:red;font-size:30px'>${playerMOve}</span> computer pick <span style = 'color:red;font-size:30px'>${compMove}</span>`
            move.innerHTML = moveHtml;
            resultHtml.innerHTML = `result : <span style = 'color:blue;font-size:40px;'>${result}</span>`;
            scoreP.textContent = `win:${score.win} tie:${score.tie} lose:${score.lose}`
            console.log(`win:${score.win} tie:${score.tie} lose:${score.lose}`);
    }







        
