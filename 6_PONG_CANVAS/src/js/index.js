var $ = require('jquery');
var Player = require('./Player')
var Ball = require('./Ball')

var canvas = $('#gameTable')[0]
var ctx = canvas.getContext("2d")

var player1 = new Player(20,canvas.height/2,87,83,canvas);
var player2 = new Player(canvas.width-40, canvas.height/2,38,40,canvas);

var ball = new Ball(canvas.width/2, canvas.height/2, canvas);

var game;
var isPaused = true;

ini();
seTcontrols();
startGame();		

function ini(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	player1.restart();
	player2.restart();
	ball.restart();
	isPaused=true;
	setTimeout(function(){
		isPaused = false;
	}, 1000)
}

function startGame(){
	game = setInterval(function(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawLine();
		player1.render();
		player2.render();

		ball.render();
		ball.checkColition(player1.posX, player1.posY, player2.posX, player2.posY);

		if(isPaused)
			return
		if(ball.winner==='none'){
			ball.move();
		}else{
			setScore('p'+ball.winner);
		}	
				
	},20)
}

function seTcontrols(){
	window.onkeydown = function(event) {
		var k = event.keyCode
		player1.move(k);
		player2.move(k);
	}
}

function setScore(pp){
	var score= $('.'+pp+'.points p')[0]
	score.innerHTML = (parseInt(score.innerHTML)+1)+""
	ini();
}

function drawLine(){
	ctx.beginPath();
	ctx.setLineDash([10]);
	ctx.strokeStyle="#ffffff";
	ctx.lineWidth=5;
	ctx.moveTo(canvas.width/2, 50);
	ctx.lineTo(canvas.width/2, canvas.height-50);
	ctx.stroke();
}

