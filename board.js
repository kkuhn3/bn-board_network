SIDE = {
	LEFT: 'red',
	RIGHT: 'blue',
}

PANELTYPE = {
	NORMAL: "normal",
	HOLE: "hole",
	GRASS: "grass",
	POISON: "poison",
	CRACKED: "cracked",
	ICE: "ice",
	HOLY: "holy",
	BROKEN: "broken",
	UP: "up",
	RIGHT: "right",
	DOWN: "down",
	LEFT: "left",
	SPIRITFURY: "spiritfury",
	ANTISWORD: "antisword",
	POISONAPPLE: "poisonapple",
	DOUBLECROSS: "doublecross",
	GIGAMINE: "gigamine",
	MISS: "miss",
}
var paneltypes = [PANELTYPE.NORMAL, PANELTYPE.HOLE, PANELTYPE.GRASS, PANELTYPE.POISON, 
				  PANELTYPE.CRACKED, PANELTYPE.ICE, PANELTYPE.HOLY, PANELTYPE.BROKEN, 
				  PANELTYPE.UP, PANELTYPE.RIGHT, PANELTYPE.DOWN, PANELTYPE.LEFT, 
				  PANELTYPE.MISS,
				  PANELTYPE.SPIRITFURY, PANELTYPE.ANTISWORD, PANELTYPE.POISONAPPLE, PANELTYPE.DOUBLECROSS, PANELTYPE.GIGAMINE];

var backgrounds = ["BN6ACDCbg", "BN6Centralbg", "BN6Greenbg", "BN6Seasidebg", "BN6Skybg"];

ACTIONS = {
	NONE: 0,
	BUSTER: 1,
	CARD: 2,
	SPECIAL: 3,
}

var playerHP = 1500;
var busterDefualt = 10;
var reflDefault = 50;

var playerOne = {
	name:"one",
	hp:playerHP,
	color:"#0000FF",
	image: blue_man,
	x:1,
	y:1,
	action:ACTIONS.NONE,
	card:null,
	invis:0,
	guard:null,
	stunned: 0,
	bubbled: 0,
	frozen: 0,
	busterType: (new BN6Buster()),
	bugs: [],
	barrier: null, 
	invincible: 0,
	confused: 0,
	timpanid: 0,
	blinded: 0,
	trap: null,
	lastX: 1,
	lastY: 1,
	bushidoCount: 0,
};

var playerTwo = {
	name:"two",
	hp:playerHP,
	color:"#FF0000",
	image: grey_man,
	x:4,
	y:1,
	action:ACTIONS.NONE,
	card:null,
	invis:0,
	guard:null,
	stunned:0,
	bubbled: 0,
	frozen: 0,
	busterType: (new BN6Buster()),
	bugs: [],
	barrier: null,
	invincible: 0,
	confused: 0,
	timpanid: 0,
	blinded: 0,
	trap: null,
	lastX: 4,
	lastY: 1,
	bushidoCount: 0,
};

var player = -1;
var cells = null;
var playerSelected = false;
var movementEnabled = false;

function Board(width,height,canvas){
	cells = [[]];
	this.width = width;
	this.height = height;
	this.canvas = canvas;
	this.selected = -1;
	this.backgroundImg = null
	var ctx = canvas.getContext('2d');
	var cwidth = this.canvas.width;
	var cheight = this.canvas.height / 2;
	var cheightOffset = this.canvas.height / 2 - this.canvas.height / 8;
	var cellWidth = cwidth/this.width;
	var cellHeight = cheight/this.height;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	this.initCells = function(){
		this.backgroundImg = backgrounds[Math.floor(Math.random()*backgrounds.length)];
		cells = [];
		for(var x=0;x<this.width;x++){
			cells[x]=[];
			for(var y=0;y<this.height;y++){
				if(x < 3){
					cells[x][y]={
						side:SIDE.LEFT,
						defaultside:SIDE.LEFT,
						sideTimer:-1,
						object:[],
						panelType:PANELTYPE.NORMAL,
						//panelType: paneltypes[Math.floor(Math.random() * paneltypes.length)],
						panelTimer:-1,
						player:null
					};
				}
				else{
					cells[x][y]={
						side:SIDE.RIGHT,
						defaultside:SIDE.RIGHT,
						sideTimer:-1,
						object:[],
						panelType:PANELTYPE.NORMAL,
						//panelType: paneltypes[Math.floor(Math.random() * paneltypes.length)],
						panelTimer:-1,
						player:null
					};
				}
			}
		}
	}

	this.reset = function(){
		this.initCells();
		playerOne.hp = playerHP;
		playerOne.x = 1;
		playerOne.y = 1;
		playerTwo.hp = playerHP;
		playerTwo.x = 4;
		playerTwo.y = 1;
		cells[playerOne.x][playerOne.y].player = playerOne;
		cells[playerTwo.x][playerTwo.y].player = playerTwo;
		player = playerOne;
		$.post("save.php",{id:"confirmone", state: JSON.stringify(false)});
		$.post("save.php",{id:"confirmtwo", state: JSON.stringify(false)});
	}

	this.drawCell = function(x,y){
		var left = x*cellWidth;
		var top = y*cellHeight + cheightOffset;
		if(cells[x][y].panelType !== PANELTYPE.MISS){
			if(this.isOverlayPanel(cells[x][y].panelType)){
				ctx.drawImage(document.getElementById(cells[x][y].side+PANELTYPE.NORMAL),left,top,cellWidth,cellHeight);
				ctx.drawImage(document.getElementById(cells[x][y].panelType+"overlay"),left,top,cellWidth,cellHeight);
			}
			else if(this.isTrapPanel(cells[x][y].panelType)){
				ctx.drawImage(document.getElementById(cells[x][y].side+PANELTYPE.NORMAL),left,top,cellWidth,cellHeight);
				ctx.drawImage(document.getElementById("trapoverlay"),left,top,cellWidth,cellHeight);
			}
			else{
				ctx.drawImage(document.getElementById(cells[x][y].side+cells[x][y].panelType),left,top,cellWidth,cellHeight);
			}
			if(y === 2|| (cells[x][y+1] && cells[x][y+1].panelType === PANELTYPE.MISS)){
				ctx.drawImage(document.getElementById(cells[x][y].side+"bottom"),left,top+cellHeight,cellWidth,cellHeight/5);
			}
			for(var i = 0; i < cells[x][y].object.length; i++){
				this.objImage = cells[x][y].object[i].image.id;
				if(cells[x][y].object[i].attacker && cells[x][y].object[i].attacker.name !== playerOne.name){
					this.objImage = this.objImage.concat("2");
				}
				ctx.drawImage(document.getElementById(this.objImage), left+cellWidth/8, top-3*cellHeight/4, 3*cellWidth/4, cellHeight*1.5);
			}
		}
	}

	this.drawPlayer = function(playerDraw){
		var centerX = playerDraw.x * cellWidth + cellWidth / 2;
		var centerY = playerDraw.y * cellHeight + cellHeight / 2 + cheightOffset;

		this.drawPlayerImage(centerX, centerY, playerDraw);

		if(!playerSelected){
			ctx.fillStyle = "#FFFFFF"; 
			ctx.fillRect(centerX - cellWidth/3, centerY - cellHeight * 3 / 4 , cellWidth / 1.5, cellHeight / 2);
			ctx.strokeStyle = "black";
			ctx.lineWidth = "2";
			ctx.rect(centerX - cellWidth/3, centerY - cellHeight * 3 / 4 , cellWidth / 1.5, cellHeight / 2);
			ctx.stroke();
			ctx.fillStyle = "#000000";
			ctx.font = "10px Arial";
			ctx.fillText("Choose player " + playerDraw.name, centerX, centerY - cellHeight / 2);
		}
	}

	this.drawPlayerImage = function(centerX, centerY, playerDraw){
		ctx.drawImage(playerDraw.image,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
		if(playerDraw.barrier !== null){
			ctx.globalAlpha = 0.5;
			if(playerDraw.barrier.id === "BasicBarrier"){
				if(playerDraw.barrier.hp <= 10){
					ctx.drawImage(barrier10,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
				}
				else if(playerDraw.barrier.hp <= 100){
					ctx.drawImage(barrier100,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
				}
				else{
					ctx.drawImage(barrier200,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
				}
			}
			else if(playerDraw.barrier.id === "AuraBarrier"){
				if(playerDraw.barrier.hp <= 100){
					ctx.drawImage(aura100,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
				}
				else{
					ctx.drawImage(aura200,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
				}
			}
			else if(playerDraw.barrier.id === "BubbleBarrier"){
				ctx.globalAlpha = 1.0;
				if(playerDraw.barrier.hp > 0){
					ctx.drawImage(bubblebarrier,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
				}
			}
			else if(playerDraw.barrier.id === "HitsBarrier"){
				if(playerDraw.barrier.hp <= 1){
					ctx.drawImage(barrier10,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
				}
				else if(playerDraw.barrier.hp <= 4){
					ctx.drawImage(barrier100,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
				}
				else{
					ctx.drawImage(barrier200,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);
				}
			}
		}

		ctx.globalAlpha = 1.0;
		
		ctx.font = "20px Arial";
		if(playerDraw.trap !== null){
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 8;
			ctx.strokeText("????", centerX, centerY-cellHeight/8);
			ctx.fillStyle="#FFFFFF";
			ctx.fillText("????", centerX, centerY-cellHeight/8);
		}
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 8;
		ctx.strokeText(playerDraw.hp,centerX,centerY+cellHeight/4);
		ctx.fillStyle="#FFFFFF";
		ctx.fillText(playerDraw.hp,centerX,centerY+cellHeight/4);
	}

	this.draw = function(){
		ctx.fillStyle="#000000";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		ctx.drawImage(document.getElementById(this.backgroundImg+(timer.totalTurns%7)),0,0,canvas.width,canvas.height/2);
		ctx.drawImage(document.getElementById(this.backgroundImg+(timer.totalTurns%7)),0,canvas.height/2,canvas.width,canvas.height/2);
		for(var x=0;x<this.width;x++){
			for(var y=0;y<this.height;y++){
				this.drawCell(x,y);
			}
		}
		if(player.name === playerOne.name || playerTwo.blinded < 1){
			this.drawPlayer(playerOne);
		}
		if(player.name === playerTwo.name || playerOne.blinded < 1){
			this.drawPlayer(playerTwo);
		}

		if(playerSelected){
			this.centerX = cellWidth * 5;
			this.centerY = cheightOffset + cheight + (this.canvas.height - (cheightOffset + cheight)) / 2;
			if(player.name === playerOne.name){
				this.centerX = cellWidth * 1;
			}
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 8;
			ctx.font = "20px Arial";
			ctx.strokeText("You are Player " + player.name,this.centerX,this.centerY);
			ctx.fillStyle="#FFFFFF";
			ctx.fillText("You are Player " + player.name,this.centerX,this.centerY);
		}
	}

	this.mouseDown = function(e){
		if(!playerSelected){
			this.mouseCellX = Math.floor(this.width * e.offsetX/e.target.width);
			this.mouseCellY = Math.floor((this.height * (e.offsetY - cheightOffset )) / (e.target.height/2));
			if(this.mouseCellX === 1 && this.mouseCellY < 2){
				this.turnOffbuttons();
			}
			else if(this.mouseCellX === 4 && this.mouseCellY < 2){
				this.switchPlayer();
				this.turnOffbuttons();
			}
		}

		this.selected = -1;
		if(movementEnabled){
			this.mouseCellX = Math.floor(this.width * e.offsetX/e.target.width);
			this.mouseCellY = Math.floor((this.height * (e.offsetY - cheightOffset )) / (e.target.height/2));
			if(playerOne.x === this.mouseCellX && playerOne.y === this.mouseCellY && player === playerOne && this.playerCanMove(player)){
				this.selected = 1;
				cells[this.mouseCellX][this.mouseCellY].player = null;
			}
			else if(playerTwo.x === this.mouseCellX && playerTwo.y === this.mouseCellY && player === playerTwo && this.playerCanMove(player)){
				this.selected = 2;
				cells[this.mouseCellX][this.mouseCellY].player = null;
			}
		}
	}.bind(this);

	this.mouseMove = function(e){
		this.draw();
		if(this.selected !== -1){
			if(this.selected === 1){
				this.drawPlayerImage(e.offsetX, e.offsetY, playerOne);
			}
			else if (this.selected === 2){
				this.drawPlayerImage(e.offsetX, e.offsetY, playerTwo);
			}
		}
	}.bind(this);

	this.mouseUp = function(e){
		this.mouseCellX = Math.floor(this.width * e.offsetX/e.target.width);
		this.mouseCellY = Math.floor((this.height * (e.offsetY - cheightOffset )) / (e.target.height/2));
		if(this.selected === 1 && this.isCellThisPlayerValid(this.mouseCellX, this.mouseCellY, playerOne)){
			playerOne.x = this.mouseCellX;
			playerOne.y = this.mouseCellY;
			cells[this.mouseCellX][this.mouseCellY].player = playerOne;
		}
		else if (this.selected === 2 && this.isCellThisPlayerValid(this.mouseCellX, this.mouseCellY, playerTwo)){
			playerTwo.x = this.mouseCellX;
			playerTwo.y = this.mouseCellY;
			cells[this.mouseCellX][this.mouseCellY].player = playerTwo;
		}

		this.draw();
		this.selected = -1;
	}.bind(this);
	
	this.playerCanMove = function(aPlayer){
		if(aPlayer.stunned > 0){
			return false;
		}
		if(aPlayer.frozen > 0){
			return false;
		}
		if(aPlayer.bubbled > 0){
			return false;
		}
		if(aPlayer.timpanid > 0){
			return false;
		}
		return true;
	}

	this.resolveTurn = function(){
		this.otherPlayer = "one";
		if(player.name === "one"){
			this.otherPlayer = "two";
		}
		$.post("save.php",{id:"confirm"+this.otherPlayer, state: JSON.stringify(false)});
		console.log("======================= turn start =======================");
		this.resolvePlayerPanels(playerOne);
		this.resolvePlayerPanels(playerTwo);
		this.objectPassives();
		this.p1priority = 2;
		this.p2priority = 2;
		if(playerOne.confused > 0 && this.generateRandomBoolean()){
			playerOne.action = ACTIONS.BUSTER;
		}
		if(playerTwo.confused > 0 && this.generateRandomBoolean()){
			playerTwo.action = ACTIONS.BUSTER;
		}
		if(playerOne.action === ACTIONS.CARD || playerOne.action === ACTIONS.SPECIAL){
			this.p1priority = playerOne.card.priority;
		}
		if(playerTwo.action === ACTIONS.CARD || playerTwo.action === ACTIONS.SPECIAL){
			this.p2priority = playerTwo.card.priority;
		}

		if(this.p1priority === 0 && this.p2priority === 0){
			this.resolve(playerTwo, playerOne);
			this.resolve(playerOne, playerTwo);
		}
		else if(this.p1priority <= this.p2priority){
			this.hitbool = this.resolve(playerOne, playerTwo);
			if(this.hitbool && this.p1priority === 1 && this.p2priority === 3){
				playerTwo.stunned = 1;
			}
			this.resolve(playerTwo, playerOne);
		}
		else{
			this.hitbool = this.resolve(playerTwo, playerOne);
			if(this.hitbool && this.p2priority === 1 && this.p1priority === 3){
				playerOne.stunned = 1;
			}
			this.resolve(playerOne, playerTwo);
		}
		this.resolveBugs();
		this.resolvePlayerPanels(playerOne);
		this.resolvePlayerPanels(playerTwo);
		this.resolvePanels();
		this.resetPlayer(playerOne);
		this.resetPlayer(playerTwo);
		this.draw();
		custom.drawHand();
		console.log("======================== turn end ========================");
		document.getElementById("nextturn").style.display='none';
		this.isGameOver();
	}

	this.generateRandomBoolean = function(){
		this.val = this.generateRandomNum(2);
		return this.val === 1;
	}
	
	this.generateRandomNum = function(outOf){
		this.sum = this.generateRandomSum();
		this.val = this.sum % outOf;
		return this.val;
	}

	this.generateRandomPanel = function(){
		this.sum = this.generateRandomSum();
		this.locNum = this.sum % 18;
		this.x = Math.floor(this.locNum / 3);
		this.y = this.locNum % 3;
		return [this.x, this.y];
	}

	this.generateRandomSum = function(){
		this.sum = 0;
		if(playerOne.ACTIONS === ACTIONS.CARD){
			this.sum = this.sum + CARDLIST.indexOf(playerOne.card);
		}
		else{
			this.sum = this.sum + CARDLIST.length+1;
		}
		if(playerTwo.ACTIONS === ACTIONS.CARD){
			this.sum = this.sum + CARDLIST.indexOf(playerTwo.card);
		}
		else{
			this.sum = this.sum + CARDLIST.length+2;
		}
		this.sum = this.sum + playerOne.hp;
		this.sum = this.sum + playerTwo.hp;
		this.sum = this.sum + playerOne.x;
		this.sum = this.sum + playerOne.y;
		this.sum = this.sum + playerTwo.x;
		this.sum = this.sum + playerTwo.y;
		this.sum = this.sum + PANELTYPE.indexOf(cells[playerOne.x][playerOne.y].panelType);
		this.sum = this.sum + PANELTYPE.indexOf(cells[playerTwo.x][playerTwo.y].panelType);
		return this.sum;
	}

	this.resolveBugs = function(){
		for(var i = 0; i < playerOne.bugs.length; i++){
			playerOne.bugs[i].resolve(playerOne);
		}
		for(var j = 0; j < playerTwo.bugs.length; j++){
			playerTwo.bugs[j].resolve(playerTwo);
		}
	}

	this.resolvePlayerPanels = function(aPlayer){
		this.movePanels = [PANELTYPE.UP, PANELTYPE.RIGHT, PANELTYPE.DOWN, PANELTYPE.LEFT];
		while(this.movePanels.includes(cells[aPlayer.x][aPlayer.y].panelType)){
			cells[aPlayer.x][aPlayer.y].player = null;
			this.PlayerPanel = cells[aPlayer.x][aPlayer.y].panelType;
			if(this.PlayerPanel === PANELTYPE.UP){
				if(board.isCellThisPlayerValid(aPlayer.x, aPlayer.y-1, aPlayer)){
					aPlayer.y = aPlayer.y - 1;
				}
				else{
					break;
				}
			}
			else if(this.PlayerPanel === PANELTYPE.RIGHT){
				if(board.isCellThisPlayerValid(aPlayer.x+1, aPlayer.y, aPlayer)){
					aPlayer.x = aPlayer.x + 1;
				}
				else{
					break;
				}
			}
			else if(this.PlayerPanel === PANELTYPE.DOWN){
				if(board.isCellThisPlayerValid(aPlayer.x, aPlayer.y+1, aPlayer)){
					aPlayer.y = aPlayer.y + 1;
				}
				else{
					break;
				}
			}
			else if(this.PlayerPanel === PANELTYPE.LEFT){
				if(board.isCellThisPlayerValid(aPlayer.x-1, aPlayer.y, aPlayer)){
					aPlayer.x = aPlayer.x - 1;
				}
				else{
					break;
				}
			}
		}
		cells[aPlayer.x][aPlayer.y].player = aPlayer;
		if(cells[aPlayer.x][aPlayer.y].panelType === PANELTYPE.POISON){
			aPlayer.hp = aPlayer.hp - 25;
		}
		if(aPlayer.lastX !== aPlayer.x || aPlayer.lastY !== aPlayer.y){
			if(cells[aPlayer.lastX][aPlayer.lastY].panelType === PANELTYPE.CRACKED){
				this.convertPanel(aPlayer.lastX, aPlayer.lastY, PANELTYPE.BROKEN);
			}
			aPlayer.lastX = aPlayer.x;
			aPlayer.lastY = aPlayer.y;
		}
	}
	
	this.resolvePanels = function(){
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells[i].length; j++){
				if(cells[i][j].sideTimer === 0){
					if(cells[i][j].defaultside === SIDE.LEFT){
						if(playerTwo.x > i || playerTwo.y !== j){
							cells[i][j].side = cells[i][j].defaultside;
							cells[i][j].sideTimer = -1;
						}
					}
					else if(cells[i][j].defaultside === SIDE.RIGHT){
						if(playerOne.x < i || playerOne.y !== j){
							cells[i][j].side = cells[i][j].defaultside;
							cells[i][j].sideTimer = -1;
						}
					}
				}
				else if(cells[i][j].sideTimer > 0){
					cells[i][j].sideTimer--;
				}
				if(cells[i][j].panelTimer === 0){
					this.convertPanel(i, j, PANELTYPE.NORMAL);
					cells[i][j].panelTimer = -1;
				}
				else if(cells[i][j].panelTimer > 0){
					cells[i][j].panelTimer--;
				}
			}
		}
	}
	
	this.objectPassives = function(){
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				for(var i=0; i < cells[x][y].object.length; i++){
					if(!cells[x][y].object[i].passiveTriggered){
						cells[x][y].object[i].passiveTriggered = true;
						cells[x][y].object[i].passive();
					}
				}
			}
		}
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				for(var i=0; i < cells[x][y].object.length; i++){
					cells[x][y].object[i].passiveTriggered = false;
				}
			}
		}
	}

	this.resolve = function(attacker, defender){
		this.hitbool = this.resolveActions(attacker, defender);
		this.resolveObjects(attacker, defender);
		attacker.stunned = attacker.stunned - 1;
		attacker.bubbled = attacker.bubbled - 1;
		attacker.frozen = attacker.frozen - 1;
		return this.hitbool;
	}

	this.resolveActions = function(attacker, defender){
		if(attacker.name === player.name){
			document.getElementById("special").style.display='none';
		}
		if(attacker.stunned < 1 && attacker.bubbled < 1 && attacker.frozen < 1){
			if(attacker.action === ACTIONS.BUSTER){
				return this.attackWithCard(attacker, defender, attacker.busterType);
			}
			else if(attacker.action === ACTIONS.CARD || attacker.action === ACTIONS.SPECIAL){
				if(attacker.card.rank === "mega" && this.isMegaCrushed(attacker)){
					console.log("player " + attacker.name + " Mega Card was Crushed!");
					return false;
				}
				return this.attackWithCard(attacker, defender, attacker.card);
			}
		}
		else{
			console.log("player " + attacker.name + " is Stunned!");
			return false;
		}
	}

	this.attackWithCard = function(attacker, defender, attackCard){
		console.log("player " + attacker.name + " used: " + attackCard.name);
		this.resolveHit = false;
		this.isAllowedbyTrap = true;
		if(defender.trap && defender.trap.triggerOnCard(attackCard)){
			this.isAllowedbyTrap = defender.trap.trigger(attacker, defender, attackCard);
		}
		if(this.isTrapPanel(cells[attacker.x][attacker.y].panelType)){
			this.isAllowedbyTrap = this.checkTrapPanel(attacker, defender, attackCard);
		}
		if(this.isAllowedbyTrap){
			if(attackCard.hithuh(attacker, defender)){
				if(attackCard.elements.includes(ELEMENTS.cursor)){
					defender.trap = null;
				}
				if(defender.trap && defender.trap.triggerOnHit(attackCard)){
					defender.trap.trigger(attacker, defender, attackCard);
				}
				if(attackCard.elements.includes(ELEMENTS.break)){
					defender.guard = null;
				}
				if(attackCard.elements.includes(ELEMENTS.wind)){
					defender.barrier = null;
				}
				if(defender.guard === null){
					if(defender.invincible < 1){
						this.oneHitmultiplier = this.calculateOneHitMultiplier(attacker, defender, attackCard);
						this.allHitmultiplier = this.calculateAllHitMultiplier(attacker, defender);
						this.damageDealt = this.calculateDamage(attacker, defender, attackCard, this.oneHitmultiplier, this.allHitmultiplier);
						this.damageReduced = 0;
						if(this.damageDealt > 0){
							if(defender.trap && defender.trap.triggerOnDamage(attackCard)){
								this.damageReduced = defender.trap.dodgesDamage(attacker, attackCard, this.oneHitmultiplier, this.allHitmultiplier);
								defender.trap.trigger(attacker, defender, attackCard);
							}
						}
						if(this.damageReduced !== this.damageDealt || this.damageReduced <= 0){
							defender.bubbled = 0;
							attackCard.effecthit(attacker, defender);
							if(attackCard.stunAdded && defender.stunned < 1){
								defender.stunned = 1;
							}
							if(attackCard.uninstallAdded){
								//toDo: navicust? 
								console.log("Uninstalled!");
								defender.busterType = new BN6Buster();
							}
						}
						defender.hp = defender.hp - this.damageDealt + this.damageReduced;
						if(defender.barrier && defender.barrier.isBarrierDestroyed()){
							defender.barrier = null;
						}
						console.log("it hit! Dealing " + (this.damageDealt - this.damageReduced) + " damage!");
						this.resolveHit = (this.damageDealt - this.damageReduced) > 0;
					}
					else{
						console.log("it hit! But Player " + defender.name + " was Invincible.");
					}
				}
				else{
					defender.guard.onHit(attacker, defender);
					console.log("it was guarded!");
				}
				if(!this.resolveHit){
					attackCard.effectmiss(attacker, defender);
				}
			}
			else{
				attackCard.effectmiss(attacker, defender);
				console.log("it missed!");
			}
		}
		return this.resolveHit;
	}

	this.checkTrapPanel = function(attacker, defender, attackCard){
		//PANELTYPE.SPIRITFURY, PANELTYPE.ANTISWORD, PANELTYPE.POISONAPPLE, PANELTYPE.DOUBLECROSS, PANELTYPE.GIGAMINE
		if(cells[attacker.x][attacker.y].panelType === PANELTYPE.SPIRITFURY){
			if(attackCard.elements.includes(ELEMENTS.aqua) ||
			   attackCard.elements.includes(ELEMENTS.fire) ||
			   attackCard.elements.includes(ELEMENTS.wood) || 
			   attackCard.elements.includes(ELEMENTS.elec) ){
				attacker.hp = attacker.hp - 220;
				console.log("Trap Panel Triggered!");
				return false;
			}
		}
		else if(cells[attacker.x][attacker.y].panelType === PANELTYPE.ANTISWORD){
			if(attackCard.elements.includes(ELEMENTS.sword)){
				attacker.hp = attacker.hp - 240;
				console.log("Trap Panel Triggered!");
				return false;
			}
		}
		else if(cells[attacker.x][attacker.y].panelType === PANELTYPE.POISONAPPLE){
			if(attackCard.name.indexOf("Recover") > 0){
				this.s = attackCard.name.indexOf("Recover") + 7;
				this.e = attackCard.name.length;
				this.val = parseInt(attackCard.name.substring(this.s, this.e));
				attacker.hp = attacker.hp - this.val;
				console.log("Trap Panel Triggered!");
				return false;
			}
		}
		else if(cells[attacker.x][attacker.y].panelType === PANELTYPE.DOUBLECROSS){
			if(attackCard.rank === "mega"){
				console.log("Trap Panel Triggered!");
				this.attackWithCard(defender, attacker, attackCard);
				return false;
			}
		}
		else if(cells[attacker.x][attacker.y].panelType === PANELTYPE.GIGAMINE){
			if(attackCard.rank === "giga"){
				attacker.hp = attacker.hp - 300;
				console.log("Trap Panel Triggered!");
				return false;
			}
		}
	}

	this.removeTrapPanels = function(attacker){
		this.acceptedSide = SIDE.RIGHT;
		if(attacker.name === playerOne.name){
			this.acceptedSide = SIDE.LEFT;
		}
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(cells[x][y].side === this.acceptedSide){
					if(this.isTrapPanel(cells[x][y].panelType)){
						this.convertPanel(x, y, PANELTYPE.normal);
					}
				}
			}
		}
	}
	
	this.calculateOneHitMultiplier = function(attacker, defender, attackCard){
		this.multiplier = 1.0;
		if(attackCard.elements.includes(ELEMENTS.fire) && cells[defender.x][defender.y].panelType === PANELTYPE.GRASS){
			this.multiplier = this.multiplier*2;
			this.convertPanel(defender.x, defender.y, PANELTYPE.NORMAL);
		}
		if(attackCard.elements.includes(ELEMENTS.elec) && defender.bubbled > 0){
			this.multiplier = this.multiplier*2;
		}
		if(attackCard.elements.includes(ELEMENTS.break) && defender.frozen > 0){
			this.multiplier = this.multiplier*2;
			defender.frozen = 0;
		}
		if(attackCard.elements.includes(ELEMENTS.elec) && defender.barrier !== null && defender.barrier.id === "BubbleBarrier"){
			this.multiplier = this.multiplier*2;
			defender.barrier = null;
		}
		return this.multiplier;
	}
	
	this.calculateAllHitMultiplier = function(attacker, defender){
		this.multiplier = 1.0;
		if(cells[defender.x][defender.y].panelType === PANELTYPE.HOLY){
			this.multiplier = this.multiplier * .5;
		}
		return this.multiplier;
	}
	
	this.calculateDamage = function(attacker, defender, attackCard, oneHitMulti, allHitMulti){
		if(attackCard.damage === 0){
			return 0;
		}
		if(!attackCard.addDamage){
			attackCard.addDamage = 0;
		}
		if(!attackCard.boostDamage){
			attackCard.boostDamage = 0;
		}
		this.baseDamage = attackCard.damage + attackCard.addDamage + attackCard.boostDamage;
		this.barrierAbsorbed = 0;
		if(defender.barrier !== null){
			this.barrierAbsorbed = defender.barrier.calculateDamageAbsorbed(this.baseDamage, oneHitMulti, allHitMulti, attackCard.hits);
		}
		this.firstHit = this.baseDamage * oneHitMulti;
		this.restHits = 0;
		if(attackCard.hits > 1){
			this.restHits = this.baseDamage * (attackCard.hits - 1);
		}
		this.totalBase = this.firstHit + this.restHits;
		return this.totalBase * allHitMulti - this.barrierAbsorbed;
	}

	this.resolveObjects = function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};

		cells[defender.x][defender.y].object.concat([new PlayerObject()]);
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				for(var i=0; i < cells[x][y].object.length; i++){
					if(cells[x][y].object[i].id !== "playerObject"){
						fakeDefender.x = x;
						fakeDefender.y = y;

						if(attacker.action === ACTIONS.BUSTER){
							if(attacker.busterType.hithuh(attacker, fakeDefender)){
								cells[x][y].object[i].hitByBuster(attacker);
							}
						}
						else if(attacker.action === ACTIONS.CARD){
							if(attacker.card.hithuh(attacker, fakeDefender)){
								cells[x][y].object[i].effecthit(attacker);
							}
						}
					}
				}
			}
		}
		cells[defender.x][defender.y].object = [];
	}

	this.isMegaCrushed = function(attacker){
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(cells[x][y].object){
					for(var i = 0; i < cells[x][y].object.length; i++){
						if(cells[x][y].object[i].id === "SF3MegaCrusherObj"){
							if(cells[x][y].object[i].attacker.name !== attacker.name){
								return true;
							}
						}
					}
				}
			}
		}
		return false;
	}

	this.convertPanel = function(x, y, newPanel){
		if(cells[x]){
			if(cells[x][y]){
				if(cells[x][y].panelType === PANELTYPE.MISS && PANELTYPE.NORMAL === newPanel){
					cells[x][y].panelType = newPanel;
					return true;
				}
				if(cells[x][y].panelType === PANELTYPE.MISS){
					return false;
				}
				if(cells[x][y].panelType === PANELTYPE.HOLE){
					return false;
				}
				if(cells[x][y].panelType === PANELTYPE.BROKEN && (PANELTYPE.NORMAL === newPanel || PANELTYPE.HOLY === newPanel)){
					cells[x][y].panelType = newPanel;
					return true;
				}
				if(cells[x][y].panelType === PANELTYPE.BROKEN){
					return false;
				}
				if(cells[x][y].panelType === PANELTYPE.CRACKED && newPanel === PANELTYPE.CRACKED){
					newPanel = PANELTYPE.BROKEN;
				}
				if(newPanel === PANELTYPE.BROKEN){
					if(cells[x][y].player !== null || this.cellHasSolidObject(x, y)){
						newPanel = PANELTYPE.CRACKED;
					}
					else{
						cells[x][y].panelTimer = 5;
					}
				}
				if(newPanel === PANELTYPE.MISS){
					cells[x][y].panelTimer = 12;
				}
				cells[x][y].panelType = newPanel;
				return true;
			}
		}
		return false;
	}

	this.cellHasSolidObject = function(x, y){
		if(cells[x]){
			if(cells[x][y]){
				for(var i=0; i < cells[x][y].object.length; i++){
					if(cells[x][y].object[i].solid){
						return true;
					}
				}
			}
		}
		return false;
	}

	this.isHole = function(x, y){
		if(cells[x]){
			if(cells[x][y]){
				if(cells[x][y].panelType === PANELTYPE.HOLE){
					return true;
				}
				if(cells[x][y].panelType === PANELTYPE.BROKEN){
					return true;
				}
			}
		}
		return false;
	}

	this.isCellPlayerValid = function(x, y){
		if(cells[x]){
			if(cells[x][y]){
				if(cells[x][y].panelType === PANELTYPE.MISS){
					return false;
				}
				if(this.isHole(x, y)){
					return false;
				}
				if(this.cellHasSolidObject(x, y)){
					return false;
				}
				if(cells[x][y].player !== null){
					return false;
				}
				return true;
			}
		}
		return false;
	}

	this.isCellThisPlayerValid = function(x, y, aPlayer){
		this.acceptedSide = SIDE.RIGHT;
		if(aPlayer.name === "one"){
			this.acceptedSide = SIDE.LEFT;
		}
		if(this.isCellPlayerValid(x, y)){
			return cells[x][y].side === this.acceptedSide;
		}
		return false;
	}

	this.isOverlayPanel = function(panel){
		var normalPanels = [PANELTYPE.GRASS, PANELTYPE.POISON, PANELTYPE.ICE, PANELTYPE.HOLY, 
							PANELTYPE.UP, PANELTYPE.RIGHT, PANELTYPE.DOWN, PANELTYPE.LEFT];
		if(normalPanels.indexOf(panel) !== -1){
			return true;
		}
		return false;
	}

	this.isTrapPanel = function(panel){
		var trapPanels = [PANELTYPE.SPIRITFURY, PANELTYPE.ANTISWORD, PANELTYPE.POISONAPPLE, PANELTYPE.DOUBLECROSS, PANELTYPE.GIGAMINE];
		if(trapPanels.indexOf(panel) !== -1){
			return true;
		}
		return false;
	}

	this.endOfRow = function(y, isRedSide){
		this.panelsStarted = false;
		if(isRedSide){
			for(var x = 0; x < cells.length; x++){
				if(cells[x][y].panelType === PANELTYPE.MISS){
					if(this.panelsStarted){
						return x-1;
					}
				}
				else{
					this.panelsStarted = true;
				}
			}
			return cells.length - 1;
		}
		else{
			for(var x = cells.length - 1; x >= 0; x--){
				if(cells[x][y].panelType === PANELTYPE.MISS){
					if(this.panelsStarted){
						return x+1;
					}
				}
				else{
					this.panelsStarted = true;
				}
			}
			return 0;
		}
	}

	this.farthestEndOfRow = function(isRedSide){
		if(isRedSide){
			this.farthest = 0;
			for(var y = 0; y < 3; y++){
				if(this.farthest < this.endOfRow(y, true)){
					this.farthest = this.endOfRow(y, true);
				}
			}
			return this.farthest;
		}
		else{
			this.farthest = 6;
			for(var y = 0; y < 3; y++){
				if(this.farthest > this.endOfRow(y, false)){
					this.farthest = this.endOfRow(y, false);
				}
			}
			return this.farthest;
		}
	}

	this.resetPlayer = function(player){
		player.action = ACTIONS.NONE;
		player.card = null;
		player.invis = player.invis - 1;
		player.guard = null;
		player.invincible = player.invincible - 1;
		player.confused = player.confused - 1;
		player.timpanid = player.timpanid - 1;
		player.blinded = player.blinded - 1;
	}

	this.switchPlayer = function(){
		if(player.name === playerOne.name){
			player = playerTwo;
			document.getElementById("combatWindow").style.float='left';
			document.getElementById("customWindow").style.float='right';
			document.getElementById("confirm").style.float='right';
			document.getElementById("nextturn").style.float='right';
			document.getElementById("pick_canvas").style.float='right';
			document.getElementById("sel").style.float='left';
			document.getElementById("useBuster").style.float='right';
			document.getElementById("useCard").style.float='right';
			document.getElementById("special").style.float='right';
		}
		else{
			player = playerOne;
			document.getElementById("combatWindow").style.float='right';
			document.getElementById("customWindow").style.float='left';
			document.getElementById("confirm").style.float='left';
			document.getElementById("nextturn").style.float='left';
			document.getElementById("pick_canvas").style.float='left';
			document.getElementById("sel").style.float='right';
			document.getElementById("useBuster").style.float='left';
			document.getElementById("useCard").style.float='left';
			document.getElementById("special").style.float='left';
		}
		customPick.drawHand();
	}
	
	this.turnOffbuttons = function(){
		document.getElementById("confirm").style.display='block';
		playerSelected = true;
	}

	this.showRange = function(attacker, card){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		for(var x=0;x<cells.length;x++){
			for(var y=0;y<cells[x].length;y++){
				if(cells[x][y].panelType !== PANELTYPE.MISS){
					fakeDefender.x = x;
					fakeDefender.y = y;
					if(card.hithuh(attacker, fakeDefender)){
						var left = x*cellWidth;
						var top = y*cellHeight + cheightOffset;
						ctx.fillStyle="#00FF00";
						ctx.fillRect(left+cellWidth/4,top+cellHeight/4,cellWidth/2,cellHeight/2);
					}
				}
			}
		}
		fakeDefender.x = playerOne.x;
		fakeDefender.y = playerOne.y;
		if(attacker.name === "one"){
			fakeDefender.x = playerTwo.x;
			fakeDefender.y = playerTwo.y;
		}
		card.hithuh(attacker, fakeDefender);
	}

	this.randomMovePlayer = function(player){
		player.x = Math.floor(Math.random() * 6);
		player.y = Math.floor(Math.random() * 3);

		if(cells[player.x][player.y] === player.color){
			this.randomMovePlayer(player);
		}
		return true;
	}

	this.isGameOver = function(){
		if(playerOne.hp < 1 && playerTwo.hp < 1){
			console.log("GAME OVER - TIE");
			document.getElementById("nextturn").disabled = true;
		}
		else if(playerOne.hp < 1){
			console.log("GAME OVER - P2 Wins");
			document.getElementById("nextturn").disabled = true;
		}
		else if(playerTwo.hp < 1){
			console.log("GAME OVER - P1 Wins");
			document.getElementById("nextturn").disabled = true;
		}
	}
}
