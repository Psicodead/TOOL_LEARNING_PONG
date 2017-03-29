
function Player(iniX, iniY, keyUp, keyDown, canvas){
	this.posX = iniX
	this.posY = iniY
	this.cv= canvas;
	this.ctx = this.cv.getContext("2d")
	this.speed = 50;

	this.restart = function(){
		this.posY = this.cv.height/2;
		this.render();
	}

	this.render= function(){
		this.ctx.beginPath();
		this.ctx.fillStyle = "#FFFFFF";
		this.ctx.fillRect(this.posX,this.posY,20,100);
	}

	this.move = function(key){
		if(key== keyUp){
			if(this.posY>0)
				this.posY-=this.speed;
		}else if(key == keyDown){
			if(this.posY<this.cv.height-100)
				this.posY+=this.speed;
		}
	}
}

module.exports = Player;


