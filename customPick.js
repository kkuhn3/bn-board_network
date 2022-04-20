var DRAW = [];
var SELECTED = [];
var SELECTEDIND = [];
var DECK = [];

function CustomPick(canvas){
	this.inCustom = true;
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
		this.addUserFolders();
		this.openCustom();
	}

	this.addUserFolders = function(){
		var keys = Object.keys(localStorage);
		for(var i = 0; i < keys.length; i++){
			if(keys[i].includes("folderNamePrefix")){
				var selectDrop = document.getElementById("sel");
				var option = document.createElement("option");
				var folderName = keys[i].substring(16);
				option.text = folderName;
				option.value = folderName;
				selectDrop.add(option, 1);

				this.newFolder = new function(){
					this.id = folderName;
					this.name = folderName;
					this.contents = [];
				};
				this.folderContents = JSON.parse(localStorage.getItem(keys[i]));
				for(var j = 0; j < this.folderContents.length; j++){
					this.aCard = cards.getCardById(this.folderContents[j].id);
					this.newFolder.contents.push(this.aCard);
				}
				FOLDERS.push(this.newFolder);
			}
		}
	}

	this.openCustom = function(){
		movementEnabled = false;
		this.drawFromDeck();
		document.getElementById("pick_canvas").style.display='block';
		if(playerSelected){
			document.getElementById("confirm").style.display='block';
		}
		document.getElementById("useBuster").style.display='none';
		document.getElementById("useCard").style.display='none';
		document.getElementById("log-container").style.display='none';
		this.inCustom = true;
		this.drawHand();
	}

	this.setDeck = function(newDeck){
		for(var i = 0; i < this.drawSize; i++){
			DRAW[i] = null;
		}
		DECK = newDeck.slice();
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
		sendDraft();
	}

	this.confirm = function(){
		movementEnabled = true;
		this.inCustom = false;
		timer.currentturn = 0;
		HAND = this.buildHand(SELECTED);
		for(var i=0;i<SELECTEDIND.length;i++){
			DRAW[SELECTEDIND[i]] = null;
		}
		player.bushidoCount = 0;
		for(var i=0;i<HAND.length;i++){
			if(HAND[i].id.includes("Bushido")){
				player.bushidoCount++;
			}
		}
		SELECTEDIND = [];
		SELECTED = [];
		document.getElementById("pick_canvas").style.display='none';
		document.getElementById("custom_canvas").style.display='block';
		document.getElementById("confirm").style.display='none';
		document.getElementById("useBuster").style.display='block';
		document.getElementById("useCard").style.display='block';
		document.getElementById("log-container").style.display='block';
	}
	
	this.buildHand = function(selectedList){
		this.selectedList = selectedList.slice();
		var ALLPAS = [].concat(BN6PAS).concat(SF3GAS);
		for(var i = 0; i < this.selectedList.length-2; i++){
			for(var j = 0; j < ALLPAS.length; j++){
				if(this.selectedList[i] && ALLPAS[j].cardList[0] === this.selectedList[i].id){
					if(this.selectedList[i+1] && ALLPAS[j].cardList[1] === this.selectedList[i+1].id){
						if(this.selectedList[i+2] && ALLPAS[j].cardList[2] === this.selectedList[i+2].id){
							if(ALLPAS[j].cardList.length === 4){
								if(this.selectedList[i+3] && ALLPAS[j].cardList[3] === this.selectedList[i+3].id){
									this.selectedList.splice(i+1, 3);
									this.selectedList[i] = ALLPAS[j];
								}
							}
							else{
								this.selectedList.splice(i+1, 2);
								this.selectedList[i] = ALLPAS[j];
							}
						}
					}
				}
			}
		}
		
		for(var i = 1; i < this.selectedList.length; i++){
			if(this.selectedList[i-1].damage > 0){
				if(this.selectedList[i].addStun){
					this.selectedList[i-1].stunAdded = true;
					this.selectedList.splice(i, 1);
					i--;
				}
				else if(this.selectedList[i].addGravity){
					this.selectedList[i-1].gravityAdded = true;
					this.selectedList.splice(i, 1);
					i--;
				}
				else if(this.selectedList[i].addUninstall){
					this.selectedList[i-1].uninstallAdded = true;
					this.selectedList.splice(i, 1);
					i--;
				}
				else if(this.selectedList[i].addboostDamage){
					this.selectedList[i-1].boostDamage = this.selectedList[i-1].boostDamage + this.selectedList[i].addboostDamage;
					this.selectedList.splice(i, 1);
					i--;
				}
				else if(this.selectedList[i].addNaviboostDamage && this.selectedList[i-1].rank === "Mega"){
					this.selectedList[i-1].boostDamage = this.selectedList[i-1].boostDamage + this.selectedList[i].addNaviboostDamage;
					this.selectedList.splice(i, 1);
					i--;
				}
				else if(this.selectedList[i].addFireboostDamage && this.selectedList[i-1].elements.indexOf(ELEMENTS.fire) > -1){
					this.selectedList[i-1].boostDamage = this.selectedList[i-1].boostDamage + this.selectedList[i].addFireboostDamage;
					this.selectedList.splice(i, 1);
					i--;
				}
				else if(this.selectedList[i].addAquaboostDamage && this.selectedList[i-1].elements.indexOf(ELEMENTS.aqua) > -1){
					this.selectedList[i-1].boostDamage = this.selectedList[i-1].boostDamage + this.selectedList[i].addAquaboostDamage;
					this.selectedList.splice(i, 1);
					i--;
				}
				else if(this.selectedList[i].addElecboostDamage && this.selectedList[i-1].elements.indexOf(ELEMENTS.elec) > -1){
					this.selectedList[i-1].boostDamage = this.selectedList[i-1].boostDamage + this.selectedList[i].addElecboostDamage;
					this.selectedList.splice(i, 1);
					i--;
				}
				else if(this.selectedList[i].addWoodboostDamage && this.selectedList[i-1].elements.indexOf(ELEMENTS.wood) > -1){
					this.selectedList[i-1].boostDamage = this.selectedList[i-1].boostDamage + this.selectedList[i].addWoodboostDamage;
					this.selectedList.splice(i, 1);
					i--;
				}
			}
		}
		return this.selectedList;
	}

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
		HAND = this.buildHand(SELECTED);
		custom.drawHand();
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
