// GUESSING GAME

console.log(`Start program`)


function upperNumber() { 
	return Math.floor( Math.random() * 10 )
};
var UpperNumber = upperNumber();

function lastNumber() {	
	return Math.floor( Math.random() * 100);
};
var LastNumber = lastNumber();

function timeout(){
	return Math.floor( Math.random() * 20 )
};
var timeCounter = timeout();
console.log(timeCounter)
var guessCounter = 0
function getRandomNumber() {
	guessCounter ++;
	timeCounter --;
	return Math.floor( Math.random() * (UpperNumber - LastNumber) + 1 ) + LastNumber;
	 
}

var msg1 = document.getElementById('game-information');
msg1 = `<div id = 'msg1'> I am thinking of a number between ${UpperNumber} and ${LastNumber}. `
msg1 += `You are to guess the number correctly to determine your IQ power</div>`
document.write(msg1)

var RandomNumber = getRandomNumber()
console.log(RandomNumber)
var username = prompt("What is your name")
var correctGuess = false

var input = document.getElementById('input');
var guessedValue = input
function checkRandomNumber(){
	getRandomNumber()
	if (parseInt(guessedValue.value) === RandomNumber){
		correctGuess = true
	}else if(parseInt(guessedValue.value) >= RandomNumber){
		alert(`The number is smaller than ${guessedValue.value}`)
	}else if(parseInt(guessedValue) <= RandomNumber){
		alert(`The number is larger than ${guessedValue.value}`)
	}else if (isNaN(guessedValue.value)){
		alert(`Input only numbers`)
	}else{
		alert("Wrong!")
	}
	if(correctGuess){
		msg1 = `${username} You are intelligent\nYou guessed it right\nIt took you ${guessCounter} tries to get it`
		alert(msg1)
		if(guessCounter <= 5){
			msg1 =`IQ LEVEL = GENIUS 50%`
			alert(msg1)
		}else if(guessCounter <= 10){
			msg1 = `IQ LEVEL = SMART 30%`
			alert(msg1)
		}else if(guessCounter <= 15){
			msg1 = `IQ LEVEL = ANALYTICAL 25%`
			alert(msg1)
		}else if(guessCounter <= 20){
			msg1 = `IQ LEVEL = GOOD (15%) `
			alert(msg1)
		}else if(guessCounter <= 30){
			msg1 = `IQ LEVEL = BETTER (10%)`
			alert(msg1)
		}else if(guessCounter <= 40){
			msg1 =`IQ LEVEL = AVERAGE (5%)`
			alert(msg1)
		}else if(guessCounter <= 50){
			msg1 = `IQ LEVEL = TOO POOR(1.5%).\nPlease go for a mental therapy`
			alert(msg1)
		}else{
			alert("Try again")
		}
		alert("REFRESH THE GAME TO START OVER")

	}else if(timeCounter == 0){
		msg1 = `TIME UP! ${username} You are'nt intelligent enought to guess it right after ${guessCounter} tries`
		msg1 += `\nThe Random Number was ${RandomNumber}`
		alert(msg1)
		alert("IQ LEVEL = 0.000005% \nYOU NEED SERIOUS MENTAL THERAPY!!!")
		alert("REFRESH THE GAME TO START OVER (F5)")
	}
}



console.log(`End program`)

