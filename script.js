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


rockFunction =()=>{
    let compMove = computerMove(),
        result = '';
        compMove === 'rock' ? result = 'tie' : 
        compMove === 'paper' ? result = 'you lose':
        compMove === 'scissors' ? result = 'you win' : '';
    let moveHtml = `you pick <span style = 'color:red;font-size:30px'>rock</span> computer pick <span style = 'color:red;font-size:30px'>${compMove}</span>`

    // console.log(`you pick rock computer pick ${compMove}`);
    console.log(`result ${result}`);

    result === 'you win' ? score.win++ :
    result === 'tie' ? score.tie++ :
    result === 'you lose' ? score.lose++ : ''; 

    move.innerHTML = moveHtml;
    resultHtml.innerHTML = `result : <span style = 'color:blue;font-size:40px;'>${result}</span>`;
    scoreP.textContent = `win:${score.win} tie:${score.tie} lose:${score.lose}`
    console.log(`win:${score.win} tie:${score.tie} lose:${score.lose}`);
    
};


paperFunction =()=>{
    let compMove = computerMove(),
        result = '';
        compMove === 'rock' ? result = 'you win' : 
        compMove === 'paper' ? result = 'tie':
        compMove === 'scissors' ? result = 'you lose' : '',
        moveHtml = `you pick <span style = 'color:red;font-size:30px'>paper</span> computer pick <span style = 'color:red;font-size:30px'>${compMove}</span>`;
    // console.log(`you pick paper computer pick ${compMove}`);
    console.log(`result ${result}`);

    result === 'you win' ? score.win++ :
    result === 'tie' ? score.tie++ :
    result === 'you lose' ? score.lose++ : ''; 


    move.innerHTML = moveHtml;
    resultHtml.innerHTML = `result : <span style = 'color:blue;font-size:40px;'>${result}</span>`;
    scoreP.textContent = `win:${score.win} tie:${score.tie} lose:${score.lose}`
    console.log(`win:${score.win} tie:${score.tie} lose:${score.lose}`);
}



scissorsFunction =()=>{
    let compMove = computerMove(),
        result = '';
        compMove === 'rock' ? result = 'you lose' : 
        compMove === 'paper' ? result = 'you win':
        compMove === 'scissors' ? result = 'tie' : '',
        moveHtml = `you pick <span style = 'color:red;font-size:30px'>scissors</span> computer pick <span style = 'color:red;font-size:30px'>${compMove}</span>`
    // console.log(`you pick scissors computer pick ${compMove}`);
    console.log(`result ${result}`);

    result === 'you win' ? score.win++ :
    result === 'tie' ? score.tie++ :
    result === 'you lose' ? score.lose++ : ''; 


    move.innerHTML = moveHtml;
    resultHtml.innerHTML = `result : <span style = 'color:blue;font-size:40px;'>${result}</span>`;
    scoreP.textContent = `win:${score.win} tie:${score.tie} lose:${score.lose}`
    console.log(`win:${score.win} tie:${score.tie} lose:${score.lose}`);
}

computerMove=()=>{
    let randomNumber = Math.floor(Math.random() * 3 + 1 ),
    computerMove = '';
    return randomNumber == 1 ? computerMove = 'rock': randomNumber == 2 ? computerMove = 'paper': randomNumber == 3 ? computerMove = 'scissors' : '';

}