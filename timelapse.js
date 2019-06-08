//Evolutionary Pattern
var canvas, context, fps;
var color = 'red';
var pattern = [];
var pattern2 = [];
var color = [];
var color2 = [];
var limit = 0;
var fitness = 0;
var fitness2 = 0;
var improvement = false;
var improvementAll = false;
var genNext = false;
var breedfit = 0;
window.onload = function() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	fps = 2;
	genetAlgorP1();
	genetAlgorP2();
	setInterval(function() {
		update();
		draw();
	}, 1000/fps);
}
function draw() {
	colorRect(0, 0, canvas.width, canvas.height, 'white')
	for (var i = 0; i < 5; i++) {
		colorRect(i * 80, canvas.height/2, 80, 200, color[i]);
	}
	for (var i = 0; i < 5; i++) {
		colorRect(i * 80, 0, 80, 200, color2[i]);
	}
}
function update() {
	//This is the interpreter
	for (var i = 0; i < 1; i++) {
		var index1 = pattern[i];
		var index2 = pattern[i+1];
		var index3 = pattern[i+2];
		var index4 = pattern[i+3];
		var index5 = pattern[i+4];
	}
	for (var i = 0; i < 1; i++) {
		var index6 = pattern2[i];
		var index7 = pattern2[i+1];
		var index8 = pattern2[i+2];
		var index9 = pattern2[i+3];
		var index0 = pattern2[i+4];
	}
	index1 = checkIndex(index1);
	index2 = checkIndex(index2);
	index3 = checkIndex(index3);
	index4 = checkIndex(index4);
	index5 = checkIndex(index5);
	index6 = checkIndex(index6);
	index7 = checkIndex(index7);
	index8 = checkIndex(index8);
	index9 = checkIndex(index9);
	index0 = checkIndex(index0);
	color.push(index1)
	color.push(index2)
	color.push(index3)
	color.push(index4)
	color.push(index5)
	color2.push(index6)
	color2.push(index7)
	color2.push(index8)
	color2.push(index9)
	color2.push(index0)
}
function genetAlgorP1() {
	var rand = Math.random();
	var rand2 = Math.random();
	if (limit != 6) {
		if (rand <= 0.33) {
			pattern.push(0);
		} else if (rand <= 0.66 && rand > 0.33) {
			pattern.push(1);
		} else {
			pattern.push(2);
		}
		if (rand2 <= 0.33) {
			pattern2.push(0);
		} else if (rand2 <= 0.66 && rand2 > 0.33) {
			pattern2.push(1);
		} else {
			pattern2.push(2);
		}
		limit++;
		genetAlgorP1()
	}
}
function genetAlgorP2() {
	fitness = 0;
	if (improvement) {
		if (pattern[1] == pattern[3]) { 
			pattern[0] = pattern[4]
			pattern2[0] = pattern2[4]
		} else {
			pattern[1] = pattern[3]
			pattern2[1] = pattern2[3]
		}
	}
	if (pattern[0] == pattern[4]) {
		fitness += 5;
	}
	if (pattern[1] == pattern[3]) {
		fitness += 5;
	}
	if (pattern2[0] == pattern2[4]) {
		fitness2 += 5;
	}
	if (pattern2[1] == pattern2[3]) {
		fitness2 += 5;
	}
	genetAlgorP3()
}
function genetAlgorP3() {
		breedfit = fitness + fitness2
		if (breedfit > 10) {
			improvement = true;
		} else if (breedfit == 20) {
			improvementAll = true;
		}
	if (!improvement) {
		genetAlgorP2()
	}
	console.log(breedfit, fitness, fitness2)
}
function rect(x, y, w, h) {
	context.rect(x, y, w, h);
	context.stroke();
}
function colorRect(x, y, w, h, c) {
	context.fillStyle = c;
	context.fillRect(x, y, w, h);
}
function circle(x, y, r, c) {
  context.fillStyle = c;
  context.beginPath();
  context.arc(x, y, r, 0, 2*Math.PI);
  context.stroke();
  context.fill();
}
function line(sx, sy, dx, dy, c) {
  context.moveTo(sx, sy);
  context.lineTo(dx, dy);
  context.strokeStyle = c;
  context.stroke();
}
function text(txt, fnt, x, y, c) {
  context.fillStyle = c;
  context.font = fnt;
  context.fillText(txt, x, y);
}
function checkIndex(index) {
	if (index == 1) {
		return ('red');
	} else if (index == 2) {
		return ('blue');
	} else if (index == 0) {
		return ('green');
	}
}