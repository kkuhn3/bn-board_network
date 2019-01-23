var HAND = [];
var DRAW = [];
var SELECTED = []
var DECK = [];
var CURRENTCARD = -1;

function Custom(canvas){
	this.canvas = canvas;
	this.handSize = 5;
	this.width = 5;

	this.initCustom = function(){
		//to do: import a decklist
		DECK = CARDLIST;
		for(var i = 0; i < 5; i++){
			DRAW[i] = null;
			SELECTED[i] = false;
		}
		this.drawFromDeck();
	}

	this.drawFromDeck = function(){
		for(var i = 0; i < 5; i++){
			if(DRAW[i] === null){
				//to do: remove card from deck
				DRAW[i] = DECK[Math.floor(Math.random() * DECK.length)];
			}
			HAND[i] = DECK[Math.floor(Math.random() * DECK.length)];
		}
	}

	this.drawHand = function(){
		var canvas = this.canvas;
		var ctx = canvas.getContext('2d');
		ctx.fillStyle="#000000";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		for(var i=0;i<this.handSize;i++){
			this.drawCard(i);
		}
	}

	this.drawCard = function(x){
		var canvas = this.canvas;
		var cwidth = canvas.width;
		var cheight = canvas.height;
		var cellWidth = cwidth/this.handSize;
		var left = x*cellWidth;
		var ctx = canvas.getContext('2d');
		ctx.fillStyle="#FFFFFF";
		if(x === 0){
			ctx.fillStyle="#00FF00";
		}
		ctx.fillRect(left+2,2,cellWidth-4,cheight-4);
		ctx.fillStyle="#000000";
		ctx.font = "11px Arial";
		ctx.textAlign = "center";
		if(!HAND[x]){
			ctx.fillText("No Card", left+cellWidth/2, cheight-6);
		}
		else{
			ctx.fillText(HAND[x].name, left+cellWidth/2, cheight-6);
		}
	}

	this.mouseDown = function(e){
		this.mouseCellX = Math.floor(this.width * e.offsetX/e.target.width);
		board.showRange(player, HAND[this.mouseCellX]);
	}.bind(this);

	this.mouseUp = function(e){
		board.draw();
	}.bind(this);
}
