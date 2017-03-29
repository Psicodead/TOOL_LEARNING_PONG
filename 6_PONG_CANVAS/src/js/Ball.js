function Ball(iniX, iniY, canvas){
	this.cv= canvas;
	this.ctx = this.cv.getContext("2d")
	this.posX = iniX
	this.posY = iniY
	this.speedX = 5;
	this.speedY = 5;
	this.winner = "none";

	this.render= function(){
		this.ctx.beginPath();
		this.ctx.fillStyle = "#FFFFFF";
		this.ctx.fillRect(this.posX,this.posY,20,20);
	}

	this.move = function(){
		this.posX+= this.speedX;
		this.posY+= this.speedY;
	}

	this.restart = function(){
		this.posX = this.cv.width/2;
		this.posY = this.cv.height/2;
		this.speedX = 5;
		this.speedY = 5;
		this.winner = "none";
		this.render();
		console.log("hi")
	}

	this.checkColition = function(nx1, ny1, nx2, ny2){
		if(this.posY<=0 || this.posY>=this.cv.height-20){
			this.speedY*= -1
		}
		if(this.posX<=nx1+20){
			if(this.posY>=ny1 && this.posY+20<=ny1+100 ){
				this.speedX*=-1;
			}else{
				this.winner = "1";
			}
		}
		if(this.posX>=nx2-20){
			if(this.posY>=ny2 && this.posY+20<=ny2+100 ){
				this.speedX*=-1;
			}else{
				this.winner = "2";
			}
		}
	}
}

module.exports = Ball;