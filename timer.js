TURNCELL = {
	COMPLETE: "#00FF00",
	INPROGRESS: "#FFA500",
	NOTSTARTED: "#FFFFFF",
}

function Timer(turncount,canvas){
	this.timercells=[];
	this.turncount = turncount;
	this.canvas = canvas;
	this.currentturn = -1;

	this.initTimer = function(){
		this.timercells=[];
		for(var i=0;i<this.turncount;i++){
			this.timercells[i] = TURNCELL.NOTSTARTED;
		}
		this.timercells[0] = TURNCELL.INPROGRESS;
		this.currentturn = 0;
	}

	this.drawCell = function(x){
		var canvas = this.canvas;
		var cwidth = canvas.width;
		var cheight = canvas.height;
		var cellWidth = cwidth/this.turncount;
		var left = x*cellWidth;
		var ctx = canvas.getContext('2d');
		ctx.fillStyle=this.timercells[x];
		ctx.fillRect(left+2,2,cellWidth-4,cheight-4);
	}

	this.draw = function(){
		var canvas = this.canvas;
		var ctx = canvas.getContext('2d');
		var cwidth = canvas.width;
		var cheight = canvas.height;
		ctx.fillStyle="#000000";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		for(var i=0;i<this.turncount;i++){
			this.drawCell(i);
		}
	}

	this.nextTurn = function(){
		this.currentturn++;
		if(this.currentturn > 3){
			this.currentturn = 0;
			HAND = [];
			customPick.openCustom();
		}
		for(var i=0;i<turncount;i++){
			if(i < this.currentturn){
				this.timercells[i] = TURNCELL.COMPLETE;
			}
			else if(i > this.currentturn){
				this.timercells[i] = TURNCELL.NOTSTARTED;
			}
		}
		this.timercells[this.currentturn] = TURNCELL.INPROGRESS;
		board.resolveTurn();
		this.draw();
		custom.drawHand();
	}
}
