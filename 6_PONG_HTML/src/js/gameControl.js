function gameControl(){
	this.ball = $('#ball');
	this.ballx = 0
	this.bally = 0
	this.ballVelX = 0
	this.ballVelY = 0
	this.game
	this.winner = ""

	this.ini = function(){
		this.ballx = 0
		this.bally = 0
		this.ballVelX = 5
		this.ballVelY = 10
	}

	this.startGame = function(){
		this.game = setInterval(function(){
			if(ball.offset().left<=p1.offset().left+10){
				if(ball.offset().top>=p1.offset().top && ball.offset().top+20<=p1.offset().top+100){
					ballVelX*= -1
				}else{
					console.log("player 1 loses")
					setScore('p1')
				}
			}

			if(ball.offset().left>=p2.offset().left-10){
				if(ball.offset().top>=p2.offset().top && ball.offset().top+20<=p2.offset().top+100){
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
}

module.exports = gameControl;