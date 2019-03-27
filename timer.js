
function Timer(turncount, completeBar, currentBar, upnextBar){
	this.currentturn = -1;
	this.totalTurns = 0;

	this.initTimer = function(){
		this.currentturn = turncount;
	}

	this.draw = function(){
		this.completeTurns = (this.currentturn) * 100.0 / turncount;
		if(this.completeTurns === 100){
			completeBar.innerHTML = "Custom";
		}
		else{
			completeBar.innerHTML = "";
		}
		completeBar.style.width = "" + this.completeTurns + "%";
		if(this.currentturn < turncount){
			currentBar.style.width="" + (100.0 / turncount) + "%";
			currentBar.innerHTML = "" + (this.currentturn + 1);
		}
		this.upnextTurns = (turncount - this.currentturn - 1) * 100.0 / turncount;
		upnextBar.style.width = "" + this.upnextTurns + "%";
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
		this.totalTurns++;
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
							playerTwo.lastX = playerTwo.x;
							playerTwo.lastY = playerTwo.y;
							playerTwo.x = playerData.x;
							playerTwo.y = playerData.y;
							cells[playerTwo.x][playerTwo.y].player = playerTwo;
							playerTwo.action = playerData.action;
							if(playerTwo.action === ACTIONS.CARD || playerTwo.action === ACTIONS.SPECIAL){
								playerTwo.card = cards.getCardById(playerData.card.id);
								playerTwo.card.boostDamage = playerData.card.boostDamage;
								playerTwo.card.stunAdded = playerData.card.stunAdded;
								playerTwo.card.uninstallAdded = playerData.card.uninstallAdded;
							}
						}
						else{
							playerOne.hp = playerData.hp;
							cells[playerOne.x][playerOne.y].player = null;
							playerOne.lastX = playerOne.x;
							playerOne.lastY = playerOne.y;
							playerOne.x = playerData.x;
							playerOne.y = playerData.y;
							cells[playerOne.x][playerOne.y].player = playerOne;
							playerOne.action = playerData.action;
							if(playerOne.action === ACTIONS.CARD || playerOne.action === ACTIONS.SPECIAL){
								playerOne.card = cards.getCardById(playerData.card.id);
								playerOne.card.boostDamage = playerData.card.boostDamage;
								playerOne.card.stunAdded = playerData.card.stunAdded;
								playerOne.card.uninstallAdded = playerData.card.uninstallAdded;
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
