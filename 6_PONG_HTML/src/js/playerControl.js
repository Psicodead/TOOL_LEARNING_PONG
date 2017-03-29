var $ = require('jquery');
var p1 = $('#player1')
var p2= $('#player2')
var posP1 = 0
var posP2 = 0

function restart(){
	posP1 = 0
	posP2 = 0
	p1.css('transform','translateY('+posP1+'px)');
	p2.css('transform','translateY('+posP2+'px)');
}

function controls(){
	window.onkeydown = function(event) {
		console.log(event.keyCode)
		switch(event.keyCode){
			//player 1 - W/S
			case 87:
			if(posP1>-500)
				posP1-=50;
			break;
			case 83:
			if(posP1<400)
				posP1+=50;
			break;

			//player 2 - arrows
			case 38:
			if(posP2>-500)
				posP2-=50;
			break;
			case 40:
			if(posP2<400)
				posP2+=50;
			break;
		}
		p1.css('transform','translateY('+posP1+'px)');
		p2.css('transform','translateY('+posP2+'px)');
		console.log('pos '+ posP2)
	}
}


//module.exports = players;
module.exports = {
  p1: p1,
  p2: p2,
  posP1: posP1,
  posP2: posP2,
  restart: restart,
  controls: controls
};

