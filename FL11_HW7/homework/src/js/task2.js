let attempts = 3, game;
game = confirm('Do you want to play a game?');

if (!game) {
    alert('You did not become a billionaire, but can.');
} else {
    while (game) {
        let max = 8, min = 0, rand, suggest, totalPrize = 0, possiblePrize = 100, letContinue = true;
        while (letContinue) {

            rand =  Math.floor(min + Math.random() * (max + 1 - min));
            for (let i = 1; i <= attempts; i++) {
                suggest = parseInt(prompt('Choose a roulette pocket number from 0 to ' + max + '\n Attempts left: '
                    + (attempts - i + 1) + '\n Total prize: ' + totalPrize +
                    '\n Posible prize on current attempt: ' + possiblePrize/ Math.pow(2,i-1)  + '$ \n'));
                    console.log(rand);
                    console.log(suggest);
                if (suggest === rand && i === 1) {
                    totalPrize = totalPrize + possiblePrize;
                    break;
                } else if (suggest === rand && i === attempts - 1) {
                    totalPrize = totalPrize + possiblePrize / (attempts - 1);
                    break;
                } else if (suggest === rand && i === attempts) {
                    totalPrize = totalPrize + possiblePrize / (attempts + 1);
                    break;
                } else if (suggest !== rand && i === attempts) {
                    totalPrize = 0;
                    break;
                }
            }

            if (totalPrize > 0) {
                letContinue = confirm('Congratulation, you won!   Your prize is: '
                    + totalPrize + '$. Do you want to continue?');
            } else {
                break;
            }

            if (letContinue) {
                max += attempts + 1;
                possiblePrize *= attempts - 1;
            } else {
                break;
            }
        }

        alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
        game = confirm('Do you want to play again?');
    }
}

