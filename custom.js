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
		ctx.fillStyle="#000000";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		for(var i=0;i<this.handSize;i++){
			this.drawCard(i);
		}
		if(!HAND[0] || customPick.inCustom){
			document.getElementById("useCard").style.display='none';
		}
		else{
			document.getElementById("useCard").style.display='block';
			document.getElementById("useCard").innerHTML=HAND[0].name;
			document.getElementById("useCard").value=HAND[0].name;
		}
		document.getElementById("useBuster").innerHTML=player.busterType.name;
	}

	this.drawCard = function(x){	
		ctx.fillStyle="#000000";
		ctx.font = "11px Arial";
		ctx.textAlign = "center";

		if(x === 0){
			ctx.drawImage(card,0,0,cwidth,firstCardHeight);
			ctx.fillRect(7, 2, cwidth-14, firstCardHeight/2 + 2)
			if(!HAND[x]){
				ctx.fillText("No Card", cwidth/2, firstCardHeight-30);
				ctx.drawImage(nodata, 8, 3, cwidth-16, firstCardHeight/2);
			}
			else{
				this.defender = playerOne;
				if(player.name === "one"){
					this.defender = playerTwo;
				}
				HAND[x].hithuh(player, this.defender);
				if(HAND[x].code.length === 26){
					ctx.fillText("*", cwidth/2, firstCardHeight-40);
				}
				else{
					ctx.fillText(HAND[x].code, cwidth/2, firstCardHeight-40);
				}
				ctx.fillText(HAND[x].name, cwidth/2, firstCardHeight-30);
				ctx.fillText(cards.damageText(HAND[x]), cwidth/2, firstCardHeight-20);

				if(HAND[x].image){
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
				ctx.drawImage(nodata, 6, down+6, cwidth-12, restCardHeight-12);
			}
			else{
				ctx.fillStyle="#000000";
				ctx.fillRect(0 ,down, cwidth, restCardHeight);
				ctx.fillStyle="#FFFFFF";
				ctx.fillRect(2 ,down+2, cwidth-4, restCardHeight - 4);
				ctx.fillStyle="#000000";
				ctx.fillRect(4 ,down+4, cwidth-8, restCardHeight - 8);
				if(HAND[x].image){
					ctx.drawImage(HAND[x].image, 6, down+6, cwidth-12, restCardHeight-12);
				}
			}
		}
	}
	
	this.buster = function(){
		document.getElementById("nextturn").style.display='block';
		if(player.action === ACTIONS.CARD){
			player.card = null;
		}
		player.action = ACTIONS.BUSTER;
	}

	this.card = function(){
		document.getElementById("nextturn").style.display='block';
		if(HAND.length === 0){
			this.buster();
		}
		else{
			player.action = ACTIONS.CARD;
			player.card = HAND[0];
		}
	}
	
	this.nextTurn = function(){
		if(player.stunned < 1 && player.frozen < 1 && player.bubbled < 1){
			if(player.action === ACTIONS.CARD){
				HAND.shift();
			}
		}
	}
	
	this.unUseCard = function(aCard){
		HAND.unshift(aCard);
	}

	this.useCardEnter = function(){
		board.draw();
		if(HAND[0]){
			board.showRange(player, HAND[0]);
		}
	}

	this.useCardExit = function(){
		board.draw();
	}

	this.useBusterEnter = function(){
		board.draw();
		board.showRange(player, player.busterType);
	}

	this.useBusterExit = function(){
		board.draw();
	}

	this.mouseDown = function(e){}.bind(this);

	this.mouseMove = function(e){
		board.draw();
		if(e.offsetY < firstCardHeight){
			this.mouseCellY = 0;
		}
		else{
			this.mouseCellY = Math.floor((this.handSize - 1 ) * (e.offsetY - firstCardHeight)/(e.target.height - firstCardHeight)) + 1;
		}
		if(HAND[this.mouseCellY]){
			board.showRange(player, HAND[this.mouseCellY]);
		}
		this.drawHand();
	}.bind(this);

	this.mouseOut = function(e){
		board.draw();
	}.bind(this);

	this.mouseUp = function(e){}.bind(this);
}
