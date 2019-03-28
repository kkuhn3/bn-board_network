var DRAW = [];
var SELECTED = [];
var SELECTEDIND = [];
var DECK = [];

function CustomPick(canvas){
	this.canvas = canvas;
	this.handSize = 5;
	this.drawSize = 5;
	var canvas = this.canvas;

	this.initCustomPick = function(){
		//to do: import a decklist
		DECK = TEMPDECKLIST;
		for(var i = 0; i < this.drawSize; i++){
			DRAW[i] = null;
		}
		this.openCustom();
		timer.currentturn = 0;
	}
	this.openCustom = function(){
		movementEnabled = false;
		this.drawFromDeck();
		document.getElementById("pick_canvas").style.display='block';
		document.getElementById("custom_canvas").style.display='none';
		if(playerSelected){
			document.getElementById("confirm").style.display='block';
		}
		if(player.name === playerOne.name){
			document.getElementById("p1buster").style.display='none';
			document.getElementById("p1card").style.display='none';
		}
		else{
			document.getElementById("p2buster").style.display='none';
			document.getElementById("p2card").style.display='none';
		}
		this.drawHand();
	}

	this.setDeck = function(newDeck){
		for(var i = 0; i < this.drawSize; i++){
			DRAW[i] = null;
		}
		DECK = newDeck;
		SELECTED = [];
		SELECTEDIND = [];
		this.openCustom();
	}

	this.drawFromDeck = function(){
		for(var i = 0; i < 5; i++){
			if(DRAW[i] === null){
				this.ind = Math.floor(Math.random() * DECK.length)
				DRAW[i] = DECK[this.ind];
				DECK.splice(this.ind, 1);
			}
		}
	}

	this.drawHand = function(){
		var ctx = canvas.getContext('2d');
		ctx.fillStyle="#000000";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		for(var i=0;i<this.drawSize;i++){
			this.drawCard(i);
		}
	}

	this.drawCard = function(x){
		var cwidth = canvas.width;
		var cheight = canvas.height;
		var cellWidth = cwidth/this.drawSize;
		var left = x*cellWidth;
		var ctx = canvas.getContext('2d');
		ctx.drawImage(card,left,0,cellWidth,cheight)
		
		ctx.fillStyle="#000000";
		ctx.font = "11px Arial";
		ctx.textAlign = "center";
		ctx.fillRect(left+7, 2, cellWidth-14, cheight/2 + 2)
		if(!DRAW[x]){
			ctx.fillText("No Card", left+cellWidth/2, cheight-30);
			ctx.drawImage(nodata, left+8, 3, cellWidth-16, cheight/2);
		}
		else{
			this.defender = playerOne;
			if(player.name === "one"){
				this.defender = playerTwo;
			}
			
			DRAW[x].hithuh(player, this.defender);
			
			if(!this.matchesCode(SELECTED, DRAW[x])){
				ctx.fillStyle="rgba(225,0,0,0.5)";
				ctx.fillRect(left+2,0,cellWidth-4,cheight);
			}
			else if(SELECTEDIND.indexOf(x) !== -1){
				ctx.fillStyle="rgba(0,225,0,0.5)";
				ctx.fillRect(left+2,0,cellWidth-4,cheight);
			}
			ctx.fillStyle="#000000";
			if(DRAW[x].code.length === 26){
				ctx.fillText("*", left+cellWidth/2, cheight-40);
			}
			else{
				ctx.fillText(DRAW[x].code, left+cellWidth/2, cheight-40);
			}
			
			ctx.fillText(DRAW[x].name, left+cellWidth/2, cheight-30);
			ctx.fillText(cards.damageText(DRAW[x]), left+cellWidth/2, cheight-20);

			if(DRAW[x].image && DRAW[x].image !== false){
				ctx.drawImage(DRAW[x].image, left+8, 3, cellWidth-16, cheight/2);
			}
		}
	}
	
	this.confirmButton = function(){
		document.getElementById("confirm").disabled = true;
		document.getElementById("sel").style.display='none';
		$.post("save.php",{id:"confirm"+player.name, state: JSON.stringify(true)});
		this.getConfirm();
	}

	this.confirm = function(){
		movementEnabled = true;
		HAND = this.buildHand(SELECTED);
		for(var i=0;i<SELECTEDIND.length;i++){
			DRAW[SELECTEDIND[i]] = null;
		}
		SELECTEDIND = [];
		SELECTED = [];
		document.getElementById("pick_canvas").style.display='none';
		document.getElementById("custom_canvas").style.display='block';
		document.getElementById("confirm").style.display='none';
		if(player.name === "one"){
			document.getElementById("p1buster").style.display='block';
			document.getElementById("p1card").style.display='block';
		}
		else {
			document.getElementById("p2buster").style.display='block';
			document.getElementById("p2card").style.display='block';
		}
	}
	
	this.buildHand = function(selectedList){
		for(var i = 0; i < selectedList.length-2; i++){
			for(var j = 0; j < BN6PAS.length; j++){
				if(selectedList[i] && BN6PAS[j].cardList[0] === selectedList[i].id){
					if(selectedList[i+1] && BN6PAS[j].cardList[1] === selectedList[i+1].id){
						if(selectedList[i+2] && BN6PAS[j].cardList[2] === selectedList[i+2].id){
							if(BN6PAS[j].cardList.length === 4){
								if(selectedList[i+3] && BN6PAS[j].cardList[3] === selectedList[i+3].id){
									selectedList.splice(i+1, 3);
									selectedList[i] = BN6PAS[j];
								}
							}
							else{
								selectedList.splice(i+1, 2);
								selectedList[i] = BN6PAS[j];
							}
						}
					}
				}
			}
		}
		
		for(var i = 1; i < selectedList.length; i++){
			if(selectedList[i-1].damage > 0){
				if(selectedList[i].addStun){
					selectedList[i-1].stunAdded = true;
					selectedList.splice(i, 1);
					i--;
				}
				else if(selectedList[i].addUninstall){
					selectedList[i-1].uninstallAdded = true;
					selectedList.splice(i, 1);
					i--;
				}
				else if(selectedList[i].addboostDamage){
					selectedList[i-1].boostDamage = selectedList[i-1].boostDamage + selectedList[i].addboostDamage;
					selectedList.splice(i, 1);
					i--;
				}
				else if(selectedList[i].addNaviboostDamage && selectedList[i-1].rank === "Mega"){
					selectedList[i-1].boostDamage = selectedList[i-1].boostDamage + selectedList[i].addNaviboostDamage;
					selectedList.splice(i, 1);
					i--;
				}
			}
		}
		return selectedList;
	}
	
	this.confirmTimeout = 0;
	this.getConfirm = function(){
		this.otherPlayer = "one";
		if(player.name === "one"){
			this.otherPlayer = "two";
		}
		clearTimeout(this.confirmTimeout);
		$.post("get.php",{id:"confirm"+this.otherPlayer},function(data){
			try{
				var d = JSON.parse(data);
				if(d){
					this.confirm();
					this.otherPlayer = "one";
					if(player.name === "one"){
						this.otherPlayer = "two";
					}
					$.post("save.php",{id:"confirm"+this.otherPlayer, state: JSON.stringify(false)});
					custom.drawHand();
					timer.draw();
					return true;
				}
			}catch(e){}
			this.confirmTimeout = setTimeout(this.getConfirm(), 1000);
		}.bind(this));
	}.bind(this);

	this.drawRange = function(e){
		this.mouseCellX = Math.floor(this.drawSize * e.offsetX/e.target.width);
		if(DRAW[this.mouseCellX]){
			board.showRange(player, DRAW[this.mouseCellX]);
		}
	}

	this.mouseDown = function(e){
		this.alreadyInd = SELECTEDIND.indexOf(this.mouseCellX);
		if(this.alreadyInd !== -1){
			SELECTED.splice(this.alreadyInd, 1);
			SELECTEDIND.splice(this.alreadyInd, 1);
		}
		else{
			if(this.matchesCode(SELECTED, DRAW[this.mouseCellX])){
				SELECTED.push(DRAW[this.mouseCellX]);
				SELECTEDIND.push(this.mouseCellX);
			}
		}
	}.bind(this);

	this.mouseMove = function(e){
		board.draw();
		this.drawHand();
		this.drawRange(e);
	}.bind(this);

	this.matchesCode = function(selectedArr, cardtoAdd){
		if(cardtoAdd){
			selectedCodeArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
			for(var i = 0; i < selectedArr.length; i++){
				if(selectedCodeArr.length === 0){
					selectedCodeArr = selectedArr[0].code;
				}
				else{
					selectedCodeArr = selectedCodeArr.filter(value => -1 !== selectedArr[i].code.indexOf(value));
				}
			}
			for(var j = 0; j < cardtoAdd.code.length; j++){
				if(selectedCodeArr.indexOf(cardtoAdd.code[j]) !== -1){
					return true;
				}
			}
		}
		return false;
	}

	this.mouseUp = function(e){
		board.draw();
		this.drawHand();
		this.drawRange(e);
	}.bind(this);

	this.mouseOut = function(e){
		board.draw();
		this.drawHand();
	}.bind(this);
}
