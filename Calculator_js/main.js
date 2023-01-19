let prevVal = 0
let operation = ''

function clearScreen() {
	document.getElementById('result').value = "";
}

function display(val) {
	document.getElementById('result').value += val;
}

function plus() {
	prevVal = Number(document.getElementById('result').value);
	document.getElementById('result').value = '';
	operation = "plus";
}

function subtract() {
	prevVal = Number(document.getElementById('result').value);
	document.getElementById('result').value = '';
	operation = "minus";
}

function multiply() {
	prevVal = Number(document.getElementById('result').value);
	document.getElementById('result').value = '';
	operation = "times";
}

function divide() {
	prevVal = Number(document.getElementById('result').value);
	document.getElementById('result').value = '';
	operation = "divide";
}

function calc() {
	var val = 0;
	switch (operation) {
		case "plus":
			val = Number(document.getElementById('result').value);
			document.getElementById("result").value = prevVal + val;
			prevVal = 0; val = 0; operation = '';
			break;

		case "minus":
			val = Number(document.getElementById('result').value);
			document.getElementById("result").value = prevVal - val;
			prevVal = 0; val = 0; operation = '';
			break;
		
		case "times":
			val = Number(document.getElementById('result').value);
			document.getElementById("result").value = prevVal * val;
			prevVal = 0; val = 0; operation = '';
			break;
		case "divide":
			val = Number(document.getElementById('result').value);
			document.getElementById("result").value = prevVal * val;
			prevVal = 0; val = 0; operation = '';
			break;
			
		default:
			document.getElementById('result').value = '';
			prevVal = 0; val = 0; operation = '';
			break;
	}
}
