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
			this.timercells[i] = TURNCELL.COMPLETE;
		}
		this.currentturn = turncount;
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
		for(var i=0;i<turncount;i++){
			if(i < this.currentturn){
				this.timercells[i] = TURNCELL.COMPLETE;
			}
			else if(i > this.currentturn){
				this.timercells[i] = TURNCELL.NOTSTARTED;
			}
		}
		if(this.currentturn < this.turncount){
			this.timercells[this.currentturn] = TURNCELL.INPROGRESS;
		}
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
	
	this.nextTurnConfirmed = function(){
		document.getElementById("nextturn").disabled = true;
		document.getElementById("p1buster").disabled = true;
		document.getElementById("p2buster").disabled = true;
		document.getElementById("p1card").disabled = true;
		document.getElementById("p2card").disabled = true;
		movementEnabled = false;
		$.post("save.php",{id:"player"+player.name, state: JSON.stringify(player)});
		$.post("save.php",{id:"confirm"+player.name, state: JSON.stringify(true)});
		this.getConfirmTurn();
	}

	this.nextTurn = function(){
		this.currentturn++;
		if(this.currentturn > turncount - 1){
			this.currentturn = turncount;
			HAND = [];
			customPick.openCustom();
			barriers.resetBubbleBarrier(playerOne);
			barriers.resetBubbleBarrier(playerTwo);
			document.getElementById("confirm").disabled = false;
		}
		document.getElementById("nextturn").style.display='none';
		document.getElementById("nextturn").disabled = false;
		document.getElementById("p1buster").disabled = false;
		document.getElementById("p2buster").disabled = false;
		document.getElementById("p1card").disabled = false;
		document.getElementById("p2card").disabled = false;
		custom.nextTurn();
		custom.drawHand();
		movementEnabled = true;
	}
	
	this.confirmNextTurnTimeout = 0;
	this.getConfirmTurn = function(){
		clearTimeout(this.confirmNextTurnTimeout);
		this.otherPlayer = "one";
		if(player.name === "one"){
			this.otherPlayer = "two";
		}
		$.post("get.php",{id:"confirm"+this.otherPlayer},function(data){
			try{
				var d = JSON.parse(data);
				if(d){
					$.post("get.php",{id:"player"+this.otherPlayer},function(data){
						var playerData = JSON.parse(data);
						if(player.name === "one"){
							playerTwo.hp = playerData.hp;
							cells[playerTwo.x][playerTwo.y].player = null;
							playerTwo.x = playerData.x;
							playerTwo.y = playerData.y;
							cells[playerTwo.x][playerTwo.y].player = playerTwo;
							playerTwo.action = playerData.action;
							if(playerTwo.action === ACTIONS.CARD || playerTwo.action === ACTIONS.SPECIAL){
								playerTwo.card = cards.getCardById(playerData.card.id);
								playerTwo.card.boostDamage = playerData.card.boostDamage;
								playerTwo.card.stunAdded = playerData.card.stunAdded;
							}
						}
						else{
							playerOne.hp = playerData.hp;
							cells[playerOne.x][playerOne.y].player = null;
							playerOne.x = playerData.x;
							playerOne.y = playerData.y;
							cells[playerOne.x][playerOne.y].player = playerOne;
							playerOne.action = playerData.action;
							if(playerOne.action === ACTIONS.CARD || playerOne.action === ACTIONS.SPECIAL){
								playerOne.card = cards.getCardById(playerData.card.id);
								playerOne.card.boostDamage = playerData.card.boostDamage;
								playerOne.card.stunAdded = playerData.card.stunAdded;
							}	
						}
						this.nextTurn();
						board.resolveTurn();
						this.draw();
					}.bind(this));
					return true;
				}
			}catch(e){
				console.log("some exception was thrown");
			}
			this.confirmNextTurnTimeout = setTimeout(this.getConfirmTurn(), 1000);
		}.bind(this));
	}.bind(this);
}
