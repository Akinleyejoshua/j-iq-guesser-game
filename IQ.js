console.log("Started")

var msg = document.querySelector('#msg');
var msg1 = document.querySelector('#msg1');
var username = document.querySelector("#name");
var userResponse = document.querySelector('#response');
var checkGuess = document.querySelector("#guess");
var counter = 0;
var correctGuess = false;


var UpperNumber = function () {
    return Math.floor(Math.random() * 100);
};
var upperNumber = UpperNumber();

var LastNumber = function () {
    return Math.floor(Math.random() * 10);
};
var lastNumber = LastNumber();

function getRandomNumber() {
    return Math.floor(Math.random() * (upperNumber - lastNumber + 1) + lastNumber);
};
var randomNumber = getRandomNumber();
console.log(randomNumber)

function timeoutNumber() {
    return Math.floor(Math.random() * 50);
};
var timeout = timeoutNumber();


function getCounters() {
    counter++;
    timeout--;
};

msg.innerHTML = 'I am thinking of a number between ' + upperNumber + ' and ' + lastNumber;
msg.innerHTML += ' You are to guess the numbers correctly to determine your IQ power, Good luck.<br>';
msg.innerHTML += 'You have ' + timeout + ' attempt to guess the number';


checkGuess.addEventListener('click', function check(event) {
    getCounters()
    if (parseInt(userResponse.value) === randomNumber) {
        correctGuess = true;
    }
    else if (isNaN(userResponse.value)) {
        msg1.innerHTML = 'Input only Numbers!';
    }
    else if (counter === 3) {
        msg1.innerHTML = username.value + ', Think harder!';
    }
    else if (counter === 6) {
        msg1.innerHTML = username.value + ', I taught you are soo smart to guess the number after ' + counter + ' tries';
    }
    else if (counter === 10) {
        msg1.innerHTML = username.value + ', Dumbhass you did not still get this simple number since, You have guessed the number ' + counter + ' times.<br>';
        msg1.innerHTML += ' If you wanna prove me wrong make sure you guess it correctly this time around ' + username.value;
    }
    else if (timeout === 0) {
        msg1.innerHTML = username.value + '!, GAME OVER!!! poor thinker, You have a less brain IQ power, We suggest you a mental therapy.<br>';
        msg1.innerHTML += ' We deduced that you have a low IQ of about 0.000001% which is too bad, <br>Play the game again to check for better performance by pressing F5.';
        msg1.innerHTML += '<br> The random number is ' + randomNumber

        userResponse.style.display = 'none';
        username.style.display = 'none';
        checkGuess.style.display = 'none';
        msg.style.display = 'none';
    }
    else if (userResponse.value === '') {
        msg1.innerHTML = 'Empty field!'
    }

    else {
        if (userResponse.value < randomNumber) {
            msg1.innerHTML = 'The number is larger than ' + userResponse.value
        }
        else if (userResponse.value > randomNumber) {
            msg1.innerHTML = 'The number is lesser than ' + userResponse.value
        }

    }

    if (correctGuess === true) {
        userResponse.style.display = 'none';
        username.style.display = 'none';
        checkGuess.style.display = 'none';
        msg.style.display = 'none';
        msg1.style.background = 'linear-gradient(rgba(12, 160, 12, 0.459), rgba(7, 100, 7, 0.281))';

        msg1.innerHTML = username.value + ' congrat!, You guessed the answer correctly, this shows how intelligent you are<br>';
        msg1.innerHTML += 'It took you ' + counter + ' time(s) to guess the number ' + randomNumber + '.<br>';

        if (counter <= 4) {
            msg1.innerHTML += 'IQ LEVEL = GENIUS (99.9%)';
        }
        else if (counter <= 8) {
            msg1.innerHTML += 'IQ LEVEL = ANALYTICAL (80%)';
        }
        else if (counter <= 12) {
            msg1.innerHTML += 'IQ LEVEL = SMART (75%)';
        }
        else if (counter <= 14) {
            msg1.innerHTML += 'IQ LEVEL = SHARP MEMORY (62% - 65%)';
        }
        else if (counter <= 18) {
            msg1.innerHTML += 'IQ LEVEL = GOOD MEMORY (50%)';
        }
        else if (counter <= 20) {
            msg1.innerHTML += 'IQ LEVEL = BETTER MENTAL ABILITY (35%)';
        }
        else if (counter <= 24) {
            msg1.innerHTML += 'IQ LEVEL = AVERAGE (20%)';
        }
        else if (counter <= 30) {
            msg1.innerHTML += 'IQ LEVEL = POOR (8%)';
        }
        else if (counter <= 45 || 50) {
            msg1.innerHTML += 'IQ LEVEL = TOO POOR (0.5%)<br>';
            msg1.innerHTML += 'Please go for a mental therapy!, You are too mentaly poor'
        }

        msg1.innerHTML += 'PRESS F5 to play again.'


    }
})

