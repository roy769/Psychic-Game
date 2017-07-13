
var  computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];


var correct = 0;
var wrong = 0;
var guessesLeft = 9;
	/*for(var i =0; i < guessesLeft.length; i--)*/
var guesses = 0;


var  computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];


	document.onkeyup = function(event) {



		var userGuess = event.key;

		console.log(computerGuess);
		//put counter for guesses
		//limit guesses to 9
		//send t educated-guess page at guess 10


	if (userGuess != computerGuess)
	 { wrong++;
		guessesLeft--; guesses++; event++;
	}

			else { correct++;
				alert("The letter was " + computerGuess);
				alert("	YOU ARE PSYCHIC, good job " );

				}
if (guessesLeft === 0) {
	confirm("Wanna ask Miss Cleo for help?! ");
	location.target = "_blank";
    location.href = "file:///C:/Users/dasik/git/Psychic-Game/educated-guess.html";
	//link here
}

					//end to educated-guess page


		var html =

		"<p> You Chose:  "  + userGuess.toUpperCase()+ "</p>" +
		"<p> Wrong: " + wrong + "</p>"+
		"<p> Correct: " + correct + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses: " + guesses + "</p>"+
		"<P> Guess History: " + event + "</p>";

		document.querySelector(".psychic").innerHTML = html;
	}
;
