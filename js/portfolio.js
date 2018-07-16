var texts = document.querySelectorAll(".shape p");
var arr = [];

// to generate colors when page loads
loadColors();

// to generate new colors when button clicked
$('button').on("click", function() {
	loadColors();
})

// to generate rgb color for each shape
function newColor() {
	for (var i = 0; i < 4; i++) {
		// numbers from 0 to 255
		var r = Math.floor(Math.random() *256);
		var g = Math.floor(Math.random() *256);
		var b = Math.floor(Math.random() *256);
		// creates a string with rgb color
		var color = "rgb(" + r + ", " + g + ", " + b + ")";
		// adds a string to the array
		arr.push(color);
	}	
}

// takes color from arr and assigns it to each shape
function assignColors() {
	$(".circle").each(function(i) {
		$(this).css("background", arr[i]);
	})
}

// changes text inside a paragraph to match color from array
function changeText() {
	for (var i = 0; i < texts.length; i++) {
		texts[i].textContent = arr[i];
	}
}

// removes colors from array
function resetArr() {
	for (var i = 0; i < 4; i++) {
		arr.shift();
	}
}

// combine functions
function loadColors() {
	newColor();
	assignColors();
	changeText();
	resetArr();
}