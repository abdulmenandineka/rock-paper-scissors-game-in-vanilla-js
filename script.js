function computerMove (){
    let randomNumber = Math.floor(Math.random() * 3 + 1 ),
        computerMove = '';
    // console.log(randomNumber);

    return randomNumber == 1 ? computerMove = 'rock': randomNumber == 2 ? computerMove = 'paper': randomNumber == 3 ? computerMove = 'scissors' : '';
    
}