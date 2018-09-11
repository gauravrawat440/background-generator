var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var backg = document.getElementById("background_color");
function setBackground(){
	backg.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";
	css.textContent = backg.style.background + ";";
}
col1.addEventListener("input", setBackground);

col2.addEventListener("input", setBackground);