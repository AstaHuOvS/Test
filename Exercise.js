function insertText() {
	document.getElementById("newContent").innerHTML = "Some new text: <br> HELLO <br>";
}
function calculate() {
	var t = widthBox.value;
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lengthBox").value;
	var h = document.getElementById("heightBox").value;
	w = parseFloat(w);
	l = parseFloat(l);
	h = parseFloat(h);
	var result = w*l*h;
	document.getElementById("result").innerHTML = result;
}	