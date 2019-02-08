var HAND = [];

function Custom(canvas){
	this.handSize = 5;
	var canvas = canvas;
	var ctx = canvas.getContext('2d');
	var cwidth = canvas.width;
	var cheight = canvas.height;
	var firstCardHeight = 120;
	var restCardHeight = (canvas.height - firstCardHeight) / (this.handSize - 1);

	this.drawHand = function(){
		$.post("save.php",{id:"confirm"+player.name, state: JSON.stringify(false)});	
		ctx.fillStyle="#000000";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		for(var i=0;i<this.handSize;i++){
			this.drawCard(i);
		}
	}

	this.drawCard = function(x){	
		ctx.fillStyle="#000000";
		ctx.font = "11px Arial";
		ctx.textAlign = "center";

		if(x === 0){
			ctx.drawImage(card,0,0,cwidth,firstCardHeight);
			if(!HAND[x]){
				ctx.fillText("No Card", cwidth/2, firstCardHeight-10);
			}
			else{
				if(HAND[x].code.length === 26){
					ctx.fillText("*", cwidth/2, firstCardHeight-40);
				}
				else{
					ctx.fillText(HAND[x].code, cwidth/2, firstCardHeight-40);
				}
				ctx.fillText(HAND[x].name, cwidth/2, firstCardHeight-30);
				ctx.fillText(HAND[x].damage, cwidth/2, firstCardHeight-20);
				if(HAND[x].image){
					ctx.fillRect(7, 2, cwidth-14, firstCardHeight/2 + 2)
					ctx.drawImage(HAND[x].image, 8, 3, cwidth-16, firstCardHeight/2);
				}
			}
		}
		else{
			var down = (x-1) * restCardHeight + firstCardHeight;
			if(!HAND[x]){
				ctx.fillStyle="#000000";
				ctx.fillRect(0 ,down, cwidth, restCardHeight);
				ctx.fillStyle="#FFFFFF";
				ctx.fillRect(2 ,down+2, cwidth-4, restCardHeight - 4);
				ctx.fillStyle="#000000";
				ctx.fillRect(4 ,down+4, cwidth-8, restCardHeight - 8);
				ctx.fillStyle="#FFFFFF";
				ctx.font = "11px Arial";
				ctx.textAlign = "center";
				ctx.fillText("No Data", cwidth/2, down + restCardHeight - 10);
			}
			else{
				ctx.fillStyle="#000000";
				ctx.fillRect(0 ,down, cwidth, restCardHeight);
				ctx.fillStyle="#FFFFFF";
				ctx.fillRect(2 ,down+2, cwidth-4, restCardHeight - 4);
				ctx.fillStyle="#000000";
				ctx.fillRect(4 ,down+4, cwidth-8, restCardHeight - 8);
				ctx.drawImage(HAND[x].image, 6, down+6, cwidth-12, restCardHeight-12);
			}
		}
	}

	this.mouseDown = function(e){

	}.bind(this);

	this.mouseMove = function(e){
		board.draw();
		if(e.offsetY < firstCardHeight){
			this.mouseCellY = 0;
		}
		else{
			this.mouseCellY = Math.floor((this.handSize - 1 ) * (e.offsetY - firstCardHeight)/(e.target.height - firstCardHeight)) + 1;
		}
		console.log(this.mouseCellY);
		if(HAND[this.mouseCellY]){
			board.showRange(player, HAND[this.mouseCellY]);
		}
	}.bind(this);

	this.mouseOut = function(e){
		board.draw();
	}.bind(this);

	this.mouseUp = function(e){
		board.draw();
	}.bind(this);
}
