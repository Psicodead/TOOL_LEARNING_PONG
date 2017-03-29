var player = require('./playerControl');
var $ = require('jquery');
var ball = $('#ball');
var ballx, bally, ballVelX, ballVelY;
var scorep1, scorep2;
var game;

ini();
player.controls();


function ini(){
	player.restart()
	ballx = 0
	bally = 0
	ballVelX = 5
	ballVelY = 10
	
	setTimeout(function(){
		startGame();		
	},2000)

}

function startGame(){
	game = setInterval(function(){
		var p1pos= player.p1.offset()
		var p2pos= player.p2.offset()
		if(ball.offset().left<=p1pos.left+10){
			if(ball.offset().top>=p1pos.top && ball.offset().top+20<=p1pos.top+100){
				ballVelX*= -1
			}else{
				console.log("player 1 loses")
				setScore('p1')
			}
		}

		if(ball.offset().left>=p2pos.left-10){
			if(ball.offset().top>=p2pos.top && ball.offset().top+20<=p2pos.top+100){
				ballVelX*= -1
			}else{
				console.log("player 2 loses")
				setScore('p2')
			}
		}
		
		ballx+= ballVelX;
		bally+= ballVelY;
		if(bally>460 || bally<-500){
			ballVelY*= -1
		}
		ball.css('transform','translate( '+ballx+'px, '+bally+'px)');
		
	}, 20)
}

function setScore(pp){
	var score= $('.'+pp+'.points p')[0]
	score.innerHTML = (parseInt(score.innerHTML)+1)+""
	clearInterval(game);
	ini();
	//pause and reset
}