// guess a no in range between 1 to 100 you have chance of 7 time to guess my right no that i think that is between 1 to 100. If you guess the right number, you win! If you run out of chances, you lose. Good luck!
const randomNumber = Math.floor(Math.random()* 100) + 1;
        let attempts = 0;
        function checkGuess() {
            const userGuess = parseInt(document.getElementById('guess').value);
            attempts++;
            const messageElement = document.getElementById('message');

            if (userGuess === randomNumber) {
                messageElement.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
            } else if (userGuess < randomNumber) {
                messageElement.textContent = 'Too low! try again.';
            } else {
                messageElement.textContent = 'Too high! try again.';

            }
        }