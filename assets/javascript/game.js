
	var  computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var correct = 0;
	var wrong = 0;
	var guessesLeft = 9; 
	/*for(var i =0; i < guessesLeft.length; i--)*/
	var guesses = 0;
	var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];


	document.onkeyup = function (event) {
		guessesLeft--;

		function refresh() {
			if (guessesLeft === -1)window.location.reload(true);
		}

		var userGuess = event.key;



		if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

			 if (( userGuess === "a") && (computerGuess !="a"))	{ wrong++;}		
			else if (( userGuess === "b") && (computerGuess !="b"))	{ wrong++;}
			else if (( userGuess === "c") && (computerGuess !="c"))	{ wrong++;}	
			else if (( userGuess === "d") && (computerGuess !="d"))	{ wrong++;}	
			else if (( userGuess === "e") && (computerGuess !="e"))	{ wrong++;}	
			else if (( userGuess === "f") && (computerGuess !="f"))	{ wrong++;}	
			else if (( userGuess === "g") && (computerGuess !="g"))	{ wrong++;}	
			else if (( userGuess === "h") && (computerGuess !="h"))	{ wrong++;}	
			else if (( userGuess === "i") && (computerGuess !="i"))	{ wrong++;}	
			else if (( userGuess === "j") && (computerGuess !="j"))	{ wrong++;}	
			else if (( userGuess === "k") && (computerGuess !="k"))	{ wrong++;}	
			else if (( userGuess === "l") && (computerGuess !="l"))	{ wrong++;}	
			else if (( userGuess === "m") && (computerGuess !="m"))	{ wrong++;}	
			else if (( userGuess === "n") && (computerGuess !="n"))	{ wrong++;}	
			else if (( userGuess === "o") && (computerGuess !="o"))	{ wrong++;}	
			else if (( userGuess === "p") && (computerGuess !="p"))	{ wrong++;}	
			else if (( userGuess === "q") && (computerGuess !="q"))	{ wrong++;}	
			else if (( userGuess === "r") && (computerGuess !="r"))	{ wrong++;}	
			else if (( userGuess === "s") && (computerGuess !="s"))	{ wrong++;}	
			else if (( userGuess === "t") && (computerGuess !="t"))	{ wrong++;}	
			else if (( userGuess === "u") && (computerGuess !="u"))	{ wrong++;}	
			else if (( userGuess === "v") && (computerGuess !="v"))	{ wrong++;}	
			else if (( userGuess === "w") && (computerGuess !="w"))	{ wrong++;}	
			else if (( userGuess === "x") && (computerGuess !="x"))	{ wrong++;}
			else if (( userGuess === "y") && (computerGuess !="y"))	{ wrong++;}
			else if (( userGuess === "z") && (computerGuess !="z"))	{ wrong++;}		
			else if (userGuess === computerGuess) { correct++;
				alert("The letter was " + computerGuess);
				alert("	YOU ARE PSYCHIC, good job " );
				
			}	

		var html = 
		
		"<p> You chose "  + userGuess + "</p>" + 
		"<p> wrong: " + wrong + "</p>"+
		"<p> Correct:" + correct + "</p>" +
		"<p> Guesses Left:" + guessesLeft + "</p>";

		document.querySelector("#psychic").innerHTML = html;
	}
};
