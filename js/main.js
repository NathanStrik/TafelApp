/* 
** Dit is het JavaScript voor de tafel-oefen web-app
** Door: Nathan Strik
*/

// BEGIN MAIN

// Maak variabele aantalSommen en aantalGoed
var aantalSommen = 1;
var aantalGoed = 0;
var getal1;
var getal2;
var antwoord;

// Maak eerste som
maakSom();

// Check of de button wordt aangeklikt 
document.getElementById("submitbutton").addEventListener("click", checkAntwoord);

// Check of er op ENTER wordt geramd
document.addEventListener("keypress", function(enter) {

    var key = enter.which || enter.keyCode || 0;

    if (key === 13) {
        checkAntwoord();
    }

});

// EINDE MAIN

// Functie om een som te maken
function maakSom() {
	// Maak de som
	getal1 = parseInt((9 * Math.random()) + 2);
	getal2 = parseInt((9 * Math.random()) + 2);
	antwoord = parseInt(getal1) * parseInt(getal2);

	// Toon som in vak met id 'som'
	document.getElementById("som").innerHTML = getal1 + " x " + getal2 + " =";
}


// Functie om antwoord te checken en feedback te geven 
function checkAntwoord() {
	// Lees antwoord uit
	var gegevenAntwoord = document.getElementById("invoer").value;
	if (gegevenAntwoord == antwoord) {
		aantalGoed++;
		document.getElementById("feedback").innerHTML = "<br>Goedzo!<br>Maak de volgende som.";
	} else {
		document.getElementById("feedback").innerHTML = "<br>Helaas! Het goede antwoord van " 
		+ getal1 + " x " + getal2 + " is " + antwoord + "<br>Maak de volgende som.";
	}
	// Werk speelveld bij
	updateSpeelveld();
}


// Functie om speelveld bij te werken
function updateSpeelveld() {
	// Maak invoerveld leeg
	document.getElementById("invoer").value = "";

	// Zet focus terug op invoerveld
	document.getElementById("invoer").focus();

	// Werk score bij, verhoog de somteller en maak een nieuwe som
	if (aantalGoed == 1) {
		document.getElementById("score").innerHTML = aantalGoed + " som goed van de " + aantalSommen;
	} else {
		document.getElementById("score").innerHTML = aantalGoed + " sommen goed van de " + aantalSommen;
	}
	aantalSommen++;
	maakSom();
}
