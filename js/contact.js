console.clear();

var inputs = Array.from(document.querySelectorAll("input"));
inputs.forEach(input => {
	window.setInterval(function() {
		if (input.value == "") {
			input.classList.remove("hasvalue");
		} else {
			input.classList.add("hasvalue");
		}
	}, 10);
});