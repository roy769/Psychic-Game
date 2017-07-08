
	var  computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];


	var correct = 0;
	var wrong = 0;
	var guessesLeft = 9;
	/*for(var i =0; i < guessesLeft.length; i--)*/
	var guesses = 0;
	var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];


	document.onkeyup = function (event) {



		var userGuess = event.key;

		console.log(computerGuess);



	if (userGuess != computerGuess) { wrong++;
		guessesLeft--; guesses++;
	}


			else { correct++;
				alert("The letter was " + computerGuess);
				alert("	YOU ARE PSYCHIC, good job " );

				}
				if (guesses > 9)
				{
					window.location.href = "file:///C:/Users/dasik/git/Psychic-Game/educated-guess.html";
				}
			}

		var html =

		"<p> You Chose:  "  + userGuess.toUpperCase()+ "</p>" +
		"<p> Wrong: " + wrong + "</p>"+
		"<p> Correct: " + correct + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>";

		document.querySelector(".psychic").innerHTML = html;
	}
;
