
function Timer(turncount, completeBar, currentBar, upnextBar){
	this.currentturn = -1;
	this.totalTurns = 0;
	this.turncount = turncount;

	this.initTimer = function(){
		this.currentturn = this.turncount;
	}

	this.draw = function(){
		this.completeTurns = (this.currentturn) * 100.0 / this.turncount;
		if(this.completeTurns === 100){
			completeBar.innerHTML = "Custom";
		}
		else{
			completeBar.innerHTML = "";
		}
		completeBar.style.width = "" + this.completeTurns + "%";
		if(this.currentturn < this.turncount){
			currentBar.style.width="" + (100.0 / this.turncount) + "%";
			currentBar.innerHTML = "" + (this.currentturn + 1);
		}
		this.upnextTurns = (this.turncount - this.currentturn - 1) * 100.0 / this.turncount;
		upnextBar.style.width = "" + this.upnextTurns + "%";
	}
	
	this.nextTurnConfirmed = function(){
		document.getElementById("nextturn").disabled = true;
		document.getElementById("useBuster").disabled = true;
		document.getElementById("useCard").disabled = true;
		document.getElementById("special").disabled = true;
		movementEnabled = false;
		
		sendTurn();
	}

	this.nextTurn = function(){
		this.currentturn++;
		this.totalTurns++;
		if(this.currentturn > this.turncount - 1){
			this.currentturn = this.turncount;
			HAND = [];
			customPick.openCustom();
			barriers.resetBarriers(playerOne);
			barriers.resetBarriers(playerTwo);
			document.getElementById("confirm").disabled = false;
		}
		else {
			document.getElementById("nextturn").style.display='none';
			document.getElementById("nextturn").disabled = false;
			document.getElementById("useBuster").disabled = false;
			document.getElementById("useCard").disabled = false;
			document.getElementById("special").disabled = false;
			movementEnabled = true;
		}
	}
}
