function change_value() {
	// funkcija spremeni vrednosti gumba in naslova

	var new_value, other_value

	//nastavim dve spremenljivki na tisto kar rabita prikazat gumb in naslov
	if (!checked_in) {
		button_value = "Check out";
		other_value = "checked out"

	} else {
		button_value = "Check in";
		other_value = "checked in"
	}

	checked_in = !checked_in;

	//spremenim inner html gumba in dela naslova
	$("#checkin_button").html(button_value);
	$("#checkin_status").html(other_value);

	console.log(checked_in);
}

function show_hours(day) {
	//prikaže število ur za tisti dan v tednu (poišče po indeksu)
	document.getElementById("work_hours").innerHTML = ure_dela[day]
}

var checked_in = false;
var ure_dela = ["08","16", "24", "31", "42"];
console.log(checked_in);
