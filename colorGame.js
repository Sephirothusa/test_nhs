var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var winningColor = pickColor();

var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = winningColor;

var completeH1 = document.querySelector("h1");

var cssLogo = document.getElementById('cssLogo');

for (var i=0; i < colors.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].classList.add('hidingSquare');
	completeH1.classList.add('hidingSquare');
	
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if ( clickedColor === winningColor){
			changeColors(clickedColor);
			completeH1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
		}
	})
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
};

function generateRandomColors(num){
	var array = [];
	
	for (var i=0; i < num; i++){
		array.push(randomColor());
	}
	return array;
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	console.log(random);
	return colors[random];
};

function changeColors(color){
	for (var i=0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


cssLogo.addEventListener('click', function(){
	completeH1.style.backgroundColor = '#232323';
    colors = generateRandomColors(6);
	winningColor = pickColor();	
	colorDisplay.textContent = winningColor;
	
	for (var i=0; i < colors.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].classList.add('hidingSquare');
	completeH1.classList.add('hidingSquare');
	
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if ( clickedColor === winningColor){
			changeColors(clickedColor);
			completeH1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
		}
	})
}
})
















